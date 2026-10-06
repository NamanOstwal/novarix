import fs from 'node:fs'
import path from 'node:path'

const LEADS_FILE = path.join(process.cwd(), 'data', 'leads.json')

function displayLeads() {
  console.log('\n================================================================================')
  console.log('📋 NOVARIX ENTERPRISE CONSULTATION & BOOKING LEDGER')
  console.log('================================================================================\n')

  if (!fs.existsSync(LEADS_FILE)) {
    console.log('ℹ️  No bookings recorded yet in data/leads.json.')
    console.log('   Open http://localhost:5173 and submit the "Book Consultation" modal to record one.\n')
    return
  }

  try {
    const raw = fs.readFileSync(LEADS_FILE, 'utf-8')
    const leads = JSON.parse(raw)

    if (!Array.isArray(leads) || leads.length === 0) {
      console.log('ℹ️  Booking ledger is currently empty.\n')
      return
    }

    console.log(`Total Bookings Recorded: ${leads.length}\n`)

    leads.forEach((lead, index) => {
      console.log(`[#${index + 1}] ID: ${lead.id}`)
      console.log(`     👤 Name:       ${lead.fullName}`)
      console.log(`     📧 Email:      ${lead.workEmail}`)
      console.log(`     🏢 Company:    ${lead.companyName} (${lead.companySize} employees)`)
      console.log(`     ⚡ Workflows:  ${(lead.selectedWorkflows || []).join(', ')}`)
      console.log(`     📝 Problem:    ${lead.problemDescription || 'N/A'}`)
      console.log(`     🕒 Date:       ${new Date(lead.createdAt).toLocaleString()}`)
      console.log('--------------------------------------------------------------------------------')
    })
  } catch (err: any) {
    console.error('Error reading booking ledger:', err.message)
  }
}

displayLeads()
