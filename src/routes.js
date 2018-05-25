const Login = resolve => require(['./views/Login.vue'], resolve);
const NotFound = resolve => require(['./views/404.vue'], resolve);
const Home = resolve => require(['./views/Home.vue'], resolve);
const Table = resolve => require(['./views/userInfo/Table.vue'], resolve);
const Form = resolve => require(['./views/userInfo/Form.vue'], resolve);
const User = resolve => require(['./views/userInfo/user.vue'], resolve);
const Room = resolve => require(['./views/roomManage/Room.vue'], resolve);
const Page5 = resolve => require(['./views/roomManage/Page5.vue'], resolve);
const Reg = resolve => require(['./views/config/Reg.vue'], resolve);
const Sign = resolve => require(['./views/config/Sign.vue'], resolve);
const echarts = resolve => require(['./views/charts/echarts.vue'], resolve);

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