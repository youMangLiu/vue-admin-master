/**
 * Created by chenmingming on 2017/6/17.
 */
import axios from 'axios'
import NProgress from 'nprogress'
import {Notification} from 'element-ui'

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
// // 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    NProgress.start();
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    NProgress.done();
    if (response.config.url === '/api/simplelogin') {
        return response
    }
    if (response.data.code !== 'SUCCESS') {
        Notification.error('[' + response.data.code + ']' + response.data.msg);
        if (response.data.code === 'NEED_LOGGED') {
            window.location.href = '/#/login'
        }
        return Promise.reject(response)
    }
    return response
}, function (error) {
    // console.log(error);
    // Notification.error(error.response);return;
    error.response.data = error.response.data.match('<title>([^<>]+)</title>');
    // console.log(error.response.data[1]);return ;
    Notification.error(error.response.data[1]);
    NProgress.done();
    if (error.response.status === 401) {
        window.location.href = '/#/login'
    }
    // Do something with response error
    return Promise.reject(error)
})
export default axios
