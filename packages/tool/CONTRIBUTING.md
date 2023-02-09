# 贡献指南

## 🛠️ 启动项目

在贡献之前，你需要先将 `tool` 项目跑起来才行，那么前期的准备你需要：

- 安装 [node](http://nodejs.cn)，版本 `^14.18.0 || >=16.0.0`
- 安装 [pnpm](https://pnpm.io/zh)，最新版即可

如果你已经做好了前面的准备，可以直接跳过，从这里开始：

- `Fork` [tool](https://github.com/wChenonly/pnpm-monorepo-case.git)

接下来执行命令：

```shell
# clone 项目
clone https://github.com/wChenonly/pnpm-monorepo-case.git

# 进入项目目录
cd pnpm-monorepo-case/packages/tool/

# 安装依赖项
pnpm i

# 启动文档
pnpm docs:dev
```

## 🔓 命令说明

`tool` 内部设置了很多的命令，在 package.json 中可进行查看。下面详细介绍每一条命令：

| script 字段      | 对应命令            | 命令说明                                    |
| ---------------- | ------------------- | ------------------------------------------- |
| `clear`          | `pnpm clear`        | 清除 dist 打包目录                          |
| `docs:dev`       | `pnpm docs:dev`     | 启动文档项目                                |
| `docs:build`     | `pnpm docs:build`   | 打包文档项目                                |
| `docs:serve`     | `pnpm docs:serve`   | 预览打包后的文档                            |
| `build:bundle`   | `pnpm build:bundle` | 用 esbuild 打包,并且生成类型文件            |
| `build`          | `pnpm build`        | 清理 && 打包所有函数 && 打包文档            |
| `lint:fix`       | `pnpm lint:fix`     | 全局 ESLint 检测 && 修复                    |
| `format`         | `pnpm format`       | 全局格式化                                  |
| `test`           | `pnpm test`         | 单元测试                                    |
| `publish:oss`    | `pnpm publish:oss`  | 文档上传到 oss                              |
| `prepublishOnly` | `npm 钩子`          | 触发到 publish 命令的时候，会自动执行此钩子 |
| `release`        | `pnpm release`      | 打包 && bumpp 版本 && 发布 npm && 发布 oss  |

## 🚧 开发规范

- 1.能写单测的必须写单测
