#!/usr/bin/env node

import { Command } from 'commander'
import chalk from 'chalk'
import { execSync } from 'child_process'

import pkg from './pkg.js'
import pkgManager from './pkgManager.js'
import action from './action.js'

const { name, description, version } = pkg
const { getPkgManager } = pkgManager
const { init, setConfig, getConfig } = action

const program = new Command()

program.name(name).description(description).version(version)

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
