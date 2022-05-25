# nyprm

一个 npm yarn pnpm 的镜像切换工具。

## 安装

```bash
npm i -g nyprm --registry=https://registry.npmmirror.com
```

## 使用说明

![nyprm](https://raw.githubusercontent.com/tlyboy/nyprm/main/nyprm.png)

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

### rm

同时为 npm yarn pnpm 去除镜像。

```bash
nyprm rm
```

## 特别说明

不同于其他工具的逻辑。

该工具的镜像站只有 [npmmirror 中国镜像站](https://npmmirror.com/)。

## 使用许可

[MIT](https://github.com/tlyboy/nyprm/blob/HEAD/LICENSE) © Guany
