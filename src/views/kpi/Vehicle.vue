<template>
  <PlaceholderPage title="车辆利用率" subtitle="车辆利用率多维度分析"
    description="公式：在线时长 / 班次总时长；按车队/车型/作业区/时间段分析。"
    :features="['在线时长统计', '班次利用率', '多维度对比', '低利用率车辆告警']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
