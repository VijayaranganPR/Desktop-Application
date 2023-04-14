/*
The process.release object is a property of the process object that provides information about the current version of Node.js. 
It includes information such as the version number and release name. 
For example, on Node.js v14.15.0, process.release.name would return 'node' and process.release.lts would return 'Fermium'.
*/

console.log(process.release)
/*
{
  name: 'node',
  lts: 'Hydrogen',
  sourceUrl: 'https://nodejs.org/download/release/v18.13.0/node-v18.13.0.tar.gz',
  headersUrl: 'https://nodejs.org/download/release/v18.13.0/node-v18.13.0-headers.tar.gz',
  libUrl: 'https://nodejs.org/download/release/v18.13.0/win-x64/node.lib'
}
*/
