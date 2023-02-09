import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidebar'

const config = defineConfig({
  title: 'tool',
  lastUpdated: true,
  base: '/share/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: './logo.svg'
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav,
    sidebar,
    footer: {
      message: 'Released under the MIT License. (master)',
      copyright: 'Copyright © 2022-present wChenonly'
    }
  }
})

export default config
