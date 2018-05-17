import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Table from './views/userInfo/Table.vue'
import Form from './views/userInfo/Form.vue'
import User from './views/userInfo/user.vue'
import Room from './views/roomManage/Room.vue'
import Page5 from './views/roomManage/Page5.vue'
import Reg from './views/config/Reg.vue'
import Sign from './views/config/Sign.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '用户中心',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            {path: '/table', component: Table, name: '用户管理'},
            {path: '/form', component: Form, name: '金币管理'},
            {path: '/user', component: User, name: '房卡管理'},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '房间管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            {path: '/room', component: Room, name: '房间信息'},
            {path: '/page5', component: Page5, name: '战绩信息'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '系统设置',
        iconCls: 'fa fa-id-card-o',
        children: [
            {path: '/Reg', component: Reg, name: '注册配置'},
            {path: '/Sign', component: Sign, name: '签到配置'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            {path: '/echarts', component: echarts, name: 'echarts'}
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: {path: '/404'}
    }
];

export default routes;