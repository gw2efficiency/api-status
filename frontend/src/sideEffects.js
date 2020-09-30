const url = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3123/api'

export async function getLatestTest () {
  const response = await window.fetch(url)
  const result = await response.json()

  result.data = result.data.map(endpoint => {
    endpoint.severity = calculateSeverity(endpoint)
    return endpoint
  })

  result.data.sort((a, b) => b.duration - a.duration)
  result.data.sort((a, b) => b.severity - a.severity)

  result.updated_at = new Date(result.updated_at)

  return result
}

function calculateSeverity (endpoint) {
  if (endpoint.status >= 400) {
    return 3
  }

  if (endpoint.schemaValid === false) {
    return 2
  }

  if (endpoint.duration > 30000) {
    return 1
  }

  if (endpoint.duration > 10000) {
    return 0.5
  }

  return 0
}
