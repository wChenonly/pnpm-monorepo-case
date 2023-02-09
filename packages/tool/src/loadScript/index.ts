/**
 * 用来动态加载 script
 * @param url 用来加载脚本的地址
 * @param name 初始化时候的脚本名字
 * @returns void
 */

export const loadScript = (url: string, name: string) =>
  new Promise<void>(resolve => {
    const dom = document.createElement('script')
    dom.src = url
    dom.type = 'text/javascript'
    dom.onload = () => {
      resolve(window[name as keyof Window])
    }
    document.head.appendChild(dom)
  })
