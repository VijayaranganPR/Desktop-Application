/*
The Headers.entries() method returns an iterator allowing to go through all key/value pairs contained in this object. 
The both the key and value of each pairs are String objects.
*/

const header = new Headers()

// appending values to the header
header.append('Accept', 'application/json')
header.append('Accept-Language', 'en-US')
header.append('Content-Type', 'application/json')


for (let i of header.entries()){
    console.log(i.toString())
}

/* 
accept,application/json
accept-language,en-US
content-type,application/json
 */


// its worth noting - the below also gives same result
for (let i of header){
    console.log(i.toString())
}

/* 
accept,application/json
accept-language,en-US
content-type,application/json
 */