<template>
  <el-container class="main-layout">
    <el-aside :width="sidebarCollapsed ? '64px' : '220px'" class="main-aside">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header class="main-header">
        <Header />
      </el-header>
      <el-main class="main-body">
        <Breadcrumb class="breadcrumb" />
        <router-view v-slot="{ Component, route }">
          <transition name="fade-slide" mode="out-in">
            <keep-alive :include="cachedViews">
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Breadcrumb from './components/Breadcrumb.vue'

const appStore = useAppStore()
const sidebarCollapsed = computed(() => appStore.sidebarCollapsed)
const cachedViews = computed(() => appStore.cachedViews)
</script>

<style lang="scss" scoped>
@use '@/styles/tokens.scss' as *;

.main-layout {
  height: 100vh;
}

.main-aside {
  background: $bg-container;
  border-right: 1px solid $border-light;
  transition: width 0.25s ease;
  overflow: hidden;
}

.main-header {
  background: $bg-container;
  border-bottom: 1px solid $border-light;
  padding: 0;
  height: 56px !important;
}

.main-body {
  background: $bg-page;
  padding: 0;
  overflow-y: auto;
}

.breadcrumb {
  padding: $space-4 $space-6 0;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease;
}
.fade-slide-enter-from { opacity: 0; transform: translateY(8px); }
.fade-slide-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
