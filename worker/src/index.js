const fs = require('fs')
const path = require('path')
const runTests = require('./runTests')

async function runScheduledTests () {
  const results = await runTests()

  const content = {
    updated_at: new Date(),
    data: results
  }

  const file = path.join(__dirname, '/../latest.json')
  fs.writeFileSync(file, JSON.stringify(content), 'utf-8')
}

runScheduledTests()

if (!process.env.TRAIN && !process.env.TRAIN_MISSING) {
  setInterval(() => {
    runScheduledTests()
  }, 60 * 1000)
}
