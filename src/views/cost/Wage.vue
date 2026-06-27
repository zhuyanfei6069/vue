<template>
  <PlaceholderPage title="驾驶员产量工资" subtitle="在线核算与确认"
    description="根据物流执行实绩（车次价或物料单价×吨位）核算驾驶员产量工资。"
    :features="[
      '结算方式：车次价 / 物料单价 × 吨位',
      '引用绩效工资规则',
      '产量定额自动匹配',
      '人工复核 + 自动核算',
      '批量导出工资表'
    ]" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
