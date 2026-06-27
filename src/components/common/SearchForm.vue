<template>
  <el-card shadow="never" class="search-form">
    <el-form :model="model" :inline="inline" label-suffix=":" :label-width="labelWidth">
      <slot />
      <el-form-item class="search-form__actions">
        <el-button type="primary" :icon="Search" @click="onSearch">查询</el-button>
        <el-button :icon="RefreshLeft" @click="onReset">重置</el-button>
        <slot name="extra" />
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { Search, RefreshLeft } from '@element-plus/icons-vue'

const props = withDefaults(defineProps<{
  model: Record<string, any>
  inline?: boolean
  labelWidth?: string
}>(), {
  inline: true,
  labelWidth: '90px'
})

const emit = defineEmits<{
  search: []
  reset: []
}>()

const onSearch = () => emit('search')
const onReset = () => emit('reset')
</script>

<style lang="scss" scoped>
@use '@/styles/tokens.scss' as *;

.search-form {
  margin-bottom: $space-4;
  border-radius: $radius-md;
  :deep(.el-card__body) { padding: $space-4 $space-4 0; }
  :deep(.el-form-item) { margin-right: $space-4; margin-bottom: $space-4; }
  &__actions { margin-bottom: $space-4; }
}
</style>
