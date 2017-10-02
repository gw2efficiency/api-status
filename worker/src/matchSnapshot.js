const fs = require('fs')
const path = require('path')
const jsonDiff = require('json-diff')
const toFileName = require('./toFileName')

function matchSnapshot (endpoint, content) {
  const filename = path.join(__dirname, '/../__snapshots__/' + toFileName(endpoint.name))

  if (endpoint.snapshotTransformation) {
    content = endpoint.snapshotTransformation(content)
  }

  if (process.env.TRAIN || (process.env.TRAIN_MISSING && !fs.existsSync(filename))) {
    fs.writeFileSync(filename, JSON.stringify(content, null, 2), 'utf-8')
    return {snapshotValid: true}
  }

  if (!fs.existsSync(filename)) {
    console.log(`/WARN\\ Missing snapshot for ${endpoint.name}`)
    return {}
  }

  const snapshot = JSON.parse(fs.readFileSync(filename, 'utf-8'))
  const matching = JSON.stringify(snapshot) === JSON.stringify(content)

  if (matching) {
    return {snapshotValid: true}
  }

  const diff = jsonDiff.diffString(snapshot, content, {color: false})

  // Sometimes the JSON comparison fails because some things got reordered
  // But we cant just use diff because of https://github.com/andreyvit/json-diff/pull/29
  if (!diff) {
    return {snapshotValid: true}
  }

  if (process.env.DEBUG_SNAPSHOTS) {
    console.log('='.repeat(10) + ' ENDPOINT ' + '='.repeat(10))
    console.log(endpoint.url)
    console.log('='.repeat(10) + ' SNAPSHOT ' + '='.repeat(10))
    console.log(JSON.stringify(snapshot))
    console.log('='.repeat(10) + ' CONTENT ' + '='.repeat(10))
    console.log(JSON.stringify(content))
    console.log('='.repeat(10) + ' DIFF ' + '='.repeat(10))
    console.log(diff.trim())
    console.log()
  }

  return {
    snapshotValid: false,
    snapshotChanges: diff.trim()
  }
}

module.exports = matchSnapshot
