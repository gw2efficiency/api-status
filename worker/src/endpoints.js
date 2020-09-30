const endpoints = [
  {
    name: '/v2/account',
    url: '/v2/account',
    matchSchema: true
  },
  {
    name: '/v2/account/achievements',
    url: '/v2/account/achievements',
    matchSchema: true
  },
  {
    name: '/v2/account/bank',
    url: '/v2/account/bank',
    matchSchema: true
  },
  {
    name: '/v2/account/dungeons',
    url: '/v2/account/dungeons',
    matchSchema: true
  },
  {
    name: '/v2/account/dyes',
    url: '/v2/account/dyes',
    matchSchema: true
  },
  {
    name: '/v2/account/finishers',
    url: '/v2/account/finishers',
    matchSchema: true
  },
  {
    name: '/v2/account/gliders',
    url: '/v2/account/gliders',
    matchSchema: true
  },
  {
    name: '/v2/account/home/cats',
    url: '/v2/account/home/cats',
    matchSchema: true
  },
  {
    name: '/v2/account/home/nodes',
    url: '/v2/account/home/nodes',
    matchSchema: true
  },
  {
    name: '/v2/account/inventory',
    url: '/v2/account/inventory',
    matchSchema: true
  },
  {
    name: '/v2/account/mailcarriers',
    url: '/v2/account/mailcarriers',
    matchSchema: true
  },
  {
    name: '/v2/account/masteries',
    url: '/v2/account/masteries',
    matchSchema: true
  },
  {
    name: '/v2/account/mastery/points',
    url: '/v2/account/mastery/points',
    matchSchema: true
  },
  {
    name: '/v2/account/materials',
    url: '/v2/account/materials',
    matchSchema: true
  },
  {
    name: '/v2/account/minis',
    url: '/v2/account/minis',
    matchSchema: true
  },
  {
    name: '/v2/account/outfits',
    url: '/v2/account/outfits',
    matchSchema: true
  },
  {
    name: '/v2/account/pvp/heroes',
    url: '/v2/account/pvp/heroes',
    matchSchema: true
  },
  {
    name: '/v2/account/raids',
    url: '/v2/account/raids',
    matchSchema: true
  },
  {
    name: '/v2/account/recipes',
    url: '/v2/account/recipes',
    matchSchema: true
  },
  {
    name: '/v2/account/skins',
    url: '/v2/account/skins',
    matchSchema: true
  },
  {
    name: '/v2/account/titles',
    url: '/v2/account/titles',
    matchSchema: true
  },
  {
    name: '/v2/account/wallet',
    url: '/v2/account/wallet',
    matchSchema: true
  },
  {
    name: '/v2/achievements',
    url: '/v2/achievements?ids=3487,2933,1573',
    matchSchema: true
  },
  {
    name: '/v2/achievements/categories',
    url: '/v2/achievements/categories?ids=36,43,57',
    matchSchema: true
  },
  {
    name: '/v2/achievements/daily',
    url: '/v2/achievements/daily',
    matchSchema: true
  },
  {
    name: '/v2/achievements/daily/tomorrow',
    url: '/v2/achievements/daily/tomorrow',
    matchSchema: true
  },
  {
    name: '/v2/achievements/groups',
    url:
      '/v2/achievements/groups?ids=BE8B9954-5B55-4FCB-9022-B871AD00EAAB,65B4B678-607E-4D97-B458-076C3E96A810,B42E2379-9599-46CA-9D4A-40A27E192BBE',
    matchSchema: true
  },
  {
    name: '/v2/backstory/answers',
    url: '/v2/backstory/answers?ids=22-109,188-189,32-142',
    matchSchema: true
  },
  {
    name: '/v2/backstory/questions',
    url: '/v2/backstory/questions?ids=183,17,30',
    matchSchema: true
  },
  {
    name: '/v2/build',
    url: '/v2/build',
    matchSchema: true
  },
  {
    name: '/v2/cats',
    url: '/v2/cats?ids=19,16,4',
    matchSchema: true
  },
  {
    name: '/v2/characters',
    url: '/v2/characters?page=0&page_size=200',
    matchSchema: true
  },
  {
    name: '/v2/characters/ID/backstory',
    url: '/v2/characters/Eff Testing Ele/backstory',
    matchSchema: true
  },
  {
    name: '/v2/characters/ID/core',
    url: '/v2/characters/Eff Testing Ele/core',
    matchSchema: true
  },
  {
    name: '/v2/characters/ID/crafting',
    url: '/v2/characters/Eff Testing Ele/crafting',
    matchSchema: true
  },
  {
    name: '/v2/characters/ID/equipment',
    url: '/v2/characters/Eff Testing Ele/equipment',
    matchSchema: true
  },
  {
    name: '/v2/characters/ID/heropoints',
    url: '/v2/characters/Eff Testing Ele/heropoints',
    matchSchema: true
  },
  {
    name: '/v2/characters/ID/inventory',
    url: '/v2/characters/Eff Testing Ele/inventory',
    matchSchema: true
  },
  {
    name: '/v2/characters/ID/recipes',
    url: '/v2/characters/Eff Testing Ele/recipes',
    matchSchema: true
  },
  {
    name: '/v2/characters/ID/sab',
    url: '/v2/characters/Eff Testing Ele/sab',
    matchSchema: true
  },
  {
    name: '/v2/characters/ID/skills',
    url: '/v2/characters/Eff Testing Ele/skills',
    matchSchema: true
  },
  {
    name: '/v2/characters/ID/specializations',
    url: '/v2/characters/Eff Testing Ele/specializations',
    matchSchema: true
  },
  {
    name: '/v2/characters/ID/training',
    url: '/v2/characters/Eff Testing Ele/training',
    matchSchema: true
  },
  {
    name: '/v2/colors',
    url: '/v2/colors',
    matchSchema: true
  },
  {
    name: '/v2/commerce/delivery',
    url: '/v2/commerce/delivery',
    matchSchema: true
  },
  {
    name: '/v2/commerce/exchange/coins',
    url: '/v2/commerce/exchange/coins?quantity=12332',
    matchSchema: true
  },
  {
    name: '/v2/commerce/exchange/gems',
    url: '/v2/commerce/exchange/gems?quantity=12332',
    matchSchema: true
  },
  {
    name: '/v2/commerce/listings',
    url: '/v2/commerce/listings?ids=33867,25413,38289',
    matchSchema: true
  },
  {
    name: '/v2/commerce/prices',
    url: '/v2/commerce/prices?ids=9039,11991,77655',
    matchSchema: true
  },
  {
    name: '/v2/commerce/transactions/current/buys',
    url: '/v2/commerce/transactions/current/buys',
    matchSchema: true
  },
  {
    name: '/v2/commerce/transactions/current/sells',
    url: '/v2/commerce/transactions/current/sells',
    matchSchema: true
  },
  {
    name: '/v2/commerce/transactions/history/buys',
    url: '/v2/commerce/transactions/history/buys',
    matchSchema: true
  },
  {
    name: '/v2/commerce/transactions/history/sells',
    url: '/v2/commerce/transactions/history/sells',
    matchSchema: true
  },
  {
    name: '/v2/continents',
    url: '/v2/continents?ids=1,2',
    matchSchema: true
  },
  {
    name: '/v2/currencies',
    url: '/v2/currencies?ids=31,32,26',
    matchSchema: true
  },
  {
    name: '/v2/dungeons',
    url: '/v2/dungeons?ids=citadel_of_flame,twilight_arbor,crucible_of_eternity',
    matchSchema: true
  },
  {
    name: '/v2/emblem/foregrounds',
    url: '/v2/emblem/foregrounds?ids=187,107,235',
    matchSchema: true
  },
  {
    name: '/v2/emblem/backgrounds',
    url: '/v2/emblem/backgrounds?ids=27,15,7',
    matchSchema: true
  },
  {
    name: '/v2/files',
    url: '/v2/files?ids=ui_major_trait_mask,map_crafting_artificer,map_poi',
    matchSchema: true
  },
  {
    name: '/v2/finishers',
    url: '/v2/finishers?ids=55,41,69',
    matchSchema: true
  },
  {
    name: '/v2/gliders',
    url: '/v2/gliders?ids=17,37,22',
    matchSchema: true
  },
  {
    name: '/v2/guild/ID',
    url: '/v2/guild/14762DCE-C2A4-E711-80D5-441EA14F1E44',
    matchSchema: true
  },
  {
    name: '/v2/guild/ID/log',
    url: '/v2/guild/14762DCE-C2A4-E711-80D5-441EA14F1E44/log',
    matchSchema: true
  },
  {
    name: '/v2/guild/ID/members',
    url: '/v2/guild/14762DCE-C2A4-E711-80D5-441EA14F1E44/members',
    matchSchema: true
  },
  {
    name: '/v2/guild/ID/ranks',
    url: '/v2/guild/14762DCE-C2A4-E711-80D5-441EA14F1E44/ranks',
    matchSchema: true
  },
  {
    name: '/v2/guild/ID/stash',
    url: '/v2/guild/14762DCE-C2A4-E711-80D5-441EA14F1E44/stash',
    matchSchema: true
  },
  {
    name: '/v2/guild/ID/storage',
    url: '/v2/guild/14762DCE-C2A4-E711-80D5-441EA14F1E44/storage',
    matchSchema: true
  },
  {
    name: '/v2/guild/ID/teams',
    url: '/v2/guild/14762DCE-C2A4-E711-80D5-441EA14F1E44/teams',
    matchSchema: true
  },
  {
    name: '/v2/guild/ID/treasury',
    url: '/v2/guild/14762DCE-C2A4-E711-80D5-441EA14F1E44/treasury',
    matchSchema: true
  },
  {
    name: '/v2/guild/ID/upgrades',
    url: '/v2/guild/14762DCE-C2A4-E711-80D5-441EA14F1E44/upgrades',
    matchSchema: true
  },
  {
    name: '/v2/guild/permissions',
    url: '/v2/guild/permissions?ids=ClaimableActivate,EditRoles,SetGuildHall',
    matchSchema: true
  },
  {
    name: '/v2/guild/search',
    url: '/v2/guild/search?name=Lqibzzexgvkikpydotxsvijehyhexd',
    matchSchema: true
  },
  {
    name: '/v2/guild/upgrades',
    url: '/v2/guild/upgrades?ids=100,572,86',
    matchSchema: true
  },
  {
    name: '/v2/items',
    url: '/v2/items?ids=80118,70120,14639',
    matchSchema: true
  },
  {
    name: '/v2/itemstats',
    url: '/v2/itemstats?ids=1087,501,1078',
    matchSchema: true
  },
  {
    name: '/v2/legends',
    url: '/v2/legends?ids=Legend5,Legend2,Legend1',
    matchSchema: true
  },
  {
    name: '/v2/mailcarriers',
    url: '/v2/mailcarriers?ids=16,13,3',
    matchSchema: true
  },
  {
    name: '/v2/maps',
    url: '/v2/maps?ids=416,20,474',
    matchSchema: true
  },
  {
    name: '/v2/masteries',
    url: '/v2/masteries?ids=1,2,4',
    matchSchema: true
  },
  {
    name: '/v2/materials',
    url: '/v2/materials?ids=5,29,6',
    matchSchema: true
  },
  {
    name: '/v2/minis',
    url: '/v2/minis?ids=183,530,292',
    matchSchema: true
  },
  {
    name: '/v2/nodes',
    url: '/v2/nodes?ids=enchanted_treasure_chest,quartz_node,orichalcum_ore_node',
    matchSchema: true
  },
  {
    name: '/v2/outfits',
    url: '/v2/outfits?ids=24,31,42',
    matchSchema: true
  },
  {
    name: '/v2/pets',
    url: '/v2/pets?ids=36,42,20',
    matchSchema: true
  },
  {
    name: '/v2/professions',
    url: '/v2/professions?ids=Engineer,Warrior,Thief',
    matchSchema: true
  },
  {
    name: '/v2/pvp/amulets',
    url: '/v2/pvp/amulets?ids=30,13,5',
    matchSchema: true
  },
  {
    name: '/v2/pvp/games',
    url: '/v2/pvp/games?ids=A3DC3860-73BB-4B6B-A99B-F5F47A76E470,C27A2C25-4BA8-48A4-8597-791A4071B165',
    matchSchema: true
  },
  {
    name: '/v2/pvp/heroes',
    url:
      '/v2/pvp/heroes?ids=BEA79596-CA8B-4D46-9B9C-EA1B606BCF42,B7EA9889-5F16-4636-9705-4FCAF8B39ECD,CF977AE5-C605-4586-A802-3E25F0F35772',
    matchSchema: true
  },
  {
    name: '/v2/pvp/ranks',
    url: '/v2/pvp/ranks?ids=4,7,1',
    matchSchema: true
  },
  {
    name: '/v2/pvp/seasons',
    url:
      '/v2/pvp/seasons?ids=D1777261-555B-4B72-A27E-BDC96EC393D5,A54849B7-7DBD-4958-91EF-72E18CD659BA,2B2E80D3-0A74-424F-B0EA-E221500B323C',
    matchSchema: true
  },
  {
    name: '/v2/pvp/seasons/ID/leaderboards/legendary/eu',
    url: '/v2/pvp/seasons/D1777261-555B-4B72-A27E-BDC96EC393D5/leaderboards/legendary/eu',
    matchSchema: true
  },
  {
    name: '/v2/pvp/seasons/ID/leaderboards/legendary/na',
    url: '/v2/pvp/seasons/D1777261-555B-4B72-A27E-BDC96EC393D5/leaderboards/legendary/na',
    matchSchema: true
  },
  {
    name: '/v2/pvp/seasons/ID/leaderboards/guild/eu',
    url: '/v2/pvp/seasons/D1777261-555B-4B72-A27E-BDC96EC393D5/leaderboards/guild/eu',
    matchSchema: true
  },
  {
    name: '/v2/pvp/seasons/ID/leaderboards/guild/na',
    url: '/v2/pvp/seasons/D1777261-555B-4B72-A27E-BDC96EC393D5/leaderboards/guild/na',
    matchSchema: true
  },
  {
    name: '/v2/pvp/standings',
    url: '/v2/pvp/standings',
    matchSchema: true
  },
  {
    name: '/v2/pvp/stats',
    url: '/v2/pvp/stats',
    matchSchema: true
  },
  {
    name: '/v2/quaggans',
    url: '/v2/quaggans?ids=coffee,aloha,bear',
    matchSchema: true
  },
  {
    name: '/v2/races',
    url: '/v2/races?ids=Asura,Human,Sylvari',
    matchSchema: true
  },
  {
    name: '/v2/raids',
    url: '/v2/raids?ids=bastion_of_the_penitent,forsaken_thicket',
    matchSchema: true
  },
  {
    name: '/v2/recipes',
    url: '/v2/recipes?ids=4023,11231,10947',
    matchSchema: true
  },
  {
    name: '/v2/recipes/search/OUTPUT',
    url: '/v2/recipes/search?output=12312',
    matchSchema: true
  },
  {
    name: '/v2/recipes/search/INPUT',
    url: '/v2/recipes/search?input=12543',
    matchSchema: true
  },
  {
    name: '/v2/skills',
    url: '/v2/skills?ids=39895,37929,10219',
    matchSchema: true
  },
  {
    name: '/v2/skins',
    url: '/v2/skins?ids=5259,5508,1273',
    matchSchema: true
  },
  {
    name: '/v2/specializations',
    url: '/v2/specializations?ids=39,55,36',
    matchSchema: true
  },
  {
    name: '/v2/stories',
    url: '/v2/stories?ids=82,31,27',
    matchSchema: true
  },
  {
    name: '/v2/stories/seasons',
    url:
      '/v2/stories/seasons?ids=EAB597C0-C484-4FD3-9430-31433BAC81B6,215AAA0F-CDAC-4F93-86DA-C155A99B5784,09766A86-D88D-4DF2-9385-259E9A8CA583',
    matchSchema: true
  },
  {
    name: '/v2/titles',
    url: '/v2/titles?ids=176,206,70',
    matchSchema: true
  },
  {
    name: '/v2/tokeninfo',
    url: '/v2/tokeninfo',
    matchSchema: true
  },
  {
    name: '/v2/traits',
    url: '/v2/traits?ids=1832,1859,674',
    matchSchema: true
  },
  {
    name: '/v2/worlds',
    url: '/v2/worlds?ids=1021,1023,2012',
    matchSchema: true
  },
  {
    name: '/v2/wvw/abilities',
    url: '/v2/wvw/abilities?ids=9,10,19',
    matchSchema: true
  },
  {
    name: '/v2/wvw/matches',
    url: '/v2/wvw/matches?ids=2-3,2-2,2-1',
    matchSchema: true
  },
  {
    name: '/v2/wvw/matches/overview',
    url: '/v2/wvw/matches/overview?ids=2-4,2-1,2-2',
    matchSchema: true
  },
  {
    name: '/v2/wvw/matches/scores',
    url: '/v2/wvw/matches/scores?ids=2-2,2-3,2-5',
    matchSchema: true
  },
  {
    name: '/v2/wvw/matches/stats',
    url: '/v2/wvw/matches/stats?ids=2-5,2-1,2-3',
    matchSchema: true
  },
  {
    name: '/v2/wvw/matches/stats/ID/teams/blue/top/kdr',
    url: '/v2/wvw/matches/stats/2-2/teams/blue/top/kdr',
    matchSchema: true
  },
  {
    name: '/v2/wvw/matches/stats/ID/teams/blue/top/kills',
    url: '/v2/wvw/matches/stats/2-2/teams/blue/top/kills',
    matchSchema: true
  },
  {
    name: '/v2/wvw/objectives',
    url: '/v2/wvw/objectives?ids=1102-104,968-77,968-97',
    matchSchema: true
  },
  {
    name: '/v2/wvw/ranks',
    url: '/v2/wvw/ranks?ids=51,77,97',
    matchSchema: true
  },
  {
    name: '/v2/wvw/upgrades',
    url: '/v2/wvw/upgrades?ids=27,7,19',
    matchSchema: true
  }
]

module.exports = endpoints
