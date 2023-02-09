/**
 * 获取滚动位置
 * @param el 需要获取滚动位置的元素
 * @returns 当前滚动位置{x, y}
 */

export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})
