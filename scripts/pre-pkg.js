const fs = require('fs-extra')
const version = require('../package.json').version
const file = 'node_modules/.prisma/client/package.json'
fs.outputJsonSync(file, {
  "name": ".prisma/client",
  "main": "index.js",
  "types": "index.d.ts",
  "browser": "index-browser.js",
  "version": version
})
