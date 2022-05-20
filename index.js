#!/usr/bin/env node

const { Command } = require('commander')
const chalk = require('chalk')
const { version } = require('./package.json')
const { execSync } = require('child_process')

const program = new Command()

program
  .name(chalk.cyan('nyprm'))
  .description(`🛠️ ${chalk.red('NPM')} ${chalk.blue('YARN')} ${chalk.yellow('PNPM')} ${chalk.green('registry manager')}`)
  .version(version)

program
  .command('init')
  .description('add mirror and auto update or install')
  .action(() => {
    execSync('npm config set registry https://registry.npmmirror.com/')
    execSync('npm config set NODEJS_ORG_MIRROR https://cdn.npmmirror.com/binaries/node')
    execSync('npm config set NVM_NODEJS_ORG_MIRROR https://cdn.npmmirror.com/binaries/node')
    execSync('npm config set PHANTOMJS_CDNURL https://cdn.npmmirror.com/binaries/phantomjs')
    execSync('npm config set CHROMEDRIVER_CDNURL https://cdn.npmmirror.com/binaries/chromedriver')
    execSync('npm config set OPERADRIVER_CDNURL https://cdn.npmmirror.com/binaries/operadriver')
    execSync('npm config set ELECTRON_MIRROR https://cdn.npmmirror.com/binaries/electron/')
    execSync('npm config set ELECTRON_BUILDER_BINARIES_MIRROR https://cdn.npmmirror.com/binaries/electron-builder-binaries/')
    execSync('npm config set SASS_BINARY_SITE https://cdn.npmmirror.com/binaries/node-sass')
    execSync('npm config set SWC_BINARY_SITE https://cdn.npmmirror.com/binaries/node-swc')
    execSync('npm config set NWJS_URLBASE https://cdn.npmmirror.com/binaries/nwjs/v')
    execSync('npm config set PUPPETEER_DOWNLOAD_HOST https://cdn.npmmirror.com/binaries')
    execSync('npm config set SENTRYCLI_CDNURL https://cdn.npmmirror.com/binaries/sentry-cli')
    execSync('npm config set SAUCECTL_INSTALL_BINARY_MIRROR https://cdn.npmmirror.com/binaries/saucectl')
    execSync('npm config set RE2_DOWNLOAD_MIRROR https://cdn.npmmirror.com/binaries/node-re2')
    execSync('npm config set RE2_DOWNLOAD_SKIP_PATH true')
    execSync('npm config set npm_config_keytar_binary_host https://cdn.npmmirror.com/binaries/keytar')
    execSync('npm config set npm_config_sharp_binary_host https://cdn.npmmirror.com/binaries/sharp')
    execSync('npm config set npm_config_sharp_libvips_binary_host https://cdn.npmmirror.com/binaries/sharp-libvips')
    execSync('npm config set npm_config_robotjs_binary_host https://cdn.npmmirror.com/binaries/robotjs')

    execSync('npm i -g npm yarn pnpm')

    execSync('yarn config set -- --emoji true')
    execSync('yarn config set registry https://registry.npmmirror.com/')
    execSync('yarn config set NODEJS_ORG_MIRROR https://cdn.npmmirror.com/binaries/node')
    execSync('yarn config set NVM_NODEJS_ORG_MIRROR https://cdn.npmmirror.com/binaries/node')
    execSync('yarn config set PHANTOMJS_CDNURL https://cdn.npmmirror.com/binaries/phantomjs')
    execSync('yarn config set CHROMEDRIVER_CDNURL https://cdn.npmmirror.com/binaries/chromedriver')
    execSync('yarn config set OPERADRIVER_CDNURL https://cdn.npmmirror.com/binaries/operadriver')
    execSync('yarn config set ELECTRON_MIRROR https://cdn.npmmirror.com/binaries/electron/')
    execSync('yarn config set ELECTRON_BUILDER_BINARIES_MIRROR https://cdn.npmmirror.com/binaries/electron-builder-binaries/')
    execSync('yarn config set SASS_BINARY_SITE https://cdn.npmmirror.com/binaries/node-sass')
    execSync('yarn config set SWC_BINARY_SITE https://cdn.npmmirror.com/binaries/node-swc')
    execSync('yarn config set NWJS_URLBASE https://cdn.npmmirror.com/binaries/nwjs/v')
    execSync('yarn config set PUPPETEER_DOWNLOAD_HOST https://cdn.npmmirror.com/binaries')
    execSync('yarn config set SENTRYCLI_CDNURL https://cdn.npmmirror.com/binaries/sentry-cli')
    execSync('yarn config set SAUCECTL_INSTALL_BINARY_MIRROR https://cdn.npmmirror.com/binaries/saucectl')
    execSync('yarn config set RE2_DOWNLOAD_MIRROR https://cdn.npmmirror.com/binaries/node-re2')
    execSync('yarn config set RE2_DOWNLOAD_SKIP_PATH true')
    execSync('yarn config set npm_config_keytar_binary_host https://cdn.npmmirror.com/binaries/keytar')
    execSync('yarn config set npm_config_sharp_binary_host https://cdn.npmmirror.com/binaries/sharp')
    execSync('yarn config set npm_config_sharp_libvips_binary_host https://cdn.npmmirror.com/binaries/sharp-libvips')
    execSync('yarn config set npm_config_robotjs_binary_host https://cdn.npmmirror.com/binaries/robotjs')
  })

program
  .command('add')
  .description('add mirror')
  .action(() => {
    execSync('npm config set registry https://registry.npmmirror.com/')
    execSync('yarn config set registry https://registry.npmmirror.com/')
  })

program
  .command('rm')
  .description('remove mirror')
  .action(() => {
    execSync('npm config set registry https://registry.npmjs.org')
    execSync('yarn config set registry https://registry.yarnpkg.com/')
  })

program.parse()
