<template>
  <PlaceholderPage title="工程车使用费" subtitle="自动计算 + 抛送成本系统"
    description="根据定价规则（元/小时、元/吨）及确认工时自动计算费用，抛送 EAS。"
    :features="[
      '计算公式：派车单价 × 实际工时',
      '引用工程车使用规则',
      '每月 25 日 23:00 推送 EAS',
      '退改需红冲',
      '费用资产编号（已统一为该字段）关联'"
    ]" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
