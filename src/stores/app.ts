import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const sidebarCollapsed = ref<boolean>(
    localStorage.getItem('sidebar_collapsed') === 'true'
  )
  const cachedViews = ref<string[]>(['Dashboard'])

  const toggleSidebar = () => {
    sidebarCollapsed.value = !sidebarCollapsed.value
    localStorage.setItem('sidebar_collapsed', String(sidebarCollapsed.value))
  }

  const addCachedView = (name: string) => {
    if (!cachedViews.value.includes(name)) {
      cachedViews.value.push(name)
    }
  }

  const removeCachedView = (name: string) => {
    const i = cachedViews.value.indexOf(name)
    if (i > -1) cachedViews.value.splice(i, 1)
  }

  const logout = () => {
    cachedViews.value = ['Dashboard']
  }

  return {
    sidebarCollapsed, cachedViews,
    toggleSidebar, addCachedView, removeCachedView, logout
  }
})
