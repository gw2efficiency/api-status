const fs = require('fs')
const jsonDiff = require('json-diff')
const toFileName = require('./toFileName')

function matchSnapshot (url, content) {
  const filename = './__snapshots__/' + toFileName(url)

  if (process.env.TRAIN || (process.env.TRAIN_MISSING && !fs.existsSync(filename))) {
    fs.writeFileSync(filename, JSON.stringify(content, null, 2), 'utf-8')
    return {snapshotValid: true}
  }

  if (!fs.existsSync(filename)) {
    return {}
  }

  const snapshot = JSON.parse(fs.readFileSync(filename, 'utf-8'))
  const diff = jsonDiff.diffString(snapshot, content, {color: false})

  if (!diff) {
    return {snapshotValid: true}
  }

  return {
    snapshotValid: false,
    snapshotChanges: diff.trim()
  }
}

module.exports = matchSnapshot
