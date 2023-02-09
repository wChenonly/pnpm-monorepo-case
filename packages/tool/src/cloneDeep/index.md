# cloneDeep

## 引入

```ts
import { cloneDeep } from 'tool'
```

## 介绍

`cloneDeep` 用于简单深度克隆一个对象或者数组

## 参数

- `object | unknown[]`：需要克隆的对象或者数组

## 返回

`object | unknown[]`

## 例子

```ts
import { cloneDeep } from 'tool'

const obj = {
  name: 'admin',
  age: 12,
  arr: [1, 2, 3, 4]
}

const clone = cloneDeep(obj)

console.log(obj) // {name: 'admin', age: 12, arr: Array(4)}
console.log(clone) // {name: 'admin', age: 12, arr: Array(4)}
console.log(obj === clone) // false
console.log(obj.arr === clone.arr) // false
```
