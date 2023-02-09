/**
 * 检查一个对象或者数组是否为空
 * @param params 需要判断的值
 * @returns boolean
 */

import { onTypeError } from '../utils'

export const isEmpty = (val: Record<string, unknown> | Array<unknown>) => {
  if (typeof val !== 'object') {
    onTypeError('isEmpty', 'parameter is not a object')
    return
  }
  return !(Object.keys(val) || val).length
}
