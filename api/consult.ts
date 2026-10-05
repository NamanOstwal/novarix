import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

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
    const leadId = `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`
    const leadRecord = {
      id: leadId,
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

    // Formatted HTML Email Template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0C0B0C; color: #FFFFFF; padding: 24px; margin: 0; }
          .container { max-width: 600px; margin: 0 auto; background-color: #151419; border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 16px; padding: 32px; box-shadow: 0 10px 40px rgba(0,0,0,0.8); }
          .badge { display: inline-block; background-color: rgba(0, 240, 255, 0.15); color: #00F0FF; border: 1px solid rgba(0, 240, 255, 0.4); padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; }
          h1 { color: #FFFFFF; font-size: 22px; margin-top: 0; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; }
          .item { margin-bottom: 16px; }
          .label { font-size: 12px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
          .value { font-size: 16px; color: #FFFFFF; font-weight: 500; }
          .workflow-tag { display: inline-block; background: rgba(151, 128, 255, 0.15); color: #9780FF; border: 1px solid rgba(151, 128, 255, 0.3); padding: 3px 8px; border-radius: 6px; font-size: 13px; margin: 2px; }
          .problem-box { background-color: rgba(255,255,255,0.04); border-left: 3px solid #00F0FF; padding: 14px; border-radius: 0 8px 8px 0; font-size: 14px; color: rgba(255,255,255,0.85); line-height: 1.5; }
          .btn { display: inline-block; background-color: #00F0FF; color: #0C0B0C; font-weight: 700; text-decoration: none; padding: 12px 24px; border-radius: 8px; margin-top: 24px; font-size: 14px; }
          .footer { font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 32px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 16px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="badge">Novarix Enterprise Booking</div>
          <h1>New Consultation & Demo Request</h1>
          
          <div class="item">
            <div class="label">Contact Name</div>
            <div class="value">${leadRecord.fullName}</div>
          </div>

          <div class="item">
            <div class="label">Work Email</div>
            <div class="value"><a href="mailto:${leadRecord.workEmail}" style="color: #00F0FF;">${leadRecord.workEmail}</a></div>
          </div>

          <div class="item">
            <div class="label">Company & Team Size</div>
            <div class="value">${leadRecord.companyName} (${leadRecord.companySize} employees)</div>
          </div>

          <div class="item">
            <div class="label">Selected Target Workflows</div>
            <div>
              ${leadRecord.selectedWorkflows.map((w: string) => `<span class="workflow-tag">${w}</span>`).join(' ')}
            </div>
          </div>

          <div class="item">
            <div class="label">Operational Problem & Goals</div>
            <div class="problem-box">${leadRecord.problemDescription || 'No additional notes provided.'}</div>
          </div>

          <a href="mailto:${leadRecord.workEmail}?subject=Re:%20Novarix%20AI%20Consultation%20%7C%20${encodeURIComponent(leadRecord.companyName)}" class="btn">
            Reply to ${leadRecord.fullName} →
          </a>

          <div class="footer">
            Lead Tracking ID: <code>${leadRecord.id}</code><br>
            Captured at: ${leadRecord.createdAt}<br>
            Novarix Sovereign AI Gateway · Production Intake
          </div>
        </div>
      </body>
      </html>
    `

    const recipientEmail = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER

    // =========================================================================
    // 1. Email Dispatch Method A: Resend API (Recommended)
    // =========================================================================
    if (process.env.RESEND_API_KEY && recipientEmail) {
      try {
        const sender = process.env.RESEND_FROM_EMAIL || 'Novarix Leads <onboarding@resend.dev>'
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: sender,
            to: [recipientEmail],
            reply_to: leadRecord.workEmail,
            subject: `[Novarix Demo Request] ${leadRecord.companyName} - ${leadRecord.fullName}`,
            html: emailHtml,
          }),
        })

        if (resendRes.ok) {
          console.log('[Novarix Backend] Email dispatched via Resend successfully to:', recipientEmail)
        } else {
          const resendErr = await resendRes.text()
          console.warn('[Novarix Backend] Resend API responded with error:', resendErr)
        }
      } catch (resendErr) {
        console.error('[Novarix Backend] Resend dispatch error:', resendErr)
      }
    }

    // =========================================================================
    // 2. Email Dispatch Method B: SMTP / Gmail (Nodemailer)
    // =========================================================================
    else if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.SMTP_PORT || '465', 10),
          secure: process.env.SMTP_PORT !== '587', // true for 465, false for 587
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        })

        await transporter.sendMail({
          from: `"Novarix Platform" <${process.env.SMTP_USER}>`,
          to: recipientEmail,
          replyTo: leadRecord.workEmail,
          subject: `[Novarix Demo Request] ${leadRecord.companyName} - ${leadRecord.fullName}`,
          html: emailHtml,
        })

        console.log('[Novarix Backend] Email dispatched via SMTP successfully to:', recipientEmail)
      } catch (smtpErr) {
        console.error('[Novarix Backend] SMTP email dispatch warning:', smtpErr)
      }
    }

    // =========================================================================
    // 3. Webhook Dispatch (Slack / Discord)
    // =========================================================================
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
