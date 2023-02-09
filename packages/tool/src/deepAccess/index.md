# deepAccess

## 引入

```ts
import { deepAccess } from 'tool'
```

## 介绍

`deepAccess` 是用来深度访问获取对象 `value` 到方法，如果找到了返回 `value`，找不到返回 `undefined`。

## 参数

- `param: Record<string | number, any>`：需要判断的对象
- `targetKey: string | number`：`key`

## 返回

- `value: any`

## 例子

```ts
import { deepAccess } from 'tool'

const param = {
  a: {
    b: {
      c: {
        f: '找到了'
      }
    }
  }
}

const param2 = {
  data: {
    retCode: '00000',
    value: '这是data的value'
  }
}
deepAccess(param, 'f') // 找到了
deepAccess(param, 'dd') // undefined
deepAccess(param2, 'retCode') === '00000' // true
```
