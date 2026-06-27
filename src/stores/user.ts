import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { http } from '@/utils/request'
import {
  getToken, setToken, removeToken,
  getUserInfo, setUserInfo, removeUserInfo
} from '@/utils/auth'

export const useUserStore = defineStore('user', () => {
  const token = ref<string>(getToken() || '')
  const userInfo = ref<any>(getUserInfo() || null)

  const isLoggedIn = computed(() => !!token.value)
  const role = computed(() => userInfo.value?.role || '')
  const realName = computed(() => userInfo.value?.realName || userInfo.value?.username || '')

  /** 登录 */
  const login = async (payload: { username: string; password: string }) => {
    const res = await http.post('/auth/login', payload)
    token.value = res.data.token
    userInfo.value = res.data.user
    setToken(res.data.token)
    setUserInfo(res.data.user)
    return res
  }

  /** 登出 */
  const logout = () => {
    token.value = ''
    userInfo.value = null
    removeToken()
    removeUserInfo()
  }

  /** 获取用户信息 */
  const fetchUserInfo = async () => {
    const res = await http.get('/auth/profile')
    userInfo.value = res.data
    setUserInfo(res.data)
    return res.data
  }

  return {
    token, userInfo, isLoggedIn, role, realName,
    login, logout, fetchUserInfo
  }
})
