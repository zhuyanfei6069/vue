/**
 * 通用 API 响应结构
 */
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
}

/** 分页响应 */
export interface PageResult<T = any> {
  list: T[]
  total: number
  page: number
  size: number
}

/** 分页查询参数 */
export interface PageQuery {
  page?: number
  size?: number
  keyword?: string
  [key: string]: any
}

/** 用户信息 */
export interface UserInfo {
  id: string
  username: string
  realName: string
  role: string
  team?: string
  phone?: string
  email?: string
  avatar?: string
}

/** 登录响应 */
export interface LoginResult {
  token: string
  user: UserInfo
}
