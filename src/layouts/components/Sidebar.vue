<template>
  <div class="sidebar">
    <div class="logo">
      <div class="logo-icon">L</div>
      <span v-show="!collapsed" class="logo-text">物流执行系统</span>
    </div>
    <el-scrollbar class="menu-scroll">
      <el-menu
        :default-active="activeMenu"
        :collapse="collapsed"
        :collapse-transition="false"
        background-color="transparent"
        text-color="#626789"
        active-text-color="#6F63FF"
        router
        unique-opened
      >
        <template v-for="item in menu" :key="item.path">
          <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
            <template #title>
              <el-icon><component :is="item.icon" /></el-icon>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item
              v-for="child in item.children"
              :key="child.path"
              :index="child.path"
            >
              <el-icon><component :is="child.icon || 'Minus'" /></el-icon>
              <template #title>{{ child.title }}</template>
            </el-menu-item>
          </el-sub-menu>

          <el-menu-item v-else-if="item.children && item.children.length === 1" :index="item.children[0].path">
            <el-icon><component :is="item.icon" /></el-icon>
            <template #title>{{ item.children[0].title }}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { buildMenu } from '@/router/menu'

const route = useRoute()
const appStore = useAppStore()

const collapsed = computed(() => appStore.sidebarCollapsed)
const menu = computed(() => buildMenu())
const activeMenu = computed(() => route.path)
</script>

<style lang="scss" scoped>
@use '@/styles/tokens.scss' as *;

.sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.logo {
  height: 56px;
  display: flex;
  align-items: center;
  gap: $space-3;
  padding: 0 $space-4;
  border-bottom: 1px solid $border-light;

  .logo-icon {
    width: 32px; height: 32px;
    border-radius: $radius-base;
    background: $color-primary;
    color: $text-inverse;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 18px;
    flex-shrink: 0;
  }
  .logo-text {
    font-size: $font-size-md;
    font-weight: $font-weight-semibold;
    color: $text-primary;
    white-space: nowrap;
  }
}

.menu-scroll { flex: 1; }

:deep(.el-menu) { border-right: none; }
:deep(.el-menu-item.is-active) {
  background: $color-primary-softer !important;
  color: $color-primary !important;
}
</style>
