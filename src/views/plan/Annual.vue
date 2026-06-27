<template>
  <PlaceholderPage title="年度运输计划" subtitle="编制、查看、审核年度运输计划"
    description="年度计划按物料品名/规格/供应单位/接收单位 × 12 个月编制，作为年度运输资源配置指导依据。"
    :features="[
      '支持按物料+接收单位维度批量录入',
      '年度计划审核/下发流程',
      '对比月度计划实际完成率',
      '导出 Excel/打印'"
    ]" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
