const endpoints = [
  {name: '/v2/account', url: '/v2/account', matchSnapshot: true, matchSchema: true},
  {name: '/v2/account/finishers', url: '/v2/account/finishers', matchSnapshot: true, matchSchema: true},
  {name: '/v2/finishers', url: '/v2/finishers?ids=7,13', matchSnapshot: true, matchSchema: true},
  {name: '/v2/achievements/daily', url: '/v2/achievements/daily', matchSnapshot: false, matchSchema: true},
  {name: '/v2/colors', url: '/v2/colors', matchSnapshot: true, matchSchema: true}
]

module.exports = endpoints
