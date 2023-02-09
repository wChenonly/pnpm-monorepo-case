/**
 * 用来获取解析 url 中的参数
 * @returns [key: string]: unknown
 */

export const getUrlParams = () => {
  const url = window.location.search
  const query: { [key: string]: unknown } = {}
  if (url.includes('?')) {
    const str = url.substr(1)
    const strs = str.split('&')
    for (let i = 0; i < strs.length; i++) query[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1])
  }

  const { hash } = window.location
  if (hash.includes('?')) {
    const hashStr = hash.substr(hash.indexOf('?') + 1, hash.length)
    const hashArr = hashStr.split('&')
    for (let i = 0; i < hashArr.length; i++) query[hashArr[i].split('=')[0]] = decodeURI(hashArr[i].split('=')[1])
  }
  return query
}
