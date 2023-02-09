/**
 * 检测数据类型
 * @param value 要检测的数据
 * @returns 数据的类型
 */

export const getType = <T>(value: T) => (value === undefined ? 'undefined' : value === null ? 'null' : value.constructor.name)
