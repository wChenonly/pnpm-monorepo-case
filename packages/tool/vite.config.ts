import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => ({
  server: {
    fs: { allow: ['../../'] }
  },
  optimizeDeps: {
    exclude: ['vitepress']
  }
})
