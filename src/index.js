const fs = require('fs')
const runTests = require('./runTests')

async function runScheduledTests () {
  const results = await runTests()

  const content = {
    updated_at: new Date(),
    data: results
  }

  fs.writeFileSync('./results.json', JSON.stringify(content), 'utf-8')
}

setInterval(() => {
  runScheduledTests()
}, 60 * 1000)
