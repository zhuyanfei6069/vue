import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import { useUserStore } from '@/stores/user'

/**
 * 路由配置
 *  - 一级菜单必须有 icon
 *  - 二级菜单也必须有 icon（v1.1.3 规范）
 *  - 全部使用 Element Plus 线性（outline）图标
 */
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard/index'
  },
  // ==================== 工作台（顶级页面）====================
  {
    path: '/dashboard',
    component: () => import('@/layouts/MainLayout.vue'),
    redirect: '/dashboard/index',
    meta: { title: '工作台', icon: 'DataLine' },
    children: [
      {
        path: 'index',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Index.vue'),
        meta: { title: '工作台', icon: 'DataLine' }
      }
    ]
  },

  // ==================== 计划管理 ====================
  {
    path: '/plan',
    component: () => import('@/layouts/MainLayout.vue'),
    redirect: '/plan/annual',
    meta: { title: '计划管理', icon: 'Document' },
    children: [
      {
        path: 'annual',
        name: 'PlanAnnual',
        component: () => import('@/views/plan/Annual.vue'),
        meta: { title: '年度计划', icon: 'Calendar' }
      },
      {
        path: 'monthly',
        name: 'PlanMonthly',
        component: () => import('@/views/plan/Monthly.vue'),
        meta: { title: '月度计划', icon: 'Calendar' }
      }
    ]
  },

  // ==================== 运输管理·生产用车 ====================
  {
    path: '/transport/production',
    component: () => import('@/layouts/MainLayout.vue'),
    redirect: '/transport/production/plan',
    meta: { title: '运输管理·生产用车', icon: 'Promotion' },
    children: [
      {
        path: 'plan',
        name: 'DispatchPlan',
        component: () => import('@/views/transport/production/Plan.vue'),
        meta: { title: '物流委托计划', icon: 'List' }
      },
      {
        path: 'dispatch',
        name: 'Dispatch',
        component: () => import('@/views/transport/production/Dispatch.vue'),
        meta: { title: '作业区调度', icon: 'Operation' }
      }
    ]
  },

  // ==================== 运输管理·工程用车 ====================
  {
    path: '/transport/engineering',
    component: () => import('@/layouts/MainLayout.vue'),
    redirect: '/transport/engineering/apply',
    meta: { title: '运输管理·工程用车', icon: 'Tools' },
    children: [
      {
        path: 'apply',
        name: 'EngApply',
        component: () => import('@/views/transport/engineering/Apply.vue'),
        meta: { title: '工程车申请单', icon: 'EditPen' }
      },
      {
        path: 'dispatch',
        name: 'EngDispatch',
        component: () => import('@/views/transport/engineering/Dispatch.vue'),
        meta: { title: '工程车派工单', icon: 'Cpu' }
      }
    ]
  },

  // ==================== 燃料消耗 ====================
  {
    path: '/fuel',
    component: () => import('@/layouts/MainLayout.vue'),
    redirect: '/fuel/refuel',
    meta: { title: '燃料消耗', icon: 'TakeawayBox' },
    children: [
      {
        path: 'refuel',
        name: 'FuelRefuel',
        component: () => import('@/views/fuel/Refuel.vue'),
        meta: { title: '加油记录', icon: 'Goblet' }
      },
      {
        path: 'gas',
        name: 'FuelGas',
        component: () => import('@/views/fuel/Gas.vue'),
        meta: { title: '加气记录', icon: 'Lightning' }
      }
    ]
  },

  // ==================== 物流可视化 ====================
  {
    path: '/visualization',
    component: () => import('@/layouts/MainLayout.vue'),
    redirect: '/visualization/overview',
    meta: { title: '物流可视化', icon: 'LocationFilled' },
    children: [
      {
        path: 'overview',
        name: 'VizOverview',
        component: () => import('@/views/visualization/Overview.vue'),
        meta: { title: '综合概览', icon: 'DataBoard' }
      },
      {
        path: 'board',
        name: 'VizBoard',
        component: () => import('@/views/visualization/Board.vue'),
        meta: { title: '管理看板', icon: 'DataAnalysis' }
      },
      {
        path: 'tracking',
        name: 'VizTracking',
        component: () => import('@/views/visualization/Track.vue'),
        meta: { title: '车辆跟踪', icon: 'Position' }
      }
    ]
  },

  // ==================== 费用归集 ====================
  {
    path: '/cost',
    component: () => import('@/layouts/MainLayout.vue'),
    redirect: '/cost/maintenance',
    meta: { title: '费用归集', icon: 'Wallet' },
    children: [
      {
        path: 'maintenance',
        name: 'CostMaintenance',
        component: () => import('@/views/cost/Maintenance.vue'),
        meta: { title: '车辆维修费', icon: 'Wallet' }
      },
      {
        path: 'engineering',
        name: 'CostEngineering',
        component: () => import('@/views/cost/Engineering.vue'),
        meta: { title: '工程车使用费', icon: 'Money' }
      }
    ]
  },

  // ==================== KPI 指标分析 ====================
  {
    path: '/kpi',
    component: () => import('@/layouts/MainLayout.vue'),
    redirect: '/kpi/board',
    meta: { title: 'KPI 指标分析', icon: 'TrendCharts' },
    children: [
      {
        path: 'board',
        name: 'KpiBoard',
        component: () => import('@/views/kpi/Board.vue'),
        meta: { title: '指标看板', icon: 'Odometer' }
      },
      {
        path: 'vehicle',
        name: 'KpiVehicle',
        component: () => import('@/views/kpi/Vehicle.vue'),
        meta: { title: '车辆利用率', icon: 'PieChart' }
      }
    ]
  },

  // ==================== 车队管理 ====================
  {
    path: '/fleet',
    component: () => import('@/layouts/MainLayout.vue'),
    redirect: '/fleet/zone',
    meta: { title: '车队管理', icon: 'UserFilled' },
    children: [
      {
        path: 'zone',
        name: 'FleetZone',
        component: () => import('@/views/fleet/Zone.vue'),
        meta: { title: '作业区管理', icon: 'OfficeBuilding' }
      },
      {
        path: 'driver',
        name: 'FleetDriverConfig',
        component: () => import('@/views/fleet/DriverConfig.vue'),
        meta: { title: '驾驶员配置', icon: 'User' }
      }
    ]
  },

  // ==================== 基础数据 ====================
  {
    path: '/base',
    component: () => import('@/layouts/MainLayout.vue'),
    redirect: '/base/team',
    meta: { title: '基础数据', icon: 'Folder' },
    children: [
      {
        path: 'team',
        name: 'BaseTeam',
        component: () => import('@/views/base/Team.vue'),
        meta: { title: '车队信息', icon: 'Box' }
      },
      {
        path: 'area',
        name: 'BaseArea',
        component: () => import('@/views/base/Area.vue'),
        meta: { title: '作业区', icon: 'Histogram' }
      }
    ]
  },

  // ==================== 规则管理 ====================
  {
    path: '/rule',
    component: () => import('@/layouts/MainLayout.vue'),
    redirect: '/rule/route',
    meta: { title: '规则管理', icon: 'Setting' },
    children: [
      {
        path: 'route',
        name: 'RuleRoute',
        component: () => import('@/views/rule/Route.vue'),
        meta: { title: '路线规则', icon: 'Connection' }
      },
      {
        path: 'load',
        name: 'RuleLoad',
        component: () => import('@/views/rule/Load.vue'),
        meta: { title: '车辆载重规则', icon: 'Box' }
      }
    ]
  },

  // ==================== 登录 ====================
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Index.vue'),
    meta: { title: '登录', hidden: true }
  },

  // ==================== 404 ====================
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue'),
    meta: { title: '页面不存在', hidden: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

const whiteList = ['/login', '/404']

router.beforeEach((to, _from, next) => {
  NProgress.start()
  const userStore = useUserStore()

  if (userStore.isLoggedIn) {
    if (to.path === '/login') {
      next('/dashboard/index')
      return
    }
    next()
    return
  }

  if (whiteList.includes(to.path)) {
    next()
    return
  }

  next({ path: '/login', query: { redirect: to.fullPath } })
})

router.afterEach(() => {
  NProgress.done()
})

export default router
