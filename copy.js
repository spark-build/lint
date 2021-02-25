const { join } = require('path')
const fs = require('fs-extra')

const tsconfig = require('./tsconfig.json')

const srcDir = join(__dirname, 'src')
const tplDir = 'bin/generateFiles/tpl'

fs.copy(
  join(srcDir, tplDir),
  join(__dirname, tsconfig.compilerOptions.outDir, tplDir)
)
