/*
The process.config property returns a frozen Object containing the JavaScript representation of the configure options used to compile the current Node.js executable. 
This is the same as the config.gypi file that was produced when running the ./configure script.
*/

const process = require('process')
console.log(process.config);

/*
{
  target_defaults: {
    cflags: [],
    default_configuration: 'Release',
    defines: [ 'NODE_OPENSSL_CONF_NAME=nodejs_conf', 'NODE_OPENSSL_HAS_QUIC' ],
    include_dirs: [],
    libraries: []
  },
  variables: {
    asan: 0,
    coverage: false,
    dcheck_always_on: 0,
    debug_nghttp2: false,
    debug_node: false,
    enable_lto: false,
    enable_pgo_generate: false,
    enable_pgo_use: false,
    error_on_warn: false,
    force_dynamic_crt: 0,
    host_arch: 'x64',
    icu_data_in: '..\\..\\deps\\icu-tmp\\icudt72l.dat',
    icu_endianness: 'l',
    icu_gyp_path: 'tools/icu/icu-generic.gyp',
    icu_path: 'deps/icu-small',
    icu_small: false,
    icu_ver_major: '72',
    is_debug: 0,
    libdir: 'lib',
    llvm_version: '0.0',
    napi_build_version: '8',
    nasm_version: '2.16',
    node_builtin_shareable_builtins: [
      'deps/cjs-module-lexer/lexer.js',
      'deps/cjs-module-lexer/dist/lexer.js',
      'deps/undici/undici.js'
    ],
    node_byteorder: 'little',
    node_debug_lib: false,
    node_enable_d8: false,
    node_enable_v8_vtunejit: false,
    node_fipsinstall: false,
    node_install_corepack: true,
    node_install_npm: true,
    node_library_files: [
      'lib/_http_agent.js',
      'lib/_http_client.js',
      'lib/_http_common.js',
      'lib/_http_incoming.js',
      'lib/_http_outgoing.js',
      'lib/_http_server.js',
      'lib/_stream_duplex.js',
      'lib/_stream_passthrough.js',
      'lib/_stream_readable.js',
      'lib/_stream_transform.js',
      'lib/_stream_wrap.js',
      'lib/_stream_writable.js',
      'lib/_tls_common.js',
      'lib/_tls_wrap.js',
      'lib/assert.js',
      'lib/assert/strict.js',
      'lib/async_hooks.js',
      'lib/buffer.js',
      'lib/child_process.js',
      'lib/cluster.js',
      'lib/console.js',
      'lib/constants.js',
      'lib/crypto.js',
      'lib/dgram.js',
      'lib/diagnostics_channel.js',
      'lib/dns.js',
      'lib/dns/promises.js',
      'lib/domain.js',
      'lib/events.js',
      'lib/fs.js',
      'lib/fs/promises.js',
      'lib/http.js',
      'lib/http2.js',
      'lib/https.js',
      'lib/inspector.js',
      'lib/internal/abort_controller.js',
      'lib/internal/assert.js',
      'lib/internal/assert/assertion_error.js',
      'lib/internal/assert/calltracker.js',
      'lib/internal/assert/snapshot.js',
      'lib/internal/async_hooks.js',
      'lib/internal/blob.js',
      'lib/internal/blocklist.js',
      'lib/internal/bootstrap/browser.js',
      'lib/internal/bootstrap/loaders.js',
      'lib/internal/bootstrap/node.js',
      'lib/internal/bootstrap/switches/does_not_own_process_state.js',
      'lib/internal/bootstrap/switches/does_own_process_state.js',
      'lib/internal/bootstrap/switches/is_main_thread.js',
      'lib/internal/bootstrap/switches/is_not_main_thread.js',
      'lib/internal/buffer.js',
      'lib/internal/child_process.js',
      'lib/internal/child_process/serialization.js',
      'lib/internal/cli_table.js',
      'lib/internal/cluster/child.js',
      'lib/internal/cluster/primary.js',
      'lib/internal/cluster/round_robin_handle.js',
      'lib/internal/cluster/shared_handle.js',
      'lib/internal/cluster/utils.js',
      'lib/internal/cluster/worker.js',
      'lib/internal/console/constructor.js',
      'lib/internal/console/global.js',
      'lib/internal/constants.js',
      'lib/internal/crypto/aes.js',
      'lib/internal/crypto/certificate.js',
      'lib/internal/crypto/cfrg.js',
      'lib/internal/crypto/cipher.js',
      'lib/internal/crypto/diffiehellman.js',
      'lib/internal/crypto/ec.js',
      'lib/internal/crypto/hash.js',
      'lib/internal/crypto/hashnames.js',
      'lib/internal/crypto/hkdf.js',
      'lib/internal/crypto/keygen.js',
      'lib/internal/crypto/keys.js',
      'lib/internal/crypto/mac.js',
      'lib/internal/crypto/pbkdf2.js',
      'lib/internal/crypto/random.js',
      'lib/internal/crypto/rsa.js',
      'lib/internal/crypto/scrypt.js',
      'lib/internal/crypto/sig.js',
      'lib/internal/crypto/util.js',
      'lib/internal/crypto/webcrypto.js',
      'lib/internal/crypto/x509.js',
      'lib/internal/debugger/inspect.js',
      'lib/internal/debugger/inspect_client.js',
      'lib/internal/debugger/inspect_repl.js',
      'lib/internal/dgram.js',
      'lib/internal/dns/callback_resolver.js',
      'lib/internal/dns/promises.js',
      'lib/internal/dns/utils.js',
      'lib/internal/dtrace.js',
      'lib/internal/encoding.js',
      'lib/internal/error_serdes.js',
      'lib/internal/errors.js',
      'lib/internal/event_target.js',
      'lib/internal/file.js',
      'lib/internal/fixed_queue.js',
      'lib/internal/freelist.js',
      'lib/internal/freeze_intrinsics.js',
      'lib/internal/fs/cp/cp-sync.js',
      ... 199 more items
    ],
    node_module_version: 108,
    node_no_browser_globals: false,
    node_prefix: '/usr/local',
    node_release_urlbase: 'https://nodejs.org/download/release/',
    node_shared: false,
    node_shared_brotli: false,
    node_shared_cares: false,
    node_shared_http_parser: false,
    node_shared_libuv: false,
    node_shared_nghttp2: false,
    node_shared_nghttp3: false,
    node_shared_ngtcp2: false,
    node_shared_openssl: false,
    node_shared_zlib: false,
    node_tag: '',
    node_target_type: 'executable',
    node_use_bundled_v8: true,
    node_use_dtrace: false,
    node_use_etw: true,
    node_use_node_code_cache: true,
    node_use_node_snapshot: true,
    node_use_openssl: true,
    node_use_v8_platform: true,
    node_with_ltcg: true,
    node_without_node_options: false,
    openssl_is_fips: false,
    openssl_quic: true,
    ossfuzz: false,
    shlib_suffix: 'so.108',
    target_arch: 'x64',
    v8_enable_31bit_smis_on_64bit_arch: 0,
    v8_enable_gdbjit: 0,
    v8_enable_hugepage: 0,
    v8_enable_i18n_support: 1,
    v8_enable_inspector: 1,
    v8_enable_javascript_promise_hooks: 1,
    v8_enable_lite_mode: 0,
    v8_enable_object_print: 1,
    v8_enable_pointer_compression: 0,
    v8_enable_shared_ro_heap: 1,
    v8_enable_short_builtin_calls: 1,
    v8_enable_webassembly: 1,
    v8_no_strict_aliasing: 1,
    v8_optimized_debug: 1,
    v8_promise_internal_field_count: 1,
    v8_random_seed: 0,
    v8_trace_maps: 0,
    v8_use_siphash: 1,
    want_separate_host_toolset: 0
  }
}
*/