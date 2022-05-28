#!/usr/bin/env node

import fs from 'fs'
import { Command } from 'commander/esm.mjs'
import chalk from 'chalk'
import { execSync } from 'child_process'

const packageJson = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url)))
const { name, version } = packageJson

const program = new Command()

program
  .name(chalk.cyan(name))
  .description(`🛠️ ${chalk.red('NPM')} ${chalk.blue('YARN')} ${chalk.yellow('PNPM')} ${chalk.green('registry manager')}`)
  .version(chalk.magenta(version))

program
  .command('init')
  .description('add mirror and auto update or install')
  .action(() => {
    execSync('npm config set registry https://registry.npmmirror.com/', { stdio: 'inherit' })
    execSync('npm config set NODEJS_ORG_MIRROR https://cdn.npmmirror.com/binaries/node', { stdio: 'inherit' })
    execSync('npm config set NVM_NODEJS_ORG_MIRROR https://cdn.npmmirror.com/binaries/node', { stdio: 'inherit' })
    execSync('npm config set PHANTOMJS_CDNURL https://cdn.npmmirror.com/binaries/phantomjs', { stdio: 'inherit' })
    execSync('npm config set CHROMEDRIVER_CDNURL https://cdn.npmmirror.com/binaries/chromedriver', { stdio: 'inherit' })
    execSync('npm config set OPERADRIVER_CDNURL https://cdn.npmmirror.com/binaries/operadriver', { stdio: 'inherit' })
    execSync('npm config set ELECTRON_MIRROR https://cdn.npmmirror.com/binaries/electron/', { stdio: 'inherit' })
    execSync('npm config set ELECTRON_BUILDER_BINARIES_MIRROR https://cdn.npmmirror.com/binaries/electron-builder-binaries/', { stdio: 'inherit' })
    execSync('npm config set SASS_BINARY_SITE https://cdn.npmmirror.com/binaries/node-sass', { stdio: 'inherit' })
    execSync('npm config set SWC_BINARY_SITE https://cdn.npmmirror.com/binaries/node-swc', { stdio: 'inherit' })
    execSync('npm config set NWJS_URLBASE https://cdn.npmmirror.com/binaries/nwjs/v', { stdio: 'inherit' })
    execSync('npm config set PUPPETEER_DOWNLOAD_HOST https://cdn.npmmirror.com/binaries', { stdio: 'inherit' })
    execSync('npm config set SENTRYCLI_CDNURL https://cdn.npmmirror.com/binaries/sentry-cli', { stdio: 'inherit' })
    execSync('npm config set SAUCECTL_INSTALL_BINARY_MIRROR https://cdn.npmmirror.com/binaries/saucectl', { stdio: 'inherit' })
    execSync('npm config set RE2_DOWNLOAD_MIRROR https://cdn.npmmirror.com/binaries/node-re2', { stdio: 'inherit' })
    execSync('npm config set RE2_DOWNLOAD_SKIP_PATH true', { stdio: 'inherit' })
    execSync('npm config set npm_config_keytar_binary_host https://cdn.npmmirror.com/binaries/keytar', { stdio: 'inherit' })
    execSync('npm config set npm_config_sharp_binary_host https://cdn.npmmirror.com/binaries/sharp', { stdio: 'inherit' })
    execSync('npm config set npm_config_sharp_libvips_binary_host https://cdn.npmmirror.com/binaries/sharp-libvips', { stdio: 'inherit' })
    execSync('npm config set npm_config_robotjs_binary_host https://cdn.npmmirror.com/binaries/robotjs', { stdio: 'inherit' })

    execSync('npm install -g npm yarn pnpm', { stdio: 'inherit' })

    execSync('yarn config set -- --emoji true', { stdio: 'inherit' })
    execSync('yarn config set registry https://registry.npmmirror.com/', { stdio: 'inherit' })
    execSync('yarn config set NODEJS_ORG_MIRROR https://cdn.npmmirror.com/binaries/node', { stdio: 'inherit' })
    execSync('yarn config set NVM_NODEJS_ORG_MIRROR https://cdn.npmmirror.com/binaries/node', { stdio: 'inherit' })
    execSync('yarn config set PHANTOMJS_CDNURL https://cdn.npmmirror.com/binaries/phantomjs', { stdio: 'inherit' })
    execSync('yarn config set CHROMEDRIVER_CDNURL https://cdn.npmmirror.com/binaries/chromedriver', { stdio: 'inherit' })
    execSync('yarn config set OPERADRIVER_CDNURL https://cdn.npmmirror.com/binaries/operadriver', { stdio: 'inherit' })
    execSync('yarn config set ELECTRON_MIRROR https://cdn.npmmirror.com/binaries/electron/', { stdio: 'inherit' })
    execSync('yarn config set ELECTRON_BUILDER_BINARIES_MIRROR https://cdn.npmmirror.com/binaries/electron-builder-binaries/', { stdio: 'inherit' })
    execSync('yarn config set SASS_BINARY_SITE https://cdn.npmmirror.com/binaries/node-sass', { stdio: 'inherit' })
    execSync('yarn config set SWC_BINARY_SITE https://cdn.npmmirror.com/binaries/node-swc', { stdio: 'inherit' })
    execSync('yarn config set NWJS_URLBASE https://cdn.npmmirror.com/binaries/nwjs/v', { stdio: 'inherit' })
    execSync('yarn config set PUPPETEER_DOWNLOAD_HOST https://cdn.npmmirror.com/binaries', { stdio: 'inherit' })
    execSync('yarn config set SENTRYCLI_CDNURL https://cdn.npmmirror.com/binaries/sentry-cli', { stdio: 'inherit' })
    execSync('yarn config set SAUCECTL_INSTALL_BINARY_MIRROR https://cdn.npmmirror.com/binaries/saucectl', { stdio: 'inherit' })
    execSync('yarn config set RE2_DOWNLOAD_MIRROR https://cdn.npmmirror.com/binaries/node-re2', { stdio: 'inherit' })
    execSync('yarn config set RE2_DOWNLOAD_SKIP_PATH true', { stdio: 'inherit' })
    execSync('yarn config set npm_config_keytar_binary_host https://cdn.npmmirror.com/binaries/keytar', { stdio: 'inherit' })
    execSync('yarn config set npm_config_sharp_binary_host https://cdn.npmmirror.com/binaries/sharp', { stdio: 'inherit' })
    execSync('yarn config set npm_config_sharp_libvips_binary_host https://cdn.npmmirror.com/binaries/sharp-libvips', { stdio: 'inherit' })
    execSync('yarn config set npm_config_robotjs_binary_host https://cdn.npmmirror.com/binaries/robotjs', { stdio: 'inherit' })
  })

program
  .command('add')
  .description('add mirror')
  .action(() => {
    execSync('npm config set registry https://registry.npmmirror.com/', { stdio: 'inherit' })
    execSync('yarn config set registry https://registry.npmmirror.com/', { stdio: 'inherit' })
  })

program
  .command('remove')
  .alias('rm')
  .description('remove mirror')
  .action(() => {
    execSync('npm config set registry https://registry.npmjs.org', { stdio: 'inherit' })
    execSync('yarn config set registry https://registry.yarnpkg.com/', { stdio: 'inherit' })
  })

program.parse()
