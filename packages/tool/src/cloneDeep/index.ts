import { onTypeError } from '../utils'

/**
 * 简单深克隆
 * @param params 需要克隆的参数
 * @returns 克隆好的结果
 */

export const cloneDeep = (params: object | unknown[]): object | unknown[] => {
  if (params === null) return null as keyof unknown
  if (typeof params !== 'object') onTypeError('cloneDeep', 'parameter is not a object')

  const res: any = Array.isArray(params) ? [] : {}
  for (const [key, val] of Object.entries(params)) res[key] = typeof val === 'object' ? cloneDeep(val) : val

  return res
}
