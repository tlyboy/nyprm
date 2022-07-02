#!/usr/bin/env node

import fs from 'fs'
import { Command } from 'commander'
import chalk from 'chalk'
import { execSync } from 'child_process'
import { configSetInit, configSetRegistry, configGetRegistry } from './action.js'

const packageJson = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url)))
const { name, version } = packageJson

const program = new Command()

program
  .name(chalk.cyan(name))
  .description(`${chalk.red('NPM')} ${chalk.blue('YARN')} ${chalk.yellow('PNPM')} ${chalk.green('registry manager')}`)
  .version(chalk.magenta(version))

program
  .command('init')
  .description('add registry mirror and binary mirror')
  .action(() => {
    configSetInit('npm')

    execSync('npm install -g npm yarn pnpm', { stdio: 'inherit' })

    configSetInit('yarn')
  })

program
  .command('add')
  .description('add registry mirror')
  .action(() => {
    configSetRegistry('npm', 'https://registry.npmmirror.com/')
    configSetRegistry('yarn', 'https://registry.npmmirror.com/')
  })

program
  .command('remove')
  .alias('rm')
  .description('remove registry mirror')
  .action(() => {
    configSetRegistry('npm', 'https://registry.npmjs.org/')
    configSetRegistry('yarn', 'https://registry.yarnpkg.com/')
  })

program
  .command('list')
  .alias('ls')
  .description('show registry list')
  .action(() => {
    console.log(`${chalk.red('npm')}:`, configGetRegistry('npm'))
    console.log(`${chalk.blue('yarn')}:`, configGetRegistry('yarn'))
    console.log(`${chalk.yellow('pnpm')}:`, configGetRegistry('pnpm'))
  })

program.parse()
