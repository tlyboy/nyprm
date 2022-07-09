import { readFileSync } from 'fs'
import chalk from 'chalk'

import pkgManager from './pkgManager.js'

const { getPkgManager } = pkgManager

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))
const { name, version } = pkg

export default {
  name: chalk.cyan(name),
  description: `🛠️ ${getPkgManager('NPM')} ${getPkgManager('YARN')} ${getPkgManager('PNPM')} ${chalk.green(
    'registry manager'
  )}`,
  version: chalk.magenta(version)
}
