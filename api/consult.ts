import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'
import fs from 'node:fs'
import path from 'node:path'

const LEADS_FILE = path.join(process.cwd(), 'data', 'leads.json')

function getStoredLeads() {
  try {
    if (fs.existsSync(LEADS_FILE)) {
      return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'))
    }
  } catch (e) {
    console.warn('[Leads Storage] Read note:', e)
  }
  return []
}

function saveLead(lead: any) {
  try {
    const dir = path.dirname(LEADS_FILE)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    const current = getStoredLeads()
    current.unshift(lead)
    fs.writeFileSync(LEADS_FILE, JSON.stringify(current, null, 2), 'utf-8')
  } catch (e) {
    console.warn('[Leads Storage] Write note (normal in read-only serverless):', e)
  }
}

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

  // Handle GET: View all captured bookings & leads
  if (req.method === 'GET') {
    const leads = getStoredLeads()
    return res.status(200).json({
      success: true,
      service: 'Novarix Enterprise Booking Intake Service',
      totalLeads: leads.length,
      storageFile: 'data/leads.json',
      leads,
    })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Please use GET or POST.'
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

    // Input Validation
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

    if (!companyName || typeof companyName !== 'string' || companyName.trim().length < 1) {
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
      selectedWorkflows: Array.isArray(selectedWorkflows) ? selectedWorkflows : [selectedWorkflows],
      problemDescription: problemDescription ? String(problemDescription).trim() : '',
      createdAt: timestamp,
      status: 'AUDIT_SCHEDULED'
    }

    // Save to persistent local storage (data/leads.json)
    saveLead(leadRecord)

    console.log('[Novarix Backend] New Enterprise Booking Request:', JSON.stringify(leadRecord, null, 2))

    // =========================================================================
    // 1. Admin Email Notification Template (Sent to Team / Founders)
    // =========================================================================
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0C0B0C; color: #FFFFFF; padding: 24px; margin: 0; }
          .container { max-width: 600px; margin: 0 auto; background-color: #151419; border: 1px solid rgba(0, 240, 255, 0.35); border-radius: 16px; padding: 32px; box-shadow: 0 10px 40px rgba(0,0,0,0.85); }
          .badge { display: inline-block; background-color: rgba(0, 240, 255, 0.15); color: #00F0FF; border: 1px solid rgba(0, 240, 255, 0.4); padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; }
          h1 { color: #FFFFFF; font-size: 22px; margin-top: 0; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; }
          .item { margin-bottom: 16px; }
          .label { font-size: 11px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
          .value { font-size: 16px; color: #FFFFFF; font-weight: 500; }
          .workflow-tag { display: inline-block; background: rgba(151, 128, 255, 0.18); color: #B39DFF; border: 1px solid rgba(151, 128, 255, 0.35); padding: 4px 10px; border-radius: 6px; font-size: 13px; margin: 2px 4px 4px 0; }
          .problem-box { background-color: rgba(255,255,255,0.04); border-left: 3px solid #00F0FF; padding: 14px 16px; border-radius: 0 8px 8px 0; font-size: 14px; color: rgba(255,255,255,0.88); line-height: 1.55; }
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
            <div class="value"><a href="mailto:${leadRecord.workEmail}" style="color: #00F0FF; text-decoration: none;">${leadRecord.workEmail}</a></div>
          </div>

          <div class="item">
            <div class="label">Company & Team Size</div>
            <div class="value">${leadRecord.companyName} (${leadRecord.companySize} employees)</div>
          </div>

          <div class="item">
            <div class="label">Target Workflows Selected</div>
            <div style="margin-top: 6px;">
              ${leadRecord.selectedWorkflows.map((w: string) => `<span class="workflow-tag">${w}</span>`).join('')}
            </div>
          </div>

          <div class="item">
            <div class="label">Operational Problem & Goals</div>
            <div class="problem-box">${leadRecord.problemDescription || 'No additional notes provided.'}</div>
          </div>

          <a href="mailto:${leadRecord.workEmail}?subject=Re:%20Novarix%20AI%20Technical%20Consultation%20%7C%20${encodeURIComponent(leadRecord.companyName)}" class="btn">
            Reply to ${leadRecord.fullName} →
          </a>

          <div class="footer">
            Lead Tracking ID: <code>${leadRecord.id}</code><br>
            Captured at: ${leadRecord.createdAt}<br>
            Novarix Sovereign AI Gateway · Production Intake Pipeline
          </div>
        </div>
      </body>
      </html>
    `

    // =========================================================================
    // 2. Client Confirmation Email Template (Sent to Customer/Lead)
    // =========================================================================
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #070608; color: #FFFFFF; padding: 24px; margin: 0; }
          .container { max-width: 600px; margin: 0 auto; background-color: #121118; border: 1px solid rgba(0, 240, 255, 0.25); border-radius: 16px; padding: 36px; box-shadow: 0 12px 40px rgba(0,0,0,0.9); }
          .logo { font-size: 20px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.02em; margin-bottom: 24px; }
          .logo span { color: #00F0FF; }
          h1 { font-size: 22px; font-weight: 600; color: #FFFFFF; margin-top: 0; margin-bottom: 14px; }
          p { font-size: 14.5px; color: rgba(255,255,255,0.78); line-height: 1.6; margin-bottom: 18px; }
          .card { background-color: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 18px; margin: 24px 0; }
          .item-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 13.5px; }
          .item-row:last-child { border-bottom: none; }
          .item-label { color: rgba(255,255,255,0.5); }
          .item-val { color: #FFFFFF; font-weight: 500; }
          .next-steps { background: rgba(0, 240, 255, 0.05); border-left: 3px solid #00F0FF; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 24px 0; }
          .next-steps h4 { margin: 0 0 6px; color: #00F0FF; font-size: 14px; }
          .next-steps p { margin: 0; font-size: 13.5px; color: rgba(255,255,255,0.75); }
          .footer { font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 32px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 16px; line-height: 1.5; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="logo">Novarix<span>AI</span></div>
          <h1>We’ve received your consultation request, ${leadRecord.fullName}.</h1>
          <p>
            Thank you for reaching out to Novarix. Our engineering team is reviewing your workflow brief for <strong>${leadRecord.companyName}</strong>.
          </p>

          <div class="card">
            <div style="font-size: 11px; text-transform: uppercase; color: #00F0FF; font-weight: 700; letter-spacing: 0.08em; margin-bottom: 10px;">Booking Overview</div>
            <div class="item-row">
              <span class="item-label">Tracking ID</span>
              <span class="item-val"><code>${leadRecord.id}</code></span>
            </div>
            <div class="item-row">
              <span class="item-label">Company</span>
              <span class="item-val">${leadRecord.companyName} (${leadRecord.companySize} employees)</span>
            </div>
            <div class="item-row">
              <span class="item-label">Target Workflows</span>
              <span class="item-val">${leadRecord.selectedWorkflows.join(', ')}</span>
            </div>
          </div>

          <div class="next-steps">
            <h4>What happens next?</h4>
            <p>
              A dedicated AI Solutions Architect will review your requirements and reach back out within <strong>4 business hours</strong> with available calendar slots for an in-depth architecture mapping call.
            </p>
          </div>

          <p style="font-size: 13.5px; color: rgba(255,255,255,0.6);">
            If you have urgent technical questions or wish to share sample architecture diagrams under NDA in advance, simply reply directly to this email or contact us at <a href="mailto:enterprise@novarix.ai" style="color: #00F0FF;">enterprise@novarix.ai</a>.
          </p>

          <div class="footer">
            Novarix Sovereign AI Platform · Enterprise Automation Infrastructure<br>
            Confidential · Zero-Data Retention Policy Aligned
          </div>
        </div>
      </body>
      </html>
    `

    const recipientEmail = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER
    const fromEmail = process.env.RESEND_FROM_EMAIL || process.env.SMTP_USER || 'Novarix AI <onboarding@resend.dev>'

    // =========================================================================
    // 3. Email Dispatch Method A: Resend API (Recommended)
    // =========================================================================
    let emailDispatched = false

    if (process.env.RESEND_API_KEY) {
      try {
        // 3.1 Send Admin Notification
        if (recipientEmail) {
          const resendAdmin = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
              from: fromEmail,
              to: [recipientEmail],
              reply_to: leadRecord.workEmail,
              subject: `[Novarix Demo Request] ${leadRecord.companyName} - ${leadRecord.fullName}`,
              html: adminEmailHtml,
            }),
          })

          if (resendAdmin.ok) {
            emailDispatched = true
            console.log('[Novarix Backend] Admin notification dispatched via Resend to:', recipientEmail)
          } else {
            const errText = await resendAdmin.text()
            console.warn('[Novarix Backend] Resend Admin dispatch returned:', errText)
          }
        }

        // 3.2 Send Client Confirmation
        const resendClient = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [leadRecord.workEmail],
            subject: `Consultation Confirmed: Novarix AI Architecture Strategy Session (${leadRecord.id})`,
            html: clientEmailHtml,
          }),
        })

        if (resendClient.ok) {
          console.log('[Novarix Backend] Client confirmation dispatched via Resend to:', leadRecord.workEmail)
        } else {
          const errText = await resendClient.text()
          console.warn('[Novarix Backend] Resend Client dispatch returned:', errText)
        }
      } catch (resendErr) {
        console.error('[Novarix Backend] Resend dispatch error:', resendErr)
      }
    }

    // =========================================================================
    // 4. Email Dispatch Method B: SMTP / Gmail (Nodemailer)
    // =========================================================================
    else if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const port = parseInt(process.env.SMTP_PORT || '465', 10)
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: port,
          secure: port === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        })

        // 4.1 Admin notification
        if (recipientEmail) {
          await transporter.sendMail({
            from: `"Novarix Platform" <${process.env.SMTP_USER}>`,
            to: recipientEmail,
            replyTo: leadRecord.workEmail,
            subject: `[Novarix Demo Request] ${leadRecord.companyName} - ${leadRecord.fullName}`,
            html: adminEmailHtml,
          })
          emailDispatched = true
          console.log('[Novarix Backend] Admin email dispatched via SMTP to:', recipientEmail)
        }

        // 4.2 Client confirmation
        await transporter.sendMail({
          from: `"Novarix AI Solutions" <${process.env.SMTP_USER}>`,
          to: leadRecord.workEmail,
          subject: `Consultation Confirmed: Novarix AI Architecture Strategy Session (${leadRecord.id})`,
          html: clientEmailHtml,
        })
        console.log('[Novarix Backend] Client confirmation email dispatched via SMTP to:', leadRecord.workEmail)
      } catch (smtpErr) {
        console.error('[Novarix Backend] SMTP email dispatch warning:', smtpErr)
      }
    } else {
      console.log('[Novarix Backend Development Mode] No email credentials configured in .env (RESEND_API_KEY or SMTP_USER/PASS).')
      console.log(`[Novarix Backend Development Mode] Mock booking logged: ID ${leadRecord.id} for ${leadRecord.workEmail}`)
    }

    // =========================================================================
    // 5. Webhook Dispatch (Slack / Discord Alert)
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
        console.log('[Novarix Backend] Webhook alert sent successfully.')
      } catch (webhookErr) {
        console.error('[Novarix Backend] Webhook dispatch warning:', webhookErr)
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Consultation request successfully recorded. An AI Solutions Architect will contact you within 4 business hours.',
      leadId: leadRecord.id,
      timestamp: leadRecord.createdAt,
      emailNotified: emailDispatched,
    })
  } catch (error: any) {
    console.error('[Novarix Backend] Consultation error:', error)
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your consultation request. Please try again or email us directly at enterprise@novarix.ai.',
    })
  }
}
