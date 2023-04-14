/*
In Node.js, the process.abort() method is used to terminate the Node.js process immediately, without any additional cleanup or processing. 
This method is similar to the process.exit() method, but it also causes the Node.js runtime to generate a core dump, which can be used for debugging purposes.
*/

console.log(process.abort());

console.log('hi')       // won't execute
/*
1: 00007FF739319E7F node_api_throw_syntax_error+175967
 2: 00007FF7392A0C06 SSL_get_quiet_shutdown+65750
 3: 00007FF73922D479 std::basic_ios<char,std::char_traits<char> >::setstate+13321
 4: 00007FF739CF2D9D v8::internal::Builtins::code+248237
 5: 00007FF739CF29A9 v8::internal::Builtins::code+247225
 6: 00007FF739CF2C6C v8::internal::Builtins::code+247932
 7: 00007FF739CF2AD0 v8::internal::Builtins::code+247520
 8: 00007FF739DD79B1 v8::internal::SetupIsolateDelegate::SetupHeap+558449
 9: 00007FF739D5B2C4 v8::internal::SetupIsolateDelegate::SetupHeap+48772
10: 00007FF739D5B2C4 v8::internal::SetupIsolateDelegate::SetupHeap+48772
11: 00007FF739D5B2C4 v8::internal::SetupIsolateDelegion+149224
26: 00007FF7392DBE91 node::InitializeOncePerProcess+2897
27: 00007FF7392DD625 node::Start+82128: 00007FF7390E771C CRYPTO_memcmp+440236
29: 00007FF73A30DC28 inflateValidate+1888830: 00007FFDD9C826BD BaseThreadInitThunk+29
31: 00007FFDDBC8DFB8 RtlUserThreadStart+40
*/
