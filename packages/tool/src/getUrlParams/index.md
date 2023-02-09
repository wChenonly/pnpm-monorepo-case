# getUrlParams

## 引入

```ts
import { getUrlParams } from 'tool'
```

## 介绍

`getUrlParams` 用来获取解析 `url` 中的参数

## 参数

- 无参数，函数使用 `window.location.search`和 `window.location.hash` 作为参数

## 返回

`{ [key: string]: srting }` 返回解析后的参数对象

## 例子

```ts
import { getUrlParams } from 'tool'
const params = getUrlParams()
```
