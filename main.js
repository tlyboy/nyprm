import fs from 'fs'
import chalk from 'chalk'

import pkgManager from './pkgManager.js'
import action from './action.js'

const packageJson = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url)))
const { name, version } = packageJson

const { getPkgManager } = pkgManager

export default {
  name: chalk.cyan(name),
  description: `${getPkgManager('NPM')} ${getPkgManager('YARN')} ${getPkgManager('PNPM')} ${chalk.green(
    'registry manager'
  )}`,
  version: chalk.magenta(version),
  ...pkgManager,
  ...action
}
