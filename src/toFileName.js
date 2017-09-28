function toFileName (url) {
  return url.replace(/^\//, '').replace(/[/ ]/g, '_') + '.json'
}

module.exports = toFileName
