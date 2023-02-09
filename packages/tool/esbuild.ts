import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { build } from 'esbuild'
import fg from 'fast-glob'
import fse from 'fs-extra'
import kleur from 'kleur'

import { name, version } from './package.json'

const { readFileSync, writeFileSync, removeSync } = fse

const inputArr = fg.sync('src/**/(index).ts')

const move = (format: string): void => {
  const __filenameNew = fileURLToPath(import.meta.url)
  const __dirnameNew = dirname(__filenameNew)
  const input: string = resolve(__dirnameNew, './dist/index.d.ts')
  writeFileSync(resolve(__dirnameNew, './dist/index.js'), readFileSync(input, 'utf-8'))
  writeFileSync(resolve(__dirnameNew, './dist/index.mjs'), readFileSync(input, 'utf-8'))
  removeSync(resolve(__dirnameNew, './dist/utils.d.ts'))

  // eslint-disable-next-line no-console, @typescript-eslint/restrict-template-expressions
  console.log(kleur.bold().green(`\n ${name} ${format} 格式 ${version} 版本打包成功 🎉🎉🎉\n`))
}

function bundleBundle(format: 'esm' | 'cjs') {
  const ext = format === 'esm' ? '.mjs' : '.js'
  void build({
    format,
    bundle: true,
    charset: 'utf8',
    entryPoints: [...inputArr],
    minify: true,
    outdir: 'dist',
    outExtension: { '.js': `${ext}` }
  }).then(() => {
    move(format)
  })
}

bundleBundle('esm')
bundleBundle('cjs')
