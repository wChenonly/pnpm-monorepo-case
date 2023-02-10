import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { build } from 'esbuild'
import fg from 'fast-glob'
import fse from 'fs-extra'
import kleur from 'kleur'
import { name, version } from './package.json'

const { writeFileSync, removeSync } = fse

const inputArr = fg.sync('src/**/(index).ts')

const move = (format: string): void => {
  const __filenameNew = fileURLToPath(import.meta.url)
  const __dirnameNew = dirname(__filenameNew)

  const catalogue = fg.sync('src/**', { onlyDirectories: true })

  const mjsTemplate = (name: string) => `export * from './${name}/index.mjs'
`
  const cjsTemplate = (name: string) => `export * from './${name}/index.js'
`

  const mjs = catalogue.map(e => mjsTemplate(e))
  const cjs = catalogue.map(e => cjsTemplate(e))

  writeFileSync(resolve(__dirnameNew, './dist/index.js'), `${cjs.toString().replace(/\/src|,/g, '')}`)
  writeFileSync(resolve(__dirnameNew, './dist/index.mjs'), `${mjs.toString().replace(/\/src|,/g, '')}`)

  removeSync(resolve(__dirnameNew, './dist/utils.d.ts'))

  console.log(kleur.bold().green(`\n ${name} ${format} 格式 ${version} 版本打包成功 🎉🎉🎉\n`))
}

function bundleBundle(format: 'esm' | 'cjs') {
  const ext = format === 'esm' ? '.mjs' : '.js'
  build({
    format,
    bundle: true,
    charset: 'utf8',
    entryPoints: [...inputArr],
    minify: false,
    outdir: 'dist',
    outExtension: { '.js': `${ext}` }
  }).then(() => {
    move(format)
  })
}

bundleBundle('esm')
bundleBundle('cjs')
