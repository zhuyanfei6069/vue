<template>
  <PlaceholderPage title="车辆载重规则" subtitle="物料 × 车型 × 载重量规则"
    description="维护不同物料在不同车型下的载重规则。"
    :features="['按物料+车型配置载重', '载重上限校验', '超载告警']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
