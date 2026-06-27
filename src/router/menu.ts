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
 * v1.1.3 兜底映射
 * 路由里如果还有旧图标名（DataAnalysis / Van / Map / Money / Files），
 * 这里自动保底到 ElementPlus 真实存在的官方图标。
 */
const ICON_FALLBACK: Record<string, string> = {
  DataAnalysis: 'DataLine',
  Van: 'Promotion',
  Map: 'LocationFilled',
  Money: 'Wallet',
  Files: 'Folder',
}

/**
 * 把路由 meta.icon（字符串）映射成 ElementPlus 图标组件
 * 三级容错：
 *  1. 字符串为空 → Minus 短横线
 *  2. 字符串不在 ElementPlus 中 → 走 ICON_FALLBACK 映射表
 *  3. 终极兜底 → Minus
 */
function resolveIcon(name: string) {
  if (!name) return ElementPlusIconsVue.Minus

  const direct = (ElementPlusIconsVue as any)[name]
  if (direct) return direct

  const fallback = ICON_FALLBACK[name]
  if (fallback) {
    const mapped = (ElementPlusIconsVue as any)[fallback]
    if (mapped) return mapped
  }

  return ElementPlusIconsVue.Minus
}

/**
 * 从 routes 中提取菜单树（跳过登录/404/隐藏项）
 * 一级 + 二级菜单都正确处理
 */
export function buildMenu(): MenuItem[] {
  const menu: MenuItem[] = []

  const visit = (r: RouteRecordRaw, parent?: MenuItem) => {
    if (r.meta?.hidden) return

    const item: MenuItem = {
      path: r.path.startsWith('/') ? r.path : (parent ? `${parent.path}/${r.path}` : `/${r.path}`),
      title: (r.meta?.title as string) || (r.name as string) || '',
      icon: resolveIcon((r.meta?.icon as string) || ''),
      children: []
    }

    if (r.children && r.children.length > 0) {
      r.children.forEach((c) => visit(c, item))
      if (item.children!.length > 0) {
        if (parent) parent.children!.push(item)
        else menu.push(item)
      } else if (!parent) {
        // 没有子菜单项（都被 hidden）就不显示这个一级
        menu.push(item)
      }
    } else {
      // 叶子节点
      if (parent) parent.children!.push(item)
      else menu.push(item)
    }
  }

  routes.forEach((r) => visit(r))
  return menu
}
