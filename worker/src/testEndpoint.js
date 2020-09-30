const generateUrl = require('./generateUrl')
const requestApi = require('./requestApi')
const matchSchema = require('./matchSchema')

async function testEndpoint (endpoint) {
  const url = generateUrl(endpoint.url)
  const {duration, response} = await requestApi(url)

  const error = response.status >= 400 && response.content && response.content.text

  let result = {
    url,
    name: endpoint.name,
    status: response.status,
    duration,
    error
  }

  if (result.status !== 200) {
    return result
  }

  return Object.assign(
    result,
    endpoint.matchSchema ? matchSchema(endpoint, response.content) : {}
  )
}

module.exports = testEndpoint
