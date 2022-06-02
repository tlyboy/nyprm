# nyprm

一个 npm yarn pnpm 的镜像管理工具。

## 安装

```bash
npm install -g nyprm --registry=https://registry.npmmirror.com
```

## 使用说明

```text
Usage: nyprm [options] [command]

🛠️  NPM YARN PNPM registry manager

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  init            add mirror and auto update or install
  add             add mirror
  remove|rm       remove mirror
  list|ls         show registry list
  help [command]  display help for command
```

### init

同时为 npm yarn pnpm 以及二进制文件添加镜像并自动更新或安装。

```bash
nyprm init
```

### add

同时为 npm yarn pnpm 添加镜像。

```bash
nyprm add
```

### remove

同时为 npm yarn pnpm 去除镜像。

```bash
nyprm remove
```

别名：rm

### list

列出 npm yarn pnpm 当前镜像。

```bash
nyprm list
```

别名：ls

## 特别说明

不同于其他工具的逻辑。

该工具的镜像站只有 [npmmirror 中国镜像站](https://npmmirror.com/)。

## 使用许可

[MIT](https://github.com/tlyboy/nyprm/blob/main/LICENSE) © Guany
