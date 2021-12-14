const qs = require('qs')

const API_KEY = 'BFCDF695-5D2D-114F-B6A1-FC2466C79A2692147B4D-20B1-4C45-BA25-43808695A041'

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
