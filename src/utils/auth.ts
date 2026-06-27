/**
 * Token 存储
 */
const TOKEN_KEY = 'logistics_token'
const USER_KEY = 'logistics_user'

export const getToken = (): string | null => localStorage.getItem(TOKEN_KEY)
export const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token)
export const removeToken = () => localStorage.removeItem(TOKEN_KEY)

export const getUserInfo = (): any | null => {
  const raw = localStorage.getItem(USER_KEY)
  return raw ? JSON.parse(raw) : null
}
export const setUserInfo = (user: any) =>
  localStorage.setItem(USER_KEY, JSON.stringify(user))
export const removeUserInfo = () => localStorage.removeItem(USER_KEY)

/**
 * 角色权限判断
 */
export type UserRole =
  | 'admin'
  | 'transport_manager'   // 运输部管理人员
  | 'operation_chief'     // 作业长
  | 'operation_chief_motor' // 机动作业长
  | 'shift_leader'        // 跟班班长
  | 'driver'              // 司机
  | 'dispatcher'          // 委托部门
  | 'finance'             // 账务部门
  | 'safety'              // 安环部门
  | 'measurement'         // 计量部门
  | 'maintenance'         // 运输处运维

export const hasRole = (user: any, roles: UserRole[]): boolean => {
  if (!user?.role) return false
  return roles.includes(user.role) || user.role === 'admin'
}
