<template>
  <div class="page-container">
    <PageHeader :title="title" :subtitle="subtitle">
      <template #actions>
        <slot name="actions" />
      </template>
    </PageHeader>
    <div class="placeholder">
      <el-icon size="48" color="#C9CDE8"><DocumentRemove /></el-icon>
      <h3>{{ title }}页面</h3>
      <p>{{ description }}</p>
      <el-tag type="info" size="small" effect="plain">骨架版本 · 待业务对接</el-tag>
      <div v-if="features && features.length" class="features">
        <p class="features-title">本页主要功能点：</p>
        <ul>
          <li v-for="(f, i) in features" :key="i">{{ f }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DocumentRemove } from '@element-plus/icons-vue'
import PageHeader from '@/components/common/PageHeader.vue'

withDefaults(defineProps<{
  title: string
  subtitle?: string
  description?: string
  features?: string[]
}>(), {
  description: '此页面骨架已搭好，请按 PRD 需求继续开发业务逻辑。',
  features: () => []
})
</script>

<style lang="scss" scoped>
@use '@/styles/tokens.scss' as *;

.placeholder {
  background: $bg-container;
  border-radius: $radius-md;
  padding: $space-12 $space-6;
  text-align: center;
  box-shadow: $shadow-xs;

  h3 { font-size: $font-size-lg; color: $text-primary; margin: $space-4 0 $space-2; }
  p  { color: $text-tertiary; font-size: $font-size-base; margin: 0 0 $space-3; }
}

.features {
  max-width: 600px;
  margin: $space-6 auto 0;
  text-align: left;
  background: $bg-page;
  border-radius: $radius-base;
  padding: $space-4 $space-6;

  .features-title { color: $text-secondary; font-size: $font-size-sm; margin: 0 0 $space-2; }
  ul { margin: 0; padding-left: $space-5; color: $text-secondary; font-size: $font-size-sm; line-height: 1.8; }
}
</style>
