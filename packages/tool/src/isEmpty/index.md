# isEmpty

## 引入

```ts
import { isEmpty } from 'tool'
```

## 介绍

`isEmpty` 检查一个对象或者数组是否为空

## 参数

- `val: Record<string, unknown> ｜ []`：需要判断的值

## 返回

`boolean`：`true` or `false`

## 例子

```ts
import { isEmpty } from 'tool'
isEmpty([]) // true
isEmpty({}) // true
isEmpty([1, 2]) // false
isEmpty({ a: 1, b: 2 }) // false
```
