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
  const response = await fetch(fullUrl)
  const end = new Date().getTime()

  const content = await response.text()
  const json = JSON.parse(content)

  return {
    duration: end - start,
    response: {
      status: response.status,
      content: json || content
    }
  }
}

module.exports = requestApi
