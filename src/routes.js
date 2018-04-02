import Login from './views/Login.vue'
const NotFound = notFound => require(['./views/404.vue'], notFound)
const Home = home => require(['./views/Home.vue'], home)
const Table = table => require(['./views/userInfo/Table.vue'], table)
const Form = form => require(['./views/userInfo/Form.vue'], form)
const User = user => require(['./views/userInfo/user.vue'], user)
const Room = Room => require(['./views/roomManage/Room.vue'], Room)
const Page5 = page5 => require(['./views/roomManage/Page5.vue'], page5)
const echarts = echarts => require(['./views/charts/echarts.vue'], echarts)
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