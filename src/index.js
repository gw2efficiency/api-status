const fs = require('fs-extra')
const testEndpoint = require('./testEndpoint')
const endpoints = require('./_endpoints')

async function run () {
  fs.mkdirsSync('./__schemas__/')
  fs.mkdirsSync('./__snapshots__/')
  const results = await Promise.all(endpoints.map(testEndpoint))
  console.log(JSON.stringify(results, null, 2))
}

run()
