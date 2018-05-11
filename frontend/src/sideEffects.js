const url = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3123/api'

export async function getLatestTest () {
  const response = await window.fetch(url)
  const result = await response.json()

  result.data = result.data.map(endpoint => {
    endpoint.severity = calculateSeverity(endpoint)
    return endpoint
  })

  result.data.sort((a, b) => b.servers.eu.duration - a.servers.eu.duration)
  result.data.sort((a, b) => b.severity - a.severity)

  result.updated_at = new Date(result.updated_at)

  return result
}

function calculateSeverity (endpoint) {
  const severity = Object.values(endpoint.servers).map(
    (server) => {
      if (server.status >= 400) {
        return 3
      }
    
      if (server.schemaValid === false || server.snapshotValid === false) {
        return 2
      }
    
      return 0   
    }
  ).reduce(
    (total, severity) => total + severity, 0
  )

  if (endpoint.servers.eu.duration > 3000) {
    return severity + 1
  }

  if (endpoint.servers.eu.duration > 1500) {
    return severity + 0.5
  }

  return severity
}
