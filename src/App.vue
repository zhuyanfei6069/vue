<template>
  <el-config-provider :locale="zhCn">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in">
        <keep-alive :include="cachedViews">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
<<<<<<< HEAD
import { computed } from 'vue'
=======
>>>>>>> 1081503 (feat: 物流执行系统 v1.1.0 规范化版本)
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const cachedViews = computed(() => appStore.cachedViews)
</script>

<style lang="scss" scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
