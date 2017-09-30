const fetch = require('node-fetch')
const qs = require('qs')

const API_KEY = '564F181A-F0FC-114A-A55D-3C1DCD45F3767AF3848F-AB29-4EBF-9594-F91E6A75E015'

async function requestApi (url) {
  const splitUrl = url.split('?')
  url = splitUrl[0]

  const query = Object.assign(qs.parse(splitUrl[1] || ''), {
    access_token: API_KEY,
    lang: 'en'
  })

  const fullUrl = `https://api.guildwars2.com${url}?${qs.stringify(query)}`

  const start = new Date().getTime()
  let response = null

  try {
    response = await fetch(fullUrl)
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
