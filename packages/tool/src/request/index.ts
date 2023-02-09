import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { onTypeError } from '../utils'

export class Request {
  // axios 实例
  private instance: AxiosInstance

  // 基础配置，url和超时时间
  private baseConfig: AxiosRequestConfig = { baseURL: '', timeout: 6000 }

  // 接口名字，用来log打印信息
  private interfaceName = ''

  constructor(config: AxiosRequestConfig) {
    // 使用axios.create创建axios实例
    this.instance = axios.create(Object.assign(this.baseConfig, config))

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.warn(`tool.request 成功: ${this.interfaceName}`, res?.data)
        return res
      },
      (err: any) => {
        onTypeError('request', `${this.interfaceName}请求失败${JSON.stringify(err)}`)
        void Promise.reject(err)
      }
    )
  }

  public get(interfaceName: string, url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Record<any, unknown>>> {
    this.interfaceName = interfaceName
    return this.instance.get(url, config)
  }

  public post(interfaceName: string, url: string, data?: Record<any, unknown>, config?: AxiosRequestConfig): Promise<AxiosResponse<Record<any, unknown>>> {
    this.interfaceName = interfaceName
    return this.instance.post(url, data, config)
  }

  public put(interfaceName: string, url: string, data?: Record<any, unknown>, config?: AxiosRequestConfig): Promise<AxiosResponse<Record<any, unknown>>> {
    this.interfaceName = interfaceName
    return this.instance.put(url, data, config)
  }

  public delete(interfaceName: string, url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Record<any, unknown>>> {
    this.interfaceName = interfaceName
    return this.instance.delete(url, config)
  }
}
