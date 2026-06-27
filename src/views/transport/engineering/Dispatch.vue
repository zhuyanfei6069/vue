<template>
  <PlaceholderPage title="工程车派工单" subtitle="派工单下发、执行跟踪"
    description="机动车队根据申请单生成派工单，下发司机执行。"
    :features="[
      '内/外部派车判定',
      '派车单价（元/小时）',
      '租赁商/合同编号关联（已统一为“租赁商”）',
      '车辆证件+驾驶员证有效期校验',
      '派工单打印/导出'
    ]" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
