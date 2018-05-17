import axios from 'axios';

let base = '';

export const requestLogin = params => {
    return axios.post(`/api/simplelogin`, params).then(res => res.data);
};

export const getUserList = params => {
    return axios.get(`${base}/user/list`, {params: params});
};