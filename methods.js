import { execaCommandSync } from 'execa'
import chalk from 'chalk'

export function getPkgManager(pkgManagerStr) {
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
}

export function init(pkgManagerStr, registry) {
  for (const key in registry) {
    const value = registry[key]

    setConfig(pkgManagerStr, key, value)
  }
}

export function setConfig(pkgManagerStr, key, value) {
  execaCommandSync(`${pkgManagerStr} config set ${key} ${value}`)
  console.log(`${getPkgManager(pkgManagerStr)} config set ${key} ${chalk.green(value)}`)
}

export function getConfig(pkgManagerStr, key) {
  return chalk.green(execaCommandSync(`${pkgManagerStr} config get ${key}`).stdout)
}
