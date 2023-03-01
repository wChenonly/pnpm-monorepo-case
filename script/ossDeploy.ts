import { createReadStream, readdir, stat } from 'node:fs'
import { resolve } from 'node:path'
import { promisify } from 'node:util'
import OSS from 'ali-oss'
import kleur from 'kleur'

const promisifyReaddir = promisify(readdir)
const promisifyStat = promisify(stat)

const client = new OSS({
  region: 'xxx',
  accessKeyId: 'xxx',
  accessKeySecret: 'xxx',
  bucket: 'xxx'
})

const publicPath = `${process.env.INIT_CWD}/.vitepress/dist`

;(async function run(proPath = '') {
  const dir = await promisifyReaddir(`${publicPath}${proPath}`)

  for (const element of dir) {
    const stat = await promisifyStat(resolve(`${publicPath}${proPath}`, element))
    if (stat.isFile()) {
      const fileStream = createReadStream(resolve(`${publicPath}${proPath}`, element))
      await client.putStream(`washShare/washTool${proPath}/${element}`, fileStream)
      console.log(kleur.bold().green('上传文件:'), `washShare/washTool${proPath}/${element}`)
    } else if (stat.isDirectory()) {
      await run(`${proPath}/${element}`)
    }
  }
})()
