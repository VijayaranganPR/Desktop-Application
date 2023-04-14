/*
 list of the HTTP methods that are supported by the parser.
*/

const http = require('http')

console.log(http.METHODS)

/*
[
  'ACL',         'BIND',       'CHECKOUT',
  'CONNECT',     'COPY',       'DELETE',
  'GET',         'HEAD',       'LINK',
  'LOCK',        'M-SEARCH',   'MERGE',
  'MKACTIVITY',  'MKCALENDAR', 'MKCOL',
  'MOVE',        'NOTIFY',     'OPTIONS',
  'PATCH',       'POST',       'PROPFIND',
  'PROPPATCH',   'PURGE',      'PUT',
  'REBIND',      'REPORT',     'SEARCH',
  'SOURCE',      'SUBSCRIBE',  'TRACE',
  'UNBIND',      'UNLINK',     'UNLOCK',
  'UNSUBSCRIBE'
]
*/