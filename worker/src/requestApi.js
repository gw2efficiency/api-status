const fetch = require('node-fetch')
const { Agent } = require('https');

const server = {
  us: createApiAgent('34.226.105.80'),
  eu: createApiAgent('52.58.154.210')
};

function createApiAgent (ip) {
  // create new https agent
  const agent = new Agent()

  // save original createConnection function
  const createConnection = agent.createConnection

  // override createConnection
  agent.createConnection = function(opts, callback) {
    // set custom dns lookup resolving to either us or eu datacenter
    opts.lookup = (_1, _2, cb) => cb(null, ip, 4)

    // call original create connection call
    return createConnection.call(agent, opts, callback)
  }

  return agent
}

async function requestApi (url) {
  return Promise.all([server.us, server.eu].map(
    (agent) => requestApiInternal(url, agent)
  )).then(
    ([us, eu]) => ({us, eu})
  )
}

async function requestApiInternal (url, agent) {
  const start = new Date().getTime()
  let response = null

  try {
    response = await fetch(url, { agent })
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
