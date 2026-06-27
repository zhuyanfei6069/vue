/**
 * 基础数据 API 占位
 * 实际项目可按模块拆分
 */
import { http } from '@/utils/request'
import type { PageQuery, PageResult } from '@/types/api'

export const fetchBaseList = (module: string, query: PageQuery) =>
  http.get<PageResult>(`/base/${module}`, query)

export const saveBaseItem   = (module: string, data: any) => http.post(`/base/${module}`, data)
export const updateBaseItem = (module: string, id: string, data: any) => http.put(`/base/${module}/${id}`, data)
export const deleteBaseItem = (module: string, id: string) => http.delete(`/base/${module}/${id}`)
