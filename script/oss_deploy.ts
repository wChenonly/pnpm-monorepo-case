/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import util from 'util'
import OSS from 'ali-oss'

const promisifyReaddir = util.promisify(fs.readdir)
const promisifyStat = util.promisify(fs.stat)

const client = new OSS({
  region: 'xxx',
  accessKeyId: 'xxx',
  accessKeySecret: 'xxx',
  bucket: 'xxx'
})

const publicPath = `${process.env.INIT_CWD}/.vitepress/dist`

async function run(proPath = '') {
  const dir = await promisifyReaddir(`${publicPath}${proPath}`)

  for (let i = 0; i < dir.length; i++) {
    const stat = await promisifyStat(path.resolve(`${publicPath}${proPath}`, dir[i]))
    if (stat.isFile()) {
      const fileStream = fs.createReadStream(path.resolve(`${publicPath}${proPath}`, dir[i]))

      await client.putStream(`share/${proPath}/${dir[i]}`, fileStream)
      console.log(`上传文件: share/${proPath}/${dir[i]}`)
    } else if (stat.isDirectory()) {
      await run(`${proPath}/${dir[i]}`)
    }
  }
}

void run()
