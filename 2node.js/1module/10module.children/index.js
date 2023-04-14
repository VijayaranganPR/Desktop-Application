/*
The module.children property in Node.js is an array of the module objects that have been required by the current module. 
It can be used to inspect the modules that have been required by the current module.
*/

const moduleA = require('./ModuleA')
console.log(module.children)

/*
[
  Module {
    id: 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\module\\module.children\\ModuleA\\index.js',
    path: 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\module\\module.children\\ModuleA',
    exports: {},
    filename: 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\module\\module.children\\ModuleA\\index.js',
    loaded: true,
    children: [],
    paths: [
      'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\module\\module.children\\ModuleA\\node_modules',
      'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\module\\module.children\\node_modules',
      'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\module\\node_modules',
      'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\node_modules',
      'C:\\Users\\prvij\\Desktop\\Java Script\\node_modules',
      'C:\\Users\\prvij\\Desktop\\node_modules',
      'C:\\Users\\prvij\\node_modules',
      'C:\\Users\\node_modules',
      'C:\\node_modules'
    ]
  }
]
*/

const moduleB = require('./ModuleB')
console.log(module.children)

/*
[
  Module {
    id: 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\module\\module.children\\ModuleB\\index.js',
    path: 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\module\\module.children\\ModuleB',
    exports: {},
    filename: 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\module\\module.children\\ModuleB\\index.js',
    loaded: true,
    children: [],
    paths: [
      'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\module\\module.children\\ModuleB\\node_modules',
      'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\module\\module.children\\node_modules',
      'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\module\\node_modules',
      'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\node_modules',
      'C:\\Users\\prvij\\Desktop\\Java Script\\node_modules',
      'C:\\Users\\prvij\\Desktop\\node_modules',
      'C:\\Users\\prvij\\node_modules',
      'C:\\Users\\node_modules',
      'C:\\node_modules'
    ]
  }
]
*/