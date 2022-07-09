# nyprm

一个 npm yarn pnpm 的镜像管理工具。

## 安装

```bash
npm install -g nyprm --registry=https://registry.npmmirror.com/
```

## 使用说明

```text
Usage: nyprm [options] [command]

🛠️  NPM YARN PNPM registry manager

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  init            add registry mirror and binary mirror
  add             add registry mirror
  remove|rm       remove registry mirror
  list|ls         show registry list
  help [command]  display help for command
```

```bash
npm install nyprm
```

```javascript
import nyprm from 'nyprm'
```

## 相关仓库

- [npm](https://github.com/npm/cli) — the package manager for JavaScript
- [yarn](https://github.com/yarnpkg/yarn) — Fast, reliable, and secure dependency management
- [pnpm](https://github.com/pnpm/pnpm) — Fast, disk space efficient package manager
- [cnpm](https://github.com/cnpm/cnpm) — npm client for China mirror of npm
- [binary-mirror-config](https://github.com/cnpm/binary-mirror-config) — Binary mirror config for prebuild and node-pre-gyp

## 使用许可

[MIT](https://opensource.org/licenses/MIT) © Guany
