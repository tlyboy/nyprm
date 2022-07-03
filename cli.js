#!/usr/bin/env node

import fs from 'fs'
import { Command } from 'commander'
import chalk from 'chalk'
import { execSync } from 'child_process'

import main from './main.js'

const { name, description, version, getPkgManager, initConfig, setConfig, getConfig } = main

const program = new Command()

program.name(name).description(description).version(version)

program
  .command('init')
  .description('add registry mirror and binary mirror')
  .action(() => {
    initConfig('npm')

    execSync('npm install -g npm yarn pnpm', { stdio: 'inherit' })

    initConfig('yarn')
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
