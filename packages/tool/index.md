---
layout: home

hero:
  name: 'tool'
  text: 工具库

  image:
    src: /logo.svg
    alt: 'tool'
  actions:
    - theme: brand
      text: start
      link: ./README.md
    - theme: alt
      text: gitHub
      link: https://github.com/wChenonly/pnpm-monorepo-case.git

features:
  - icon: 💡
    title: TypeScript
    details: 全量 TypeScript 编写，提供完整的类型定义!
  - icon: 📦
    title: esbuild构建
    details: 极快的esbuild构建，支持按需引入和 Tree Shaking.
  - icon: ⛽️
    title: 努力更新更多函数
    details: 希望帮你少写代码.
  - icon: ✅
    title: 单测也是有点的
    details: 争取实现90%以上的单测.
---

<script setup>
import { onMounted } from 'vue'
import { getReleaseTag } from './.vitepress/utils.ts'

onMounted(() => {
  getReleaseTag()
})
</script>
