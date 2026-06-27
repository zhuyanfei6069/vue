<template>
  <div class="header flex-between">
    <div class="header-left">
      <el-button text @click="appStore.toggleSidebar">
        <el-icon size="20">
          <Fold v-if="!appStore.sidebarCollapsed" />
          <Expand v-else />
        </el-icon>
      </el-button>
    </div>
    <div class="header-right flex gap-4">
      <el-tooltip content="刷新">
        <el-button text @click="refresh">
          <el-icon size="18"><Refresh /></el-icon>
        </el-button>
      </el-tooltip>
      <el-tooltip content="全屏">
        <el-button text @click="toggleFullscreen">
          <el-icon size="18"><FullScreen /></el-icon>
        </el-button>
      </el-tooltip>
      <el-dropdown @command="onCommand">
        <div class="user-info">
          <el-avatar :size="28" class="user-avatar">
            {{ userStore.realName?.[0] || 'U' }}
          </el-avatar>
          <span class="user-name">{{ userStore.realName || '未登录' }}</span>
          <el-icon><ArrowDown /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="profile">个人信息</el-dropdown-item>
            <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import { useAppStore } from '@/stores/app'

const router = useRouter()
const userStore = useUserStore()
const appStore = useAppStore()

const refresh = () => {
  router.go(0)
}

const toggleFullscreen = () => {
  if (document.fullscreenElement) document.exitFullscreen()
  else document.documentElement.requestFullscreen()
}

const onCommand = async (cmd: string) => {
  if (cmd === 'logout') {
    await ElMessageBox.confirm('确定退出登录吗？', '提示', {
      type: 'warning', confirmButtonText: '退出', cancelButtonText: '取消'
    })
    userStore.logout()
    appStore.logout()
    ElMessage.success('已退出登录')
    router.push('/login')
  } else if (cmd === 'profile') {
    ElMessage.info('个人信息页面待开发')
  }
}
</script>

<style lang="scss" scoped>
@use '@/styles/tokens.scss' as *;

.header {
  height: 56px;
  padding: 0 $space-6;
}

.user-info {
  display: flex; align-items: center; gap: $space-2;
  cursor: pointer; padding: 0 $space-2;
  border-radius: $radius-base;
  &:hover { background: $bg-hover; }
}
.user-avatar {
  background: $color-primary !important;
  color: $text-inverse !important;
}
.user-name {
  font-size: $font-size-base;
  color: $text-primary;
}
</style>
