/*
The Headers.values() method returns an iterator allowing to go through all values contained in this object. 
The values are String objects.
*/

const header = new Headers()

// appending values to the header
header.append('Accept', 'application/json')
header.append('Accept-Language', 'en-US')
header.append('Content-Type', 'application/json')


for (let i of header.values()){
    console.log(i.toString())
}

/* 
application/json
en-US
application/json
 */
