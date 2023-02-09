# getType

## 引入

```ts
import { getType } from 'tool'
```

## 介绍

`getType` 返回数据的类型

## 参数

- `value: Record<string, unknown> ｜ []`：要检测的数据

## 返回

`string` 返回数据的类型

## 例子

```ts
import { getType } from 'tool'
getType(new Set([1, 2, 3])) // 'Set'
getType(null) // 'null'
getType(undefined) // 'undefined'
getType(new Map()) // 'Map'
getType([]) // 'Array'
```
