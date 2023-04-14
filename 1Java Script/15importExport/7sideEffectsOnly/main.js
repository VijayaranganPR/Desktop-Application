/*
import side Effects are used only for it's side effect (runs the files once)
it won't import any features
*/

import './module/export1.js';       // print's after two sec -- inside export1
import './module/export2.js';       // inside export1
import './module/export3.js';       // inside export1
// console.log(first)               // Error: Reference error