const testEndpoint = require('./testEndpoint')
const endpoints = require('./endpoints')

async function runTests () {
  console.log('='.repeat(50))
  console.log(`> Testing ${endpoints.length} API endpoints (${new Date().toISOString()})`)

  let results = []

  for (let i = 0; i !== endpoints.length; i++) {
    results.push(await testEndpoint(endpoints[i]))
  }

  let possiblyBroken = results.filter(x => x.schemaValid === false)
  let definitelyBroken = results.filter(x => x.status >= 400)

  if (definitelyBroken.length > 0) {
    console.log(`❗ ERROR: ${definitelyBroken.length} API endpoint(s)`)
  }

  if (possiblyBroken.length > 0) {
    console.log(`⚠️ WARNING: ${possiblyBroken.length} API endpoint(s)`)
  }

  console.log(`✔️ OK: ${results.length - possiblyBroken.length - definitelyBroken.length} API endpoint(s)`)
  console.log('='.repeat(50))
  console.log()

  return results
}

module.exports = runTests
