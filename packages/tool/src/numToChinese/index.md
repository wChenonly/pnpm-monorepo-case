# numToChinese

## 引入

```ts
import { numToChinese } from 'tool'
```

## 介绍

`numToChinese` 将阿拉伯数字转换中文 （目前支持最大到千位数且只支持整数）

## 参数

- `value: number`：需要转换的值

## 返回

- `string`：转换后的中文

## 例子

```ts
import { numToChinese } from 'tool'
numToChinese(99) // 九十九
numToChinese(19) // 十九
```
