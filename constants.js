import { readFileSync } from 'fs'
import chalk from 'chalk'

import actions from './actions.js'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))
const { name, version } = pkg

const registries = JSON.parse(readFileSync(new URL('./registries.json', import.meta.url)))

export default {
  name: chalk.cyan(name),
  description: `🛠️ ${actions.getPkgManager('NPM')} ${actions.getPkgManager('YARN')} ${actions.getPkgManager(
    'PNPM'
  )} ${chalk.green('registry manager')}`,
  version: chalk.magenta(version),
  registries
}
