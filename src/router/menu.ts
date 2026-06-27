import { routes } from '@/router'
import type { RouteRecordRaw } from 'vue-router'

export interface MenuItem {
  path: string
  title: string
  icon: string
  children?: MenuItem[]
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
        icon: (r.meta?.icon as string) || '',
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
        icon: (r.meta?.icon as string) || ''
      }
      if (parent) parent.children!.push(item)
      else menu.push(item)
    }
  }

  routes.forEach((r) => visit(r))
  return menu
}
