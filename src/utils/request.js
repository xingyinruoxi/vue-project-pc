import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { encrypt /* , decrypt */ } from '@/utils/crypt'

// create an axios instance
const service = axios.create({
    baseURL: process.env.BASE_API, // api 的 base_url
    // timeout: 5 * 60 * 1000 // request timeout
    timeout: 15 * 1000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    (request) => {
        const REQUEST_DATA = request.data
            // Do something before request is sent
        if (store.getters.token) {
            // 让每个请求携带token-- ['X-Token']
            request.headers['X-Token'] = getToken()
            request.headers.Accept = 'application/json, text/plain, */*'
                // request.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        }
        if (process.env.ECRYPT) {
            request.data = encrypt(REQUEST_DATA)
        }
        // console.log('request: ', request)
        return request
    },
    (error) => {
        // Do something with request error
        // console.log('request error: ', error) // for debug
        Promise.reject(error)
    },
)

// response interceptor
service.interceptors.response.use(
    // response => response,
    (response) => {
        // const RESPONSE_DATA = response.data
        if (process.env.ECRYPT) {
            // response.data = decrypt(RESPONSE_DATA)
        }
        // console.log('response: ', response)
        return response
    },
    /**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
     * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
     */
    // response => {
    //   const res = response.data
    //   if (res.code !== 20000) {
    //     Message({
    //       message: res.message,
    //       type: 'error',
    //       duration: 5 * 1000
    //     })
    //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //       // 请自行在引入 MessageBox
    //       // import { Message, MessageBox } from 'element-ui'
    //       MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //         confirmButtonText: '重新登录',
    //         cancelButtonText: '取消',
    //         type: 'warning'
    //       }).then(() => {
    //         store.dispatch('FedLogOut').then(() => {
    //           location.reload() // 为了重新实例化vue-router对象 避免bug
    //         })
    //       })
    //     }
    //     return Promise.reject('error')
    //   } else {
    //     return response.data
    //   }
    // },
    (error) => {
        const originalRequest = error.config
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1 && !originalRequest._retry) {
            // 重试
            // originalRequest._retry = true
            // return axios.request(originalRequest);
            Message({
                message: 'Request timeout！Please try again.',
                type: 'error',
                duration: 5 * 1000
            })
        } else {
            Promise.reject(error)
        }
    },
)

export default service