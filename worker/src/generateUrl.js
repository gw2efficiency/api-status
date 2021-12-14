const qs = require('qs')

const API_KEY = '564F181A-F0FC-114A-A55D-3C1DCD45F3767AF3848F-AB29-4EBF-9594-F91E6A75E015'

function generateUrl (url) {
  const splitUrl = url.split('?')
  url = splitUrl[0]

  const query = Object.assign(qs.parse(splitUrl[1] || ''), {
    v: 'latest',
    access_token: API_KEY,
    lang: 'en'
  })

  return `https://api.guildwars2.com${url}?${qs.stringify(query)}`
}

module.exports = generateUrl
