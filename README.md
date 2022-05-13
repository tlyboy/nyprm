# nyprm

一个 npm yarn pnpm 的镜像切换工具

## 特别说明

不同于其他工具的逻辑

该工具的镜像站只有 [npmmirror 中国镜像站](https://npmmirror.com/)

## 如何使用

添加到用户环境变量中，或者使用终端工具运行。

![image-20220513124017304](nyprm.png)

### init

同时为 npm yarn pnpm 以及二进制添加镜像并自动更新或安装

```bash
nyprm init
```

### add

同时为 npm yarn pnpm 添加镜像

```bash
nyprm add
```

### rm

同时为 npm yarn pnpm 去除镜像

```bash
nyprm rm
```
