<template>
  <PlaceholderPage title="驾驶绩效工资规则" subtitle="驾驶员绩效工资计算规则"
    description="支持车次价 / 物料单价×吨位两种结算方式。"
    :features="[
      '计算类型：车次价 / 吨位价',
      '货物/供货/收货单位/堆场 × 产量定额',
      '上下班时间配置',
      '上线/下线状态',
      '规则版本管理'
    ]" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
