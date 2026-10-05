import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Please use POST.'
    })
  }

  try {
    const {
      fullName,
      workEmail,
      companyName,
      companySize = '11-50',
      selectedWorkflows = [],
      problemDescription = '',
    } = req.body || {}

    // Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid full name.'
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!workEmail || !emailRegex.test(workEmail)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid work email address.'
      })
    }

    if (!companyName || typeof companyName !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Please provide your company name.'
      })
    }

    const timestamp = new Date().toISOString()
    const leadRecord = {
      id: `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      fullName: fullName.trim(),
      workEmail: workEmail.trim().toLowerCase(),
      companyName: companyName.trim(),
      companySize,
      selectedWorkflows,
      problemDescription: problemDescription.trim(),
      createdAt: timestamp,
      status: 'AUDIT_SCHEDULED'
    }

    console.log('[Novarix Backend] New Enterprise Lead Captured:', JSON.stringify(leadRecord, null, 2))

    // Optional: Send to Slack / Discord Webhook if configured in environment
    const webhookUrl = process.env.SLACK_WEBHOOK_URL || process.env.DISCORD_WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: `🚀 *New Novarix Enterprise Lead Received!*\n*Name:* ${leadRecord.fullName}\n*Email:* ${leadRecord.workEmail}\n*Company:* ${leadRecord.companyName} (${leadRecord.companySize} employees)\n*Workflows:* ${leadRecord.selectedWorkflows.join(', ')}\n*Notes:* ${leadRecord.problemDescription || 'N/A'}\n*Lead ID:* \`${leadRecord.id}\``,
          }),
        })
      } catch (webhookErr) {
        console.error('[Novarix Backend] Webhook dispatch warning:', webhookErr)
      }
    }

    // Optional: Send Email via Resend if API key is provided
    if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Novarix Intake <leads@novarix.ai>',
            to: [process.env.NOTIFICATION_EMAIL],
            subject: `[New Lead] ${leadRecord.companyName} - ${leadRecord.fullName}`,
            html: `
              <h2>New Enterprise Consultation Request</h2>
              <p><strong>Name:</strong> ${leadRecord.fullName}</p>
              <p><strong>Email:</strong> ${leadRecord.workEmail}</p>
              <p><strong>Company:</strong> ${leadRecord.companyName}</p>
              <p><strong>Company Size:</strong> ${leadRecord.companySize}</p>
              <p><strong>Workflows:</strong> ${leadRecord.selectedWorkflows.join(', ')}</p>
              <p><strong>Problem Description:</strong> ${leadRecord.problemDescription || 'None provided'}</p>
              <p><small>Generated at ${leadRecord.createdAt} | Lead ID: ${leadRecord.id}</small></p>
            `,
          }),
        })
      } catch (emailErr) {
        console.error('[Novarix Backend] Resend email dispatch warning:', emailErr)
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Consultation request successfully recorded. An AI Solutions Architect will contact you within 24 hours.',
      leadId: leadRecord.id,
      timestamp: leadRecord.createdAt,
    })
  } catch (error) {
    console.error('[Novarix Backend] Consultation error:', error)
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your consultation request. Please try again or email us directly at enterprise@novarix.ai.',
    })
  }
}
