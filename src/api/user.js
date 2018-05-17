import axios from './axios'

export default {
    getUser(para, cb) {
        return axios.get('/api/user', {params: para}).then(cb);
    },
    delUser(para, cb) {
        return axios.delete('/api/delete/' + para).then(cb);
    },
    getRoomList(para, cb) {
        return axios.get('/api/room', {params: para}).then(cb);
    },
    getReg(para, cb) {
        return axios.get('/api/reg', {params: para}).then(cb);
    },
    editReg(para, param, cb) {
        return axios.put('/api/reg/' + para, param).then(cb);
    },
    getSign(para, cb){
        return axios.get('/api/sign', para).then(cb);
    },
    editSign(id, para, cb){
        return axios.put('/api/sign/' + id, para).then(cb);
    },
    delSign(id, cb){
        return axios.delete('/api/sign/delete/' + id).then(cb);
    },
    addSign(para, cb){
        return axios.post('/api/sign/add', para).then(cb);
    },

}