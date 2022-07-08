import { readFileSync } from 'fs'
import chalk from 'chalk'

import { getPkgManager } from './pkgManager.js'
import { init, setConfig, getConfig } from './action.js'

const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))
const { name, version } = packageJson

export default {
  name: chalk.cyan(name),
  description: `🛠️  ${getPkgManager('NPM')} ${getPkgManager('YARN')} ${getPkgManager('PNPM')} ${chalk.green(
    'registry manager'
  )}`,
  version: chalk.magenta(version),
  getPkgManager,
  init,
  setConfig,
  getConfig
}
