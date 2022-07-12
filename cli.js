#!/usr/bin/env node

import { Command } from 'commander'
import chalk from 'chalk'
import { execaCommandSync } from 'execa'

import { name, description, version, registries } from './constants.js'
import { getPkgManager, init, setConfig, getConfig } from './actions.js'

const program = new Command()

program.name(name).description(description).version(version)

program
  .command('init')
  .description('add registry mirror and binary mirror')
  .action(() => {
    init('npm', registries.npmmirror)

    execaCommandSync('npm install -g npm yarn pnpm', { stdio: 'inherit' })

    setConfig('yarn', '-- --emoji', 'true')

    init('yarn', registries.npmmirror)
  })

program
  .command('add')
  .description('add registry mirror')
  .action(() => {
    setConfig('npm', 'registry', registries.npmmirror.registry)
    setConfig('yarn', 'registry', registries.npmmirror.registry)
  })

program
  .command('remove')
  .alias('rm')
  .description('remove registry mirror')
  .action(() => {
    setConfig('npm', 'registry', registries.npm.registry)
    setConfig('yarn', 'registry', registries.yarn.registry)
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
