/*
Returns an array of objects containing information about each logical CPU core.


*/
const os = require('os')
console.log(os.cpus())  


/*
[
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: {
      user: 1547125,
      nice: 0,
      sys: 1604531,
      idle: 24343843,
      irq: 216468
    }
  },
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: { user: 281328, nice: 0, sys: 184312, idle: 27029718, irq: 3250 }
  },
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: { user: 359859, nice: 0, sys: 175437, idle: 26960062, irq: 6562 }
  },
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: { user: 208250, nice: 0, sys: 116781, idle: 27170328, irq: 562 }
  },
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: { user: 136093, nice: 0, sys: 63328, idle: 27295937, irq: 1828 }
  },
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: { user: 105093, nice: 0, sys: 47671, idle: 27342593, irq: 406 }
  },
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: { user: 65500, nice: 0, sys: 30687, idle: 27399171, irq: 500 }
  },
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: { user: 75296, nice: 0, sys: 28906, idle: 27391156, irq: 250 }
  },
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: { user: 106703, nice: 0, sys: 42187, idle: 27346453, irq: 2500 }
  },
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: { user: 21015, nice: 0, sys: 29203, idle: 27445125, irq: 78 }
  },
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: { user: 70781, nice: 0, sys: 30093, idle: 27394468, irq: 1156 }
  },
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: { user: 25265, nice: 0, sys: 13734, idle: 27456343, irq: 62 }
  },
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: { user: 23640, nice: 0, sys: 12312, idle: 27459390, irq: 234 }
  },
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: { user: 12093, nice: 0, sys: 8796, idle: 27474453, irq: 78 }
  },
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: { user: 19609, nice: 0, sys: 9906, idle: 27465828, irq: 156 }
  },
  {
    model: 'AMD Ryzen 7 4800HS with Radeon Graphics         ',
    speed: 2895,
    times: { user: 70265, nice: 0, sys: 44140, idle: 27380953, irq: 4531 }
  }
]
*/
