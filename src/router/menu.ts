import { routes } from '@/router'
import type { RouteRecordRaw } from 'vue-router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

/**
 * 菜单项
 *  - icon 是组件对象
 *  - 实际渲染时由 resolveIcon 统一转换
 */
export interface MenuItem {
  path: string
  title: string
  icon: any
  children?: MenuItem[]
}

/**
 * Element Plus v2.3.1 真实图标全量保底映射
 *
 * 路由里写的 meta.icon 如果是 Element Plus 不存在的旧名字，
 * 这里会自动映射到最接近的官方图标，避免空白方块。
 */
const ICON_FALLBACK: Record<string, string> = {
  // 工作台（DataAnalysis 不存在 → 用 DataLine）
  DataAnalysis: 'DataLine',
  // 计划（Document 存在，保留）
  Document: 'Document',
  // 运输管理·生产用车（Van 不存在 → Promotion）
  Van: 'Promotion',
  // 运输管理·工程用车（Tools 存在，保留）
  Tools: 'Tools',
  // 燃料消耗（TakeawayBox 存在，保留）
  TakeawayBox: 'TakeawayBox',
  // 物流可视化（Map 不存在 → LocationFilled）
  Map: 'LocationFilled',
  // 费用归集（Money 不存在 → Wallet）
  Money: 'Wallet',
  // KPI 指标分析（TrendCharts 存在，保留）
  TrendCharts: 'TrendCharts',
  // 车队管理（UserFilled 存在，保留）
  UserFilled: 'UserFilled',
  // 基础数据（Files 不存在 → Folder）
  Files: 'Folder',
  // 规则管理（Setting 存在，保留）
  Setting: 'Setting',
}

/**
 * 把路由 meta.icon（字符串）映射成 ElementPlus 图标组件
 * 三级容错：
 *  1. 字符串为空 → Minus 短横线
 *  2. 字符串不在 ElementPlus 中 → 走 ICON_FALLBACK 映射表
 *  3. 映射表里也找不到 → 还是 Minus
 */
function resolveIcon(name: string) {
  if (!name) return ElementPlusIconsVue.Minus

  // 直接命中
  const direct = (ElementPlusIconsVue as any)[name]
  if (direct) return direct

  // 走保底映射
  const fallback = ICON_FALLBACK[name] || 'Menu'
  const mapped = (ElementPlusIconsVue as any)[fallback]
  if (mapped) return mapped

  // 终极兜底
  return ElementPlusIconsVue.Minus
}

/**
 * 从 routes 中提取菜单树（跳过登录/404/隐藏项）
 */
export function buildMenu(): MenuItem[] {
  const menu: MenuItem[] = []

  const visit = (r: RouteRecordRaw, parent?: MenuItem) => {
    if (r.meta?.hidden) return
    if (r.children && r.children.length > 0) {
      const item: MenuItem = {
        path: r.path.startsWith('/') ? r.path : (parent ? `${parent.path}/${r.path}` : `/${r.path}`),
        title: (r.meta?.title as string) || (r.name as string) || '',
        icon: resolveIcon((r.meta?.icon as string) || ''),
        children: []
      }
      r.children.forEach((c) => visit(c, item))
      if (item.children!.length > 0) {
        if (parent) parent.children!.push(item)
        else menu.push(item)
      }
    } else {
      const item: MenuItem = {
        path: r.path.startsWith('/') ? r.path : (parent ? `${parent.path}/${r.path}` : `/${r.path}`),
        title: (r.meta?.title as string) || (r.name as string) || '',
        icon: resolveIcon((r.meta?.icon as string) || '')
      }
      if (parent) parent.children!.push(item)
      else menu.push(item)
    }
  }

  routes.forEach((r) => visit(r))
  return menu
}
