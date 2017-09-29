const testEndpoint = require('./testEndpoint')
const endpoints = require('./_endpoints')

async function runTests () {
  console.log('='.repeat(50))
  console.log(`> Testing ${endpoints.length} API endpoints (${new Date().toISOString()})`)
  console.log()

  const results = await Promise.all(endpoints.map(testEndpoint))

  let possiblyBroken = results.filter(x => x.schemaValid === false || x.snapshotValid === false)
  let definitelyBroken = results.filter(x => x.status !== 200)

  if (definitelyBroken.length > 0) {
    console.log(`❗ ERROR: ${definitelyBroken.length} API endpoint(s)`)
    console.log(definitelyBroken)
    console.log()
  }

  if (possiblyBroken.length > 0) {
    console.log(`⚠️ WARNING: ${possiblyBroken.length} API endpoint(s)`)
    console.log(possiblyBroken)
    console.log()
  }

  console.log(`✔️ OK: ${results.length - possiblyBroken.length - definitelyBroken.length} API endpoint(s)`)
  console.log(`✔️ OK: ${results.filter(x => x.snapshotValid).length} matching snapshots`)
  console.log(`✔️ OK: ${results.filter(x => x.schemaValid).length} matching schemas`)
  console.log('='.repeat(50))
  console.log()

  return results
}

module.exports = runTests