/*
The process.versions property returns an object listing the version strings of Node.js and its dependencies.
*/

const process = require('process')
console.log(process.versions)
/*
{
  node: '18.13.0',
  v8: '10.2.154.23-node.21',
  uv: '1.44.2',
  zlib: '1.2.13',
  brotli: '1.0.9',
  ares: '1.18.1',
  modules: '108',
  nghttp2: '1.51.0',
  napi: '8',
  llhttp: '6.0.10',
  uvwasi: '0.0.13',
  openssl: '3.0.7+quic',
  cldr: '42.0',
  icu: '72.1',
  tz: '2022f',
  unicode: '15.0',
  ngtcp2: '0.8.1',
  nghttp3: '0.7.0'
}
*/
