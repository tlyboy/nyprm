import { execaCommandSync } from 'execa'
import chalk from 'chalk'

export default {
  getPkgManager(pkgManagerStr) {
    if (pkgManagerStr) {
      switch (pkgManagerStr.toLowerCase()) {
        case 'npm':
          return chalk.red(pkgManagerStr)
          break
        case 'yarn':
          return chalk.blue(pkgManagerStr)
          break
        case 'pnpm':
          return chalk.yellow(pkgManagerStr)
          break
        default:
          return pkgManagerStr
          break
      }
    }
  },
  init(pkgManagerStr, registry) {
    for (const key in registry) {
      const value = registry[key]

      this.setConfig(pkgManagerStr, key, value)
    }
  },
  setConfig(pkgManagerStr, key, value) {
    execaCommandSync(`${pkgManagerStr} config set ${key} ${value}`)
    console.log(`${this.getPkgManager(pkgManagerStr)} config set ${key} ${chalk.green(value)}`)
  },
  getConfig(pkgManagerStr, key) {
    return chalk.green(execaCommandSync(`${pkgManagerStr} config get ${key}`).stdout)
  }
}
