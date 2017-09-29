const requestApi = require('./requestApi')
const matchSchema = require('./matchSchema')
const matchSnapshot = require('./matchSnapshot')

async function testEndpoint (endpoint) {
  const {duration, response} = await requestApi(endpoint.url)

  let result = {
    name: endpoint.name,
    status: response.status,
    duration: duration
  }

  if (result.status !== 200) {
    return result
  }

  return Object.assign(
    result,
    endpoint.matchSchema ? matchSchema(endpoint, response.content) : {},
    endpoint.matchSnapshot ? matchSnapshot(endpoint, response.content) : {}
  )
}

module.exports = testEndpoint
