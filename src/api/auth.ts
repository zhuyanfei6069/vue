/**
 * 通用 API 封装
 */
import { http } from '@/utils/request'
import type { LoginResult, UserInfo } from '@/types/api'

/** 登录 */
export const login = (data: { username: string; password: string }) =>
  http.post<LoginResult>('/auth/login', data)

/** 获取用户信息 */
export const getUserProfile = () =>
  http.get<UserInfo>('/auth/profile')

/** 退出登录 */
export const logout = () =>
  http.post('/auth/logout')
