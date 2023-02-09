/* eslint-disable no-console */
import { exec } from 'child_process'
import kleur from 'kleur'

const RELEASE_MODE = !!process.env.RELEASE_MODE

exec('git rev-parse --abbrev-ref HEAD', (error, res) => {
  if (error) {
    console.log(kleur.bold().red('获取分支出错!!! 👮👮👮'))
    return
  }
  if (!RELEASE_MODE) {
    console.log(kleur.bold().red('禁止直接运行`npm publish`,请运行 `npm run release`'))
    process.exit(1)
  }
  const branch = res.trim()
  if (branch !== 'master') {
    console.log(kleur.bold().red('请检查当前分支是否为 `master` 分支'))
    process.exit(1)
  }
})
