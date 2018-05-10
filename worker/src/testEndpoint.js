const generateUrl = require('./generateUrl')
const requestApi = require('./requestApi')
const matchSchema = require('./matchSchema')
const matchSnapshot = require('./matchSnapshot')

async function testEndpoint (endpoint) {
  const url = generateUrl(endpoint.url)
  const requests = await requestApi(url)

  return {
    url,
    name: endpoint.name,
    servers: Object.entries(requests)
      .reduce((a, [server, {response: {status, content}, duration }]) => ({
        ...a, [server]: {
          status, duration,
          ...(endpoint.matchSchema ? matchSchema(endpoint, content) : {}),
          ...(endpoint.matchSnapshot ? matchSnapshot(endpoint, content) : {})
        }
      }), [])
  }
}

module.exports = testEndpoint
