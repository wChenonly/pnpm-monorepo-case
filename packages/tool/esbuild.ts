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
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  const catalogue = fg.sync('src/**', { onlyDirectories: true })

  const mjsTemplate = (name: string) => `export * from './${name}/index.mjs'
`
  const cjsTemplate = (name: string) => `export * from './${name}/index.js'
`
  const dtsTemplate = (name: string) => `export * from './${name}'
`

  const mjs = catalogue.map(e => mjsTemplate(e))
  const cjs = catalogue.map(e => cjsTemplate(e))
  const dts = catalogue.map(e => dtsTemplate(e))

  writeFileSync(resolve(__dirname, './dist/index.js'), `${cjs.toString().replace(/\/src|,/g, '')}`)
  writeFileSync(resolve(__dirname, './dist/index.mjs'), `${mjs.toString().replace(/\/src|,/g, '')}`)
  writeFileSync(resolve(__dirname, './dist/index.d.ts'), `${dts.toString().replace(/\/src|,/g, '')}`)

  removeSync(resolve(__dirname, './dist/utils.d.ts'))

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
