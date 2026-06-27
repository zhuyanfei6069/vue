/**
 * Mock 入口
 * 在 VITE_USE_MOCK=true 时由开发环境使用
 */
import { mockDashboard } from './dashboard'
import { mockDispatch } from './dispatch'

export default {
  dashboard: mockDashboard,
  dispatch: mockDispatch
}
