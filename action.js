import chalk from 'chalk'
import { execSync } from 'child_process'

export function configSet(packageManager, key, value) {
  execSync(`${packageManager} config set ${key} ${value}`, { stdio: 'inherit' })
}

export function configGet(packageManager, key) {
  return chalk.green(execSync(`${packageManager} config get ${key}`).toString().trim())
}

export function configSetRegistry(packageManager, registryURL) {
  configSet(packageManager, 'registry', new URL(registryURL).href)
}

export function configGetRegistry(packageManager) {
  return configGet(packageManager, 'registry')
}

export function configSetInit(packageManager) {
  configSetRegistry(packageManager, 'https://registry.npmmirror.com/')
  configSet(packageManager, 'NODEJS_ORG_MIRROR', 'https://cdn.npmmirror.com/binaries/node')
  configSet(packageManager, 'NVM_NODEJS_ORG_MIRROR', 'https://cdn.npmmirror.com/binaries/node')
  configSet(packageManager, 'PHANTOMJS_CDNURL', 'https://cdn.npmmirror.com/binaries/phantomjs')
  configSet(packageManager, 'CHROMEDRIVER_CDNURL', 'https://cdn.npmmirror.com/binaries/chromedriver')
  configSet(packageManager, 'OPERADRIVER_CDNURL', 'https://cdn.npmmirror.com/binaries/operadriver')
  configSet(packageManager, 'ELECTRON_MIRROR', 'https://cdn.npmmirror.com/binaries/electron/')
  configSet(
    packageManager,
    'ELECTRON_BUILDER_BINARIES_MIRROR',
    'https://cdn.npmmirror.com/binaries/electron-builder-binaries/'
  )
  configSet(packageManager, 'SASS_BINARY_SITE', 'https://cdn.npmmirror.com/binaries/node-sass')
  configSet(packageManager, 'SWC_BINARY_SITE', 'https://cdn.npmmirror.com/binaries/node-swc')
  configSet(packageManager, 'NWJS_URLBASE', 'https://cdn.npmmirror.com/binaries/nwjs/v')
  configSet(packageManager, 'PUPPETEER_DOWNLOAD_HOST', 'https://cdn.npmmirror.com/binaries')
  configSet(packageManager, 'PLAYWRIGHT_DOWNLOAD_HOST', 'https://cdn.npmmirror.com/binaries/playwright')
  configSet(packageManager, 'SENTRYCLI_CDNURL', 'https://cdn.npmmirror.com/binaries/sentry-cli')
  configSet(packageManager, 'SAUCECTL_INSTALL_BINARY_MIRROR', 'https://cdn.npmmirror.com/binaries/saucectl')
  configSet(packageManager, 'RE2_DOWNLOAD_MIRROR', 'https://cdn.npmmirror.com/binaries/node-re2')
  configSet(packageManager, 'RE2_DOWNLOAD_SKIP_PATH', 'true')
  configSet(packageManager, 'npm_config_keytar_binary_host', 'https://cdn.npmmirror.com/binaries/keytar')
  configSet(packageManager, 'npm_config_sharp_binary_host', 'https://cdn.npmmirror.com/binaries/sharp')
  configSet(packageManager, 'npm_config_sharp_libvips_binary_host', 'https://cdn.npmmirror.com/binaries/sharp-libvips')
  configSet(packageManager, 'npm_config_robotjs_binary_host', 'https://cdn.npmmirror.com/binaries/robotjs')
}

export default {
  configSet,
  configGet,
  configSetRegistry,
  configGetRegistry,
  configSetInit
}
