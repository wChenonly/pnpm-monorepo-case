# getScrollPosition

## 引入

```ts
import { getScrollPosition } from 'tool'
```

## 介绍

`getScrollPosition` 获取滚动位置

## 参数

- `el`：需要获取滚动位置的元素

## 返回

`{ x: number, y: number }` 返回滚动位置

## 例子

```ts
import { getScrollPosition } from 'tool'

const el = document.getElementById('#scroll') as HTMLDivElement
getScrollPosition(el) // {x: 0, y: 200}
```
