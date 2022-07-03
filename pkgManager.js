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

export default {
  getPkgManager
}