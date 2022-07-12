import { readFileSync } from 'fs'
import chalk from 'chalk'

import { getPkgManager } from './methods.js'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))

export let { name, description, version } = pkg

name = chalk.cyan(name)

description = `${getPkgManager('NPM')} ${getPkgManager('YARN')} ${getPkgManager('PNPM')} ${chalk.green(
  'registry manager'
)}`

version = chalk.magenta(version)

export const registries = JSON.parse(readFileSync(new URL('./registries.json', import.meta.url)))
