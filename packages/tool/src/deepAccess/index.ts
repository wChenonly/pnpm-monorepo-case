import { getType } from '../getType'

/**
 * 深度访问获取对象 `value`
 * @param obj 需要判断的对象
 * @param targetKey key
 * @returns value: any
 */
export const deepAccess = (obj: Record<string | number, any>, targetKey: keyof Record<string | number, any>) => {
  if (targetKey in obj) return obj[targetKey]

  const innerArrayData = Object.values(obj)
  // eslint-disable-next-line array-callback-return
  const finded: unknown = innerArrayData.reduce((acc, cur) => {
    if (acc !== undefined) return acc
    if (getType(cur) === 'Object') return deepAccess(cur, targetKey)
  }, undefined)

  return finded
}
