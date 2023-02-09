export interface OnTypeErrorInterface {
  (name: string, msg: string): TypeError
}

/**
 * 错误提示
 * @param name 函数名
 * @param msg 错误信息
 */
export const onTypeError: OnTypeErrorInterface = (name: string, msg: string): TypeError => {
  throw new TypeError(`tool.${name}: ${msg}`)
}
