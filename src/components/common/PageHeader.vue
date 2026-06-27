<template>
  <div class="page-header">
    <div class="page-header__main">
      <div class="page-header__title-area">
        <h2 class="page-header__title">{{ title }}</h2>
        <p v-if="subtitle" class="page-header__subtitle">{{ subtitle }}</p>
      </div>
      <div class="page-header__actions">
        <slot name="actions" />
      </div>
    </div>
    <div v-if="$slots.extra" class="page-header__extra">
      <slot name="extra" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<style lang="scss" scoped>
@use '@/styles/tokens.scss' as *;

.page-header {
  background: $bg-container;
  border-radius: $radius-md;
  padding: $space-5 $space-6;
  margin-bottom: $space-4;
  box-shadow: $shadow-xs;

  &__main {
    display: flex; align-items: center; justify-content: space-between;
    gap: $space-4;
  }
  &__title {
    font-size: $font-size-xl;
    font-weight: $font-weight-semibold;
    color: $text-primary;
    margin: 0;
  }
  &__subtitle {
    font-size: $font-size-sm;
    color: $text-tertiary;
    margin: $space-1 0 0;
  }
  &__extra {
    margin-top: $space-4;
  }
}
</style>
