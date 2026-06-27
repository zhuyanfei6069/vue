<template>
  <el-breadcrumb separator="/" class="bc">
    <el-breadcrumb-item v-for="(item, idx) in items" :key="idx" :to="idx < items.length - 1 ? item.path : ''">
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, type RouteLocationMatched } from 'vue-router'

const route = useRoute()

const items = computed(() => {
  const list: { title: string; path: string }[] = [{ title: '首页', path: '/dashboard' }]
  route.matched.forEach((m: RouteLocationMatched) => {
    if (m.meta?.title && m.path && m.path !== '/') {
      list.push({ title: m.meta.title as string, path: m.path })
    }
  })
  return list
})
</script>

<style lang="scss" scoped>
@use '@/styles/tokens.scss' as *;

.bc {
  font-size: $font-size-sm;
  :deep(.el-breadcrumb__inner) { color: $text-tertiary; font-weight: 400; }
  :deep(.el-breadcrumb__item:last-child .el-breadcrumb__inner) {
    color: $text-primary; font-weight: 500;
  }
}
</style>
