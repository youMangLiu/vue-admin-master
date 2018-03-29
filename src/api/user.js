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
    }
}