import consultHandler from './api/consult.ts'
import subscribeHandler from './api/subscribe.ts'
import healthHandler from './api/health.ts'

function createMockReqRes(method, body = {}, query = {}) {
  const req = {
    method,
    body,
    query,
    headers: { 'content-type': 'application/json' },
  }

  let statusCode = 200
  let headers = {}
  let responseData = null

  const res = {
    setHeader(key, val) {
      headers[key] = val
      return res
    },
    status(code) {
      statusCode = code
      return res
    },
    json(data) {
      responseData = data
      return res
    },
    send(data) {
      responseData = data
      return res
    },
    end(data) {
      if (data) responseData = data
      return res
    },
    _getReport() {
      return { statusCode, headers, responseData }
    },
  }

  return { req, res }
}

async function runTests() {
  console.log('====================================================')
  console.log('🚀 Running Novarix Full Backend API & Email Tests')
  console.log('====================================================\n')

  let passed = 0
  let failed = 0

  function assert(condition, testName, details = '') {
    if (condition) {
      console.log(`✅ PASS: ${testName}`)
      passed++
    } else {
      console.error(`❌ FAIL: ${testName} -> ${details}`)
      failed++
    }
  }

  // 1. Health API Test
  {
    const { req, res } = createMockReqRes('GET')
    await healthHandler(req, res)
    const report = res._getReport()
    assert(report.statusCode === 200, 'Health check returns 200')
    assert(report.responseData?.status === 'operational', 'Health check status is operational')
    assert(report.responseData?.guardrails?.zeroDataRetention === true, 'Health check verifies zero-retention guardrail')
  }

  // 2. Consultation Valid Booking Test
  {
    const { req, res } = createMockReqRes('POST', {
      fullName: 'Vikram Mehta',
      workEmail: 'vikram.mehta@enterprise-bank.com',
      companyName: 'Apex Financial Technologies',
      companySize: '51-200',
      selectedWorkflows: ['AI Agents & Operations', 'Enterprise RAG & Knowledge'],
      problemDescription: 'Automating loan document underwriting and AML compliance triage.',
    })
    await consultHandler(req, res)
    const report = res._getReport()
    assert(report.statusCode === 200, 'Consultation valid booking returns 200')
    assert(report.responseData?.success === true, 'Consultation response success is true')
    assert(report.responseData?.leadId?.startsWith('LEAD-'), 'Consultation generated valid LEAD-xxxx tracking ID')
    assert(report.responseData?.timestamp !== undefined, 'Consultation recorded ISO timestamp')
  }

  // 3. Consultation Invalid Email Validation Test
  {
    const { req, res } = createMockReqRes('POST', {
      fullName: 'John Doe',
      workEmail: 'invalid-email-string',
      companyName: 'Acme Corp',
    })
    await consultHandler(req, res)
    const report = res._getReport()
    assert(report.statusCode === 400, 'Consultation invalid email returns 400 Bad Request')
    assert(report.responseData?.success === false, 'Consultation invalid email success is false')
  }

  // 4. Consultation Missing Name Validation Test
  {
    const { req, res } = createMockReqRes('POST', {
      fullName: '',
      workEmail: 'valid@company.com',
      companyName: 'Acme Corp',
    })
    await consultHandler(req, res)
    const report = res._getReport()
    assert(report.statusCode === 400, 'Consultation missing full name returns 400 Bad Request')
  }

  // 5. Consultation GET Leads List & Method Check
  {
    const { req, res } = createMockReqRes('GET')
    await consultHandler(req, res)
    const report = res._getReport()
    assert(report.statusCode === 200, 'Consultation GET returns 200 with leads list')
    assert(Array.isArray(report.responseData?.leads), 'Consultation GET contains array of leads')

    const deleteReq = createMockReqRes('DELETE')
    await consultHandler(deleteReq.req, deleteReq.res)
    const deleteReport = deleteReq.res._getReport()
    assert(deleteReport.statusCode === 405, 'Consultation DELETE request rejected with 405 Method Not Allowed')
  }

  // 6. Subscribe Valid Email Test
  {
    const { req, res } = createMockReqRes('POST', { email: 'cto@innovate.io' })
    await subscribeHandler(req, res)
    const report = res._getReport()
    assert(report.statusCode === 200, 'Newsletter subscribe returns 200')
    assert(report.responseData?.subscriberId?.startsWith('SUB-'), 'Newsletter generated valid SUB-xxxx ID')
  }

  // 7. Subscribe Invalid Email Test
  {
    const { req, res } = createMockReqRes('POST', { email: 'notanemail' })
    await subscribeHandler(req, res)
    const report = res._getReport()
    assert(report.statusCode === 400, 'Newsletter invalid email returns 400 Bad Request')
  }

  console.log('\n====================================================')
  console.log(`📊 Test Summary: ${passed} Passed, ${failed} Failed`)
  console.log('====================================================')

  if (failed > 0) {
    process.exit(1)
  }
}

runTests().catch((e) => {
  console.error('Fatal test execution error:', e)
  process.exit(1)
})
