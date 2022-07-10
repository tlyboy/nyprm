#!/usr/bin/env node

import { Command } from 'commander'
import chalk from 'chalk'
import { execaCommandSync } from 'execa'

import constants from './constants.js'
import actions from './actions.js'

const { name, description, version, registries } = constants

const program = new Command()

program.name(name).description(description).version(version)

program
  .command('init')
  .description('add registry mirror and binary mirror')
  .action(() => {
    actions.init('npm', registries.npmmirror)

    execaCommandSync('npm install -g npm yarn pnpm', { stdio: 'inherit' })

    actions.setConfig('yarn', '-- --emoji', 'true')

    actions.init('yarn', registries.npmmirror)
  })

program
  .command('add')
  .description('add registry mirror')
  .action(() => {
    actions.setConfig('npm', 'registry', registries.npmmirror.registry)
    actions.setConfig('yarn', 'registry', registries.npmmirror.registry)
  })

program
  .command('remove')
  .alias('rm')
  .description('remove registry mirror')
  .action(() => {
    actions.setConfig('npm', 'registry', registries.npm.registry)
    actions.setConfig('yarn', 'registry', registries.yarn.registry)
  })

program
  .command('list')
  .alias('ls')
  .description('show registry list')
  .action(() => {
    console.log(`${actions.getPkgManager('npm')}: ${actions.getConfig('npm', 'registry')}`)
    console.log(`${actions.getPkgManager('yarn')}: ${actions.getConfig('yarn', 'registry')}`)
    console.log(`${actions.getPkgManager('pnpm')}: ${actions.getConfig('pnpm', 'registry')}`)
  })

program.parse()
