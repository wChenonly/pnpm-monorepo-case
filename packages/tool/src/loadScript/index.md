# loadScript

## 引入

```ts
import { loadScript } from 'tool'
```

## 介绍

`loadScript` 用来动态加载 script

## 参数

- `url: string`：用来加载脚本的地址
- `name: string`：初始化时候的脚本名字

## 返回

`void`

## 例子

```ts
/* eslint-disable no-new */
import { loadScript } from 'tool'

loadScript('https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/vConsole/3.12.1/vconsole.min.js', 'vConsole').then(Res => {
  new Res()
})
```
