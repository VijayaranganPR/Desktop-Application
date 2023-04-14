/*
using await will let the export to wait untill it resolves.
but during that time other export files will be imported they won't wait.

but the execution in main.js will start after import is done

await can be only using in export default 
*/

import * as e1 from './module/export1.js'
import * as e2 from './module/export2.js'
import * as e3 from './module/export3.js'

console.log(e1.first)
console.log(e1.second)
console.log(e2.third)
console.log(e2.fourth)
console.log(e3.fifth)
console.log(e3.sixth)

/* Log in order
inside export2
inside export3
********* will wait for 2 sec **********
inside export1
10
20
30
40
50
60
*/