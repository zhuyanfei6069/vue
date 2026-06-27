<template>
  <PlaceholderPage title="工程车使用规则" subtitle="工程车租赁商、单价、合同规则"
    description="维护工程车使用规则，包括租赁商、单价、合同编号等。"
    :features="[
      '合同编号/承包方/用车类型/单价',
      '计算规则（小时/吨）',
      '有效期管理',
      '上线/下线状态',
      '规则版本管理'
    ]" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
