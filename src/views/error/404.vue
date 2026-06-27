<template>
  <div class="error-page">
    <div class="error-code">404</div>
    <h2>页面不存在</h2>
    <p>您访问的页面已被移除或暂时不可用。</p>
    <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/tokens.scss' as *;

.error-page {
  min-height: 100vh;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  background: $bg-page;
  padding: $space-12;
  text-align: center;

  .error-code {
    font-size: 96px;
    font-weight: $font-weight-bold;
    color: $color-primary;
    line-height: 1;
  }
  h2 { color: $text-primary; margin: $space-4 0 $space-2; }
  p  { color: $text-tertiary; margin: 0 0 $space-6; }
}
</style>
