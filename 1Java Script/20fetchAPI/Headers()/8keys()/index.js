/*
The Headers.keys() method returns an iterator allowing to go through all keys contained in this object. 
The keys are String objects.

*/

const header = new Headers()

// appending values to the header
header.append('Accept', 'application/json')
header.append('Accept-Language', 'en-US')
header.append('Content-Type', 'application/json')


for (let i of header.keys()){
    console.log(i)
}

/* 
accept
accept-language
content-type
 */
