<template>
  <PlaceholderPage title="日运输计划" subtitle="编制、查看、审核日运输计划"
    description="日计划按物料+起运地+接收单位+接收地 × 每班的需求量编制，作为当天调度派车的依据。"
    :features="['按班次（早/中/晚）批量录入', '起运地/接收地联动', '审批/下发', '执行实绩对比']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
