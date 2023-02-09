/**
 * 防抖
 * @param handle 回调函数
 * @param delay 时间
 * @returns Function
 */

export const debounce = (fn: () => void, delay = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: unknown, ...args: unknown[]) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args as keyof unknown), delay)
  }
}
