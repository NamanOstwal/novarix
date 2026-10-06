import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed. Please use POST.' })
  }

  try {
    const { email } = req.body || {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' })
    }

    const subscriber = {
      id: `SUB-${Date.now()}`,
      email: email.trim().toLowerCase(),
      subscribedAt: new Date().toISOString(),
    }

    console.log('[Novarix Backend] New Research Subscriber:', subscriber)

    // Optional email notification for newsletter
    const fromEmail = process.env.RESEND_FROM_EMAIL || process.env.SMTP_USER || 'Novarix Research <onboarding@resend.dev>'
    const welcomeHtml = `
      <div style="font-family: -apple-system, sans-serif; background-color: #0C0B0C; color: #fff; padding: 28px; border-radius: 12px; max-width: 540px; margin: 0 auto; border: 1px solid rgba(0,240,255,0.3);">
        <h2 style="color: #00F0FF; margin-top: 0;">Welcome to Novarix Research Briefings</h2>
        <p style="color: rgba(255,255,255,0.8); line-height: 1.6;">You are now subscribed to receive monthly deep-dives on sovereign AI models, enterprise RAG benchmarks, and agentic orchestration architectures.</p>
        <p style="font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 24px;">Subscriber ID: ${subscriber.id} · Novarix Sovereign AI Gateway</p>
      </div>
    `

    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [subscriber.email],
            subject: 'Subscribed to Novarix Research & Platform Engineering',
            html: welcomeHtml,
          }),
        })
      } catch (e) {
        console.warn('[Novarix Backend] Resend newsletter dispatch note:', e)
      }
    } else if (process.env.SMTP_USER && process.env.SMTP_PASS) {
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
        await transporter.sendMail({
          from: `"Novarix Research" <${process.env.SMTP_USER}>`,
          to: subscriber.email,
          subject: 'Subscribed to Novarix Research & Platform Engineering',
          html: welcomeHtml,
        })
      } catch (e) {
        console.warn('[Novarix Backend] SMTP newsletter dispatch note:', e)
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Subscribed to Novarix Research & Platform Engineering updates.',
      subscriberId: subscriber.id,
    })
  } catch (err) {
    console.error('[Novarix Backend] Subscribe error:', err)
    return res.status(500).json({ success: false, error: 'Failed to process subscription.' })
  }
}
