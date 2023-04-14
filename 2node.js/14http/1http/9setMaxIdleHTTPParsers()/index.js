/*
http.setMaxIdleHTTPParsers(max) is a method in the Node.js http module that sets the maximum number of idle HTTP parser objects that will be kept in the free pool.

max is the maximum number of idle parser objects that will be kept in the free pool. Setting max to a value greater than the default (5) will increase the memory usage of the http module.

This method is primarily used to tune the performance of the http module. You should only use it if you have specific requirements and have thoroughly tested the impact of the change on your application's performance.
*/
const http = require('http');

const maxIdleParsers = 10;

http.setMaxIdleHTTPParsers(maxIdleParsers);

console.log(`Maximum number of idle HTTP parsers set to ${maxIdleParsers}`);


/*
Maximum number of idle HTTP parsers set to 10
*/