<template>
  <PlaceholderPage title="月度运输计划" subtitle="编制、查看、审核月度运输计划"
    description="月度计划按物料+供应单位+接收单位 × 每天的需求量编制，作为月度运输任务分配的依据。"
    :features="['按物料 × 接收单位批量录入', '与年度计划联动', '审批/下发流程', '导出 Excel/打印']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
