# Request

## 引入

```ts
import { Request } from 'tool'
```

## 介绍

`Request`: 请求接口

## 参数

- ### ` method`
  - `get` { `interfaceName`: `sting`, `url`: `string`, `config`?: `AxiosRequestConfig` }
  * `post` { `interfaceName`: `sting`, `url`: `string`, `data`?: `Record<any, unknown>`, `config`?:`AxiosRequestConfig` }
  - `put` { `interfaceName`: `sting`, `url`: `string`, `data`?: `Record<any, unknown>`, `config`?:`AxiosRequestConfig`}
  - `post` {`interfaceName`: `sting`, `url`: `string`, `config`?: `AxiosRequestConfig` }
- ### 注释
  - `interfaceName`: 接口名称,用来 `log` 打印的(必传)
  - `url`: 接口请求的 `url`(必传)
  - `data`: 请求体(可选)
  - `config`: `axios` 的基础配置(可选)

## 返回

`Record<any, unknown>` 对象结果

## 例子

```ts
import { Request } from 'tool'

const request = new Request({})
const par = {
  app_id: 'cli_a356c89b132d500c',
  app_secret: 'C90rtE6iJOEIZt5K6rfzFhornmmPi1D1'
}
request.post('获取token', 'https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', par).then(res => {
  console.log('2post', res)
})

// 如果需要自定义header或者其他自定义配置
const request = new Request({
  timeout: 1000,
  headers: {
    Authorization: 'Bearer t-g10427eo52LK4XS6QPDHQXMUNTLIAXXGJM2X5243'
  }
})
const { data } = await request.get('查找表格', 'https://open.feishu.cn/open-apis/sheets/v3/spreadsheets/shtcnqqUtDj5Fu0TJ8jWG5LWfTc/sheets/daa2cb')
console.log('[ data] >', data)
```
