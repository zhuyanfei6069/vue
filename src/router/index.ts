import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import { useUserStore } from '@/stores/user'

const Layout = () => import('@/layouts/MainLayout.vue')

/**
 * 路由 = 菜单
 * 10 大模块
 */
export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Index.vue'),
    meta: { title: '登录', hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Index.vue'),
        meta: { title: '工作台', icon: 'DataAnalysis' }
      }
    ]
  },

  // ========== 1. 计划管理 ==========
  {
    path: '/plan',
    component: Layout,
    redirect: '/plan/annual',
    meta: { title: '计划管理', icon: 'Document' },
    children: [
      { path: 'annual', name: 'PlanAnnual', component: () => import('@/views/plan/Annual.vue'), meta: { title: '年度计划' } },
      { path: 'monthly', name: 'PlanMonthly', component: () => import('@/views/plan/Monthly.vue'), meta: { title: '月度计划' } },
      { path: 'daily', name: 'PlanDaily', component: () => import('@/views/plan/Daily.vue'), meta: { title: '日计划' } }
    ]
  },

  // ========== 2. 运输管理-生产用车 ==========
  {
    path: '/transport/production',
    component: Layout,
    redirect: '/transport/production/plan',
    meta: { title: '运输管理·生产用车', icon: 'Van' },
    children: [
      { path: 'plan', name: 'DispatchPlan', component: () => import('@/views/transport/production/Plan.vue'), meta: { title: '物流委托计划' } },
      { path: 'dispatch', name: 'Dispatch', component: () => import('@/views/transport/production/Dispatch.vue'), meta: { title: '作业区调度' } },
      { path: 'tracking', name: 'Tracking', component: () => import('@/views/transport/production/Tracking.vue'), meta: { title: '执行跟踪' } }
    ]
  },

  // ========== 3. 运输管理-工程用车 ==========
  {
    path: '/transport/engineering',
    component: Layout,
    redirect: '/transport/engineering/apply',
    meta: { title: '运输管理·工程用车', icon: 'Tools' },
    children: [
      { path: 'apply', name: 'EngApply', component: () => import('@/views/transport/engineering/Apply.vue'), meta: { title: '工程车申请单' } },
      { path: 'dispatch', name: 'EngDispatch', component: () => import('@/views/transport/engineering/Dispatch.vue'), meta: { title: '工程车派工单' } },
      { path: 'settlement', name: 'EngSettlement', component: () => import('@/views/transport/engineering/Settlement.vue'), meta: { title: '工程车结算单' } }
    ]
  },

  // ========== 4. 燃料消耗 ==========
  {
    path: '/fuel',
    component: Layout,
    redirect: '/fuel/refuel',
    meta: { title: '燃料消耗', icon: 'TakeawayBox' },
    children: [
      { path: 'refuel', name: 'FuelRefuel', component: () => import('@/views/fuel/Refuel.vue'), meta: { title: '加油记录' } },
      { path: 'gas', name: 'FuelGas', component: () => import('@/views/fuel/Gas.vue'), meta: { title: '加气记录' } }
    ]
  },

  // ========== 5. 物流可视化 ==========
  {
    path: '/visualization',
    component: Layout,
    redirect: '/visualization/overview',
    meta: { title: '物流可视化', icon: 'Map' },
    children: [
      { path: 'overview', name: 'VizOverview', component: () => import('@/views/visualization/Overview.vue'), meta: { title: '综合概览' } },
      { path: 'board', name: 'VizBoard', component: () => import('@/views/visualization/Board.vue'), meta: { title: '管理看板' } },
      { path: 'track', name: 'VizTrack', component: () => import('@/views/visualization/Track.vue'), meta: { title: '车辆跟踪' } }
    ]
  },

  // ========== 6. 费用归集 ==========
  {
    path: '/cost',
    component: Layout,
    redirect: '/cost/maintenance',
    meta: { title: '费用归集', icon: 'Money' },
    children: [
      { path: 'maintenance', name: 'CostMaintenance', component: () => import('@/views/cost/Maintenance.vue'), meta: { title: '车辆维修费' } },
      { path: 'engineering', name: 'CostEngineering', component: () => import('@/views/cost/Engineering.vue'), meta: { title: '工程车使用费' } },
      { path: 'wage', name: 'CostWage', component: () => import('@/views/cost/Wage.vue'), meta: { title: '驾驶员产量工资' } },
      { path: 'refuel', name: 'CostRefuel', component: () => import('@/views/cost/Refuel.vue'), meta: { title: '车辆加油费' } }
    ]
  },

  // ========== 7. KPI 指标分析 ==========
  {
    path: '/kpi',
    component: Layout,
    redirect: '/kpi/board',
    meta: { title: 'KPI 指标分析', icon: 'TrendCharts' },
    children: [
      { path: 'board', name: 'KpiBoard', component: () => import('@/views/kpi/Board.vue'), meta: { title: '指标看板' } },
      { path: 'vehicle', name: 'KpiVehicle', component: () => import('@/views/kpi/Vehicle.vue'), meta: { title: '车辆利用率' } },
      { path: 'staff', name: 'KpiStaff', component: () => import('@/views/kpi/Staff.vue'), meta: { title: '人员绩效' } },
      { path: 'plan', name: 'KpiPlan', component: () => import('@/views/kpi/Plan.vue'), meta: { title: '计划完成率' } }
    ]
  },

  // ========== 8. 车队管理 ==========
  {
    path: '/fleet',
    component: Layout,
    redirect: '/fleet/zone',
    meta: { title: '车队管理', icon: 'UserFilled' },
    children: [
      { path: 'zone', name: 'FleetZone', component: () => import('@/views/fleet/Zone.vue'), meta: { title: '作业区管理' } },
      { path: 'driver', name: 'FleetDriverConfig', component: () => import('@/views/fleet/DriverConfig.vue'), meta: { title: '驾驶员配置' } },
      { path: 'vehicle', name: 'FleetVehicleConfig', component: () => import('@/views/fleet/VehicleConfig.vue'), meta: { title: '车辆配置' } },
      { path: 'borrow', name: 'FleetBorrow', component: () => import('@/views/fleet/Borrow.vue'), meta: { title: '车辆借调' } },
      { path: 'notice', name: 'FleetNotice', component: () => import('@/views/fleet/Notice.vue'), meta: { title: '通知下发' } }
    ]
  },

  // ========== 9. 基础数据 ==========
  {
    path: '/base',
    component: Layout,
    redirect: '/base/team',
    meta: { title: '基础数据', icon: 'Files' },
    children: [
      { path: 'team', name: 'BaseTeam', component: () => import('@/views/base/Team.vue'), meta: { title: '车队信息' } },
      { path: 'area', name: 'BaseArea', component: () => import('@/views/base/Area.vue'), meta: { title: '作业区' } },
      { path: 'driver', name: 'BaseDriver', component: () => import('@/views/base/Driver.vue'), meta: { title: '驾驶员' } },
      { path: 'vehicle', name: 'BaseVehicle', component: () => import('@/views/base/Vehicle.vue'), meta: { title: '车辆' } },
      { path: 'location', name: 'BaseLocation', component: () => import('@/views/base/Location.vue'), meta: { title: '物流点位' } }
    ]
  },

  // ========== 10. 规则管理 ==========
  {
    path: '/rule',
    component: Layout,
    redirect: '/rule/route',
    meta: { title: '规则管理', icon: 'Setting' },
    children: [
      { path: 'route', name: 'RuleRoute', component: () => import('@/views/rule/Route.vue'), meta: { title: '路线规则' } },
      { path: 'load', name: 'RuleLoad', component: () => import('@/views/rule/Load.vue'), meta: { title: '车辆载重规则' } },
      { path: 'wage', name: 'RuleWage', component: () => import('@/views/rule/Wage.vue'), meta: { title: '驾驶绩效工资规则' } },
      { path: 'engineering', name: 'RuleEngineering', component: () => import('@/views/rule/Engineering.vue'), meta: { title: '工程车使用规则' } }
    ]
  },

  // 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue'),
    meta: { title: '404', hidden: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const whiteList = ['/login', '/404']

router.beforeEach((to, _from, next) => {
  const userStore = useUserStore()
  document.title = `${to.meta.title || ''} - 物流执行系统`

  if (userStore.isLoggedIn) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.fullPath } })
    }
  }
})

export default router
