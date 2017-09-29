const fs = require('fs-extra')
const testEndpoint = require('./testEndpoint')
const endpoints = require('./_endpoints')

async function run () {
  fs.mkdirsSync('./__schemas__/')
  fs.mkdirsSync('./__snapshots__/')

  console.log(`> Testing ${endpoints.length} API endpoints`)
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
}

run()
