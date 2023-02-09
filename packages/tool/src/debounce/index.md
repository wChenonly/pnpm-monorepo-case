# debounce

## 引入

```ts
import { debounce } from 'tool'
```

## 介绍

`debounce` 是一个防抖函数。用于在需要执行一些操作，如果不加以限制，就会执行很多次的逻辑，这对性能是有很大的损耗的，那么防抖就用在对于短时间内连续触发的事件。在事件停止后的 `delay` 时间后触发逻辑。

## 参数

- `handle: Function`：回调参数
- `delay: number = 300`：延时的时间

## 返回

`Function`

## 例子

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import { debounce } from 'tool'

const text = ref('vue')

interface updateInterface {
  (e: Event): void
}

const update: updateInterface = debounce((e: Event): void => {
  text.value = (e.target as HTMLInputElement).value
}, 900)
</script>

<template>
  <input type="text" :value="text" @input="update" />
  <h1>{{ text }}</h1>
</template>
```

```ts
import { debounce } from 'tool'
window.addEventListener(
  'resize',
  debounce(() => {
    console.log(window.innerWidth)
    console.log(window.innerHeight)
  }, 250)
)

let counter = 0
const updateState = () => {
  counter++
}
const debouncedUpdate = debounce(updateState)
debouncedUpdate() // counter == 1
debouncedUpdate() // counter == 1
```
