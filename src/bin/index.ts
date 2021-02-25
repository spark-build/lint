#!/usr/bin/env node

import * as chalk from 'chalk'

import { getConfigByUserSelected } from './prompts'
import { generateFiles } from './generateFiles'

const rootDir = process.cwd() || '.'

const init = async () => {
  const config = await getConfigByUserSelected()

  await generateFiles(
    rootDir,
    config.create === 'all' ? true : config.selectCreateFile
  )

  console.log(chalk.green(`✔ create lint config file success`))
}

init()
