import { expect, test } from 'vitest'
import { deepAccess } from './index'

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
test('deepAccess', () => {
  expect(deepAccess(param, 'f')).toBe('找到了')
  expect(deepAccess(param, 'dd')).toBe(undefined)
  expect(deepAccess(param2, 'retCode') === '00000').toBe(true)
  expect(deepAccess(param2, 'data')).toStrictEqual({
    retCode: '00000',
    value: '这是data的value'
  })
})
