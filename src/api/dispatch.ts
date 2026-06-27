/**
 * 调度相关 API
 */
import { http } from '@/utils/request'
import type { DispatchPlan, DispatchExecution } from '@/types/dispatch'
import type { PageQuery, PageResult } from '@/types/api'

/** 物流委托计划分页 */
export const fetchPlanList = (query: PageQuery) =>
  http.get<PageResult<DispatchPlan>>('/dispatch/plan', query)

/** 接收/拒收计划 */
export const receivePlan = (planNo: string) => http.post(`/dispatch/plan/${planNo}/receive`)
export const rejectPlan  = (planNo: string, reason: string) => http.post(`/dispatch/plan/${planNo}/reject`, { reason })

/** 派车 */
export const dispatchVehicle = (data: Partial<DispatchExecution>) => http.post('/dispatch/execution', data)

/** 物流执行计划分页 */
export const fetchExecutionList = (query: PageQuery) =>
  http.get<PageResult<DispatchExecution>>('/dispatch/execution', query)
