import chalk from 'chalk'
import { execSync } from 'child_process'
import { getPkgManager } from './pkgManager.js'

export function initConfig(pkgManagerStr) {
  setConfig(pkgManagerStr, 'registry', 'https://registry.npmmirror.com/')
  setConfig(pkgManagerStr, 'NODEJS_ORG_MIRROR', 'https://cdn.npmmirror.com/binaries/node')
  setConfig(pkgManagerStr, 'NVM_NODEJS_ORG_MIRROR', 'https://cdn.npmmirror.com/binaries/node')
  setConfig(pkgManagerStr, 'PHANTOMJS_CDNURL', 'https://cdn.npmmirror.com/binaries/phantomjs')
  setConfig(pkgManagerStr, 'CHROMEDRIVER_CDNURL', 'https://cdn.npmmirror.com/binaries/chromedriver')
  setConfig(pkgManagerStr, 'OPERADRIVER_CDNURL', 'https://cdn.npmmirror.com/binaries/operadriver')
  setConfig(pkgManagerStr, 'ELECTRON_MIRROR', 'https://cdn.npmmirror.com/binaries/electron/')
  setConfig(
    pkgManagerStr,
    'ELECTRON_BUILDER_BINARIES_MIRROR',
    'https://cdn.npmmirror.com/binaries/electron-builder-binaries/'
  )
  setConfig(pkgManagerStr, 'SASS_BINARY_SITE', 'https://cdn.npmmirror.com/binaries/node-sass')
  setConfig(pkgManagerStr, 'SWC_BINARY_SITE', 'https://cdn.npmmirror.com/binaries/node-swc')
  setConfig(pkgManagerStr, 'NWJS_URLBASE', 'https://cdn.npmmirror.com/binaries/nwjs/v')
  setConfig(pkgManagerStr, 'PUPPETEER_DOWNLOAD_HOST', 'https://cdn.npmmirror.com/binaries')
  setConfig(pkgManagerStr, 'PLAYWRIGHT_DOWNLOAD_HOST', 'https://cdn.npmmirror.com/binaries/playwright')
  setConfig(pkgManagerStr, 'SENTRYCLI_CDNURL', 'https://cdn.npmmirror.com/binaries/sentry-cli')
  setConfig(pkgManagerStr, 'SAUCECTL_INSTALL_BINARY_MIRROR', 'https://cdn.npmmirror.com/binaries/saucectl')
  setConfig(pkgManagerStr, 'RE2_DOWNLOAD_MIRROR', 'https://cdn.npmmirror.com/binaries/node-re2')
  setConfig(pkgManagerStr, 'RE2_DOWNLOAD_SKIP_PATH', 'true')
  setConfig(pkgManagerStr, 'npm_config_keytar_binary_host', 'https://cdn.npmmirror.com/binaries/keytar')
  setConfig(pkgManagerStr, 'npm_config_sharp_binary_host', 'https://cdn.npmmirror.com/binaries/sharp')
  setConfig(pkgManagerStr, 'npm_config_sharp_libvips_binary_host', 'https://cdn.npmmirror.com/binaries/sharp-libvips')
  setConfig(pkgManagerStr, 'npm_config_robotjs_binary_host', 'https://cdn.npmmirror.com/binaries/robotjs')
}

export function setConfig(pkgManagerStr, key, value) {
  execSync(`${pkgManagerStr} config set ${key} ${value}`)
  console.log(`${getPkgManager(pkgManagerStr)} config set ${key} ${chalk.green(value)}`)
}

export function getConfig(pkgManagerStr, key) {
  return chalk.green(execSync(`${pkgManagerStr} config get ${key}`).toString().trim())
}

export default {
  initConfig,
  setConfig,
  getConfig
}
