import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import ParentView from '@/components/ParentView'

/**
 * Note: 路由配置项
 *
 * hidden: true                     // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true                 // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect             // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'               // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * query: '{"id": 1, "name": "ry"}' // 访问路由的默认传递参数
 * roles: ['admin', 'common']       // 访问路由的角色权限
 * permissions: ['a:a:a', 'b:b:b']  // 访问路由的菜单权限
 * meta : {
    noCache: true                   // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'                // 设置该路由的图标，对应路径src/assets/icons/svg
    breadcrumb: false               // 如果设置为false，则不会在breadcrumb面包屑中显示
    activeMenu: '/system/user'      // 当路由设置了该属性，则会高亮相对应的侧边栏。
  }
 */

// 公共路由
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/index'),
        name: 'Index',
        meta: { title: '首页', icon: 'home', affix: true }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    name:'user',
    meta: { title: '用户信息', icon: 'user' },
    redirect: 'noRedirect',
    children: [
      {
        path: 'admini',
        component: () => import('@/views/user/admin'),
        name: 'admini',
        meta: { title: 'D.ACT管理员' },
      } ,
      {
        path: 'projectAdmin',
        component: () => import('@/views/user/projectAdmin'),
        name: 'projectAdmin',
        meta: { title: '项目管理员' },
      } ,
      {
        path: 'projectMembers',
        component: () => import('@/views/user/projectMembers'),
        name: 'projectMembers',
        meta: { title: '项目成员' },
      } ,
      {
        path: 'projectPersonnelPool',
        component: () => import('@/views/user/projectPersonnelPool'),
        name: 'projectPersonnelPool',
        meta: { title: '团队人员池' },
      } ,
    ]
  },
  {
    path: '/networkSecurity',
    component: Layout,
    name:'networkSecurity',
    meta: { title: '项目网络安全管理', icon: 'documentation' },
    redirect: 'noRedirect',
    children: [
      {
        path: 'ProjectSpace',
        name: 'ProjectSpace',
        meta: { title: '项目空间管理'},
        component: ParentView,
        redirect: 'noRedirect',
        alwaysShow:true,
        children:[
          {
            path: 'list',
            name: 'list',
            meta: { title: '项目空间列表'},
            component: () => import('@/views/Projects/ProjectSpace/index'),
            children:[
              {
                path: '/ProjectList',
                component: () => import('@/views/Projects/ProjectSpace/ProjectList'),
                name: 'ProjectList',
                hidden:true,
                meta: { title: 'Project list' ,activeMenu:'/networkSecurity/ProjectSpace/list'},
              } ,
              {
                path: '/Members',
                component: () => import('@/views/Projects/ProjectSpace/Members'),
                name: 'Members',
                hidden:true,
                meta: { title: 'Members' ,activeMenu:'/networkSecurity/ProjectSpace/list'},
              } ,
              {
                path: '/Libraries',
                component: () => import('@/views/Projects/ProjectSpace/Libraries'),
                name: 'Libraries',
                hidden:true,
                meta: { title: 'Libraries' ,activeMenu:'/networkSecurity/ProjectSpace/list'},
              } ,
            ]
          } ,
          {
            path: 'ProjectsList',
            name: 'ProjectsList',
            meta: { title: '项目工程管理',breadcrumb: false,},
            component:ParentView,
            redirect: 'noRedirect',
            children:[
              {
                path: 'list',
                name: 'list',
                meta: { title: '项目工程管理'},
                component: () => import('@/views/Projects/ProjectsList/index'),
              } ,
              {
                path: 'EditProject',
                hidden:true,
                component: () => import('@/views/Projects/ProjectsList/EditProject'),
                name: 'EditProject',
                meta: { title: '项目管理'},
              } ,
            ]
          },

        ]
      }
    ]
  },
  {
    path: '/SafetyActivities',
    component: Layout,
    name:'SafetyActivities',
    meta: { title: '持续网络安全活动', icon: 'validCode' },
    redirect: 'noRedirect',
    children: [
      {
        path: 'AssetManagement',
        component: () => import('@/views/SafetyActivities/AssetManagement'),
        name: 'AssetManagement',
        meta: { title: '资产管理' },
      } ,
      {
        path: 'SafetyMonitoring',
        component: () => import('@/views/SafetyActivities/SafetyMonitoring'),
        name: 'SafetyMonitoring',
        meta: { title: '安全监控' },
      } ,
      {
        path: 'VulnerabilityManagement',
        component: () => import('@/views/SafetyActivities/VulnerabilityManagement'),
        name: 'VulnerabilityManagement',
        meta: { title: '漏洞管理' },
      } ,
      {
        path: 'EventManagement',
        component: () => import('@/views/SafetyActivities/EventManagement'),
        name: 'EventManagement',
        meta: { title: '事件管理' },
      } ,
    ]
  },
  {
    path: '/SecurityGovernance',
    component: Layout,
    name:'SecurityGovernance',
    meta: { title: '企业网络安全治理', icon: 'monitor' },
    redirect: 'noRedirect',
    children: [
      {
        path: 'SecurityPolicy',
        component: () => import('@/views/SecurityGovernance/SecurityPolicy'),
        name: 'SecurityPolicy',
        meta: { title: '安全策略' },
      } ,
      {
        path: 'SecurityOrganization',
        component: () => import('@/views/SecurityGovernance/SecurityOrganization'),
        name: 'SecurityOrganization',
        meta: { title: '安全组织' },
      } ,
      {
        path: 'SecurityWen',
        component: () => import('@/views/SecurityGovernance/SecurityWen'),
        name: 'SecurityWen',
        meta: { title: '安全文化' },
      } ,
      {
        path: 'SecurityManagement',
        component: () => import('@/views/SecurityGovernance/SecurityManagement'),
        name: 'SecurityManagement',
        meta: { title: '安全管理' },
      } ,
      {
        path: 'SafetyCertification',
        component: () => import('@/views/SecurityGovernance/SafetyCertification'),
        name: 'SafetyCertification',
        meta: { title: '安全认证' },
      } ,
    ]
  },
  {
    path: '/Tool',
    component: Layout,
    redirect: 'ToolConfiguration',
    children: [
      {
        path: 'ToolConfiguration',
        component: () => import('@/views/ToolConfiguration/index'),
        name: 'ToolConfiguration',
        meta: { title: '工具配置管理', icon: 'system', affix: true }
      }
    ]
  },

]
// 防止连续点击多次路由报错
let routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}

export default new Router({
  // mode: 'history', // 去掉url中的#
  mode: 'hash', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
