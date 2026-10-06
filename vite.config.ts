import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin, loadEnv } from 'vite'
import consultHandler from './api/consult.ts'
import subscribeHandler from './api/subscribe.ts'
import healthHandler from './api/health.ts'

function apiDevMiddleware(): Plugin {
  return {
    name: 'api-dev-middleware',
    config(_, { mode }) {
      const env = loadEnv(mode, process.cwd(), '')
      Object.assign(process.env, env)
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0]
        if (!url?.startsWith('/api/')) {
          return next()
        }

        // Parse JSON body if present
        let body: any = {}
        if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
          const buffers: Buffer[] = []
          for await (const chunk of req) {
            buffers.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
          }
          const raw = Buffer.concat(buffers).toString()
          if (raw) {
            try {
              body = JSON.parse(raw)
            } catch {
              body = {}
            }
          }
        }

        const vercelReq: any = Object.assign(req, {
          body,
          query: Object.fromEntries(new URL(req.url || '', 'http://localhost').searchParams),
          cookies: {},
        })

        const vercelRes: any = Object.assign(res, {
          status(code: number) {
            res.statusCode = code
            return vercelRes
          },
          json(data: any) {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(data))
            return vercelRes
          },
          send(data: any) {
            res.end(data)
            return vercelRes
          },
        })

        try {
          if (url === '/api/consult') {
            await consultHandler(vercelReq, vercelRes)
            return
          }
          if (url === '/api/subscribe') {
            await subscribeHandler(vercelReq, vercelRes)
            return
          }
          if (url === '/api/health') {
            await healthHandler(vercelReq, vercelRes)
            return
          }
        } catch (err: any) {
          console.error('[Vite Dev API Server Error]', err)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: false, error: err.message }))
          return
        }

        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiDevMiddleware()],
})
