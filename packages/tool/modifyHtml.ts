// 由于文档打包后的index.html 中是 href="/share/ 而由于服务器没有做重定向，会导致在首页刷新页面404.因此手动修改首页路径 href="/share/index.html

import fse from 'fs-extra'
import fg from 'fast-glob'
const { readFileSync, writeFileSync } = fse

const basePath = process.env.BASE_PATH
const pattern = `"${basePath}"`

const htmlArr = fg.sync('./.vitepress/dist/**/*.html')

htmlArr.forEach(res => {
  const html = readFileSync(res, 'utf-8')
  const afterHtml = html.toString().replace(pattern, `"${basePath}index.html"`)
  writeFileSync(res, afterHtml)
})
