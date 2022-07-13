import { readFileSync } from 'fs'
import chalk from 'chalk'

import { getPkgManager } from './actions.js'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))

export const name = chalk.cyan(pkg.name)

export const description = `${getPkgManager('NPM')} ${getPkgManager('YARN')} ${getPkgManager('PNPM')} ${chalk.green(
  'registry manager'
)}`

export const version = chalk.magenta(pkg.version)

export const registries = JSON.parse(readFileSync(new URL('./registries.json', import.meta.url)))
