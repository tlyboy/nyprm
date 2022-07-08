#!/usr/bin/env node

import { readFileSync } from 'fs'
import { Command } from 'commander'
import chalk from 'chalk'
import { execSync } from 'child_process'

import { getPkgManager } from './pkgManager.js'
import { init, setConfig, getConfig } from './action.js'

const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))
const { name, version } = packageJson

const program = new Command()

program
  .name(chalk.cyan(name))
  .description(
    `🛠️  ${getPkgManager('NPM')} ${getPkgManager('YARN')} ${getPkgManager('PNPM')} ${chalk.green('registry manager')}`
  )
  .version(chalk.magenta(version))

program
  .command('init')
  .description('add registry mirror and binary mirror')
  .action(() => {
    init('npm')

    execSync('npm install -g npm yarn pnpm', { stdio: 'inherit' })

    init('yarn')
  })

program
  .command('add')
  .description('add registry mirror')
  .action(() => {
    setConfig('npm', 'registry', 'https://registry.npmmirror.com/')
    setConfig('yarn', 'registry', 'https://registry.npmmirror.com/')
  })

program
  .command('remove')
  .alias('rm')
  .description('remove registry mirror')
  .action(() => {
    setConfig('npm', 'registry', 'https://registry.npmjs.org/')
    setConfig('yarn', 'registry', 'https://registry.yarnpkg.com/')
  })

program
  .command('list')
  .alias('ls')
  .description('show registry list')
  .action(() => {
    console.log(`${getPkgManager('npm')}: ${getConfig('npm', 'registry')}`)
    console.log(`${getPkgManager('yarn')}: ${getConfig('yarn', 'registry')}`)
    console.log(`${getPkgManager('pnpm')}: ${getConfig('pnpm', 'registry')}`)
  })

program.parse()
