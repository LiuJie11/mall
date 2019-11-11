import axios from 'axios'

export function request(config) {
    // 1创建axios实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000/api/vip',
        // baseURL:'http://106.54.54:237:8000/api/v1',
        timeout:5000
    })
    
    // 2响应式拦截
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        return err
    })
    // 发送网络请求
  return instance(config)
}