import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserRole } from '@/utils/auth'

/**
 * 角色可访问菜单的动态路由权限控制
 */
export const usePermissionStore = defineStore('permission', () => {
  const roles = ref<UserRole[]>([])

  const setRoles = (newRoles: UserRole[]) => {
    roles.value = newRoles
  }

  /** 判断是否有任一角色权限 */
  const hasAnyRole = (allowedRoles: UserRole[]): boolean => {
    if (allowedRoles.length === 0) return true
    return allowedRoles.some((r) => roles.value.includes(r))
  }

  return { roles, setRoles, hasAnyRole }
})
