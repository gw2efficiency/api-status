const fetch = require('node-fetch')

async function requestApi (url) {
  const start = new Date().getTime()
  let response = null

  try {
    response = await fetch(url)
  } catch (err) {}

  const end = new Date().getTime()

  if (!response) {
    return {
      duration: end - start,
      response: {
        status: 599,
        content: ''
      }
    }
  }

  const content = await response.text()
  let json = null

  try {
    json = JSON.parse(content)
  } catch (err) {
  }

  return {
    duration: end - start,
    response: {
      status: response.status,
      content: json || content
    }
  }
}

module.exports = requestApi
