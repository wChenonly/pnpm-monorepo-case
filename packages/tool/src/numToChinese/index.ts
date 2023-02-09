/**
 * 将阿拉伯数字转换中文 （目前支持最大到千位数且只支持整数）
 * @param value:number 需要转换的值
 * @returns string 转换后的中文
 */
export const numToChinese = (value: number): string => {
  const chnNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const chnNumUnit = ['', '十', '百', '千']
  let tmp = ''
  let chnString = ''
  let zero = true
  let unitIndex = 0
  let isTen = false
  if (value > 9 && value < 20) isTen = true

  while (value > 0) {
    const num = value % 10
    if (num === 0) {
      if (!zero) {
        zero = true
        chnString = chnNum[num] + chnString
      }
    } else {
      zero = false
      if (isTen && unitIndex === 1) tmp = ''
      else tmp = chnNum[num]

      tmp += chnNumUnit[unitIndex]
      chnString = tmp + chnString
    }
    unitIndex++
    value = Math.floor(value / 10)
  }
  return chnString
}
