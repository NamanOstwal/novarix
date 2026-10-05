import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  return res.status(200).json({
    status: 'operational',
    service: 'Novarix Enterprise Sovereign AI API Gateway',
    version: '2.4.0',
    timestamp: new Date().toISOString(),
    regions: ['in-bom-1', 'us-east-1', 'eu-west-1'],
    guardrails: {
      zeroDataRetention: true,
      rbacEnforced: true,
      piiMaskingActive: true,
    },
  })
}
