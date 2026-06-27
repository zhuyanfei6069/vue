<template>
  <PlaceholderPage title="加气记录" subtitle="车辆加气信息登记、统计与分析"
    description="按车辆/车型/日期维度汇总车辆加气量与费用。"
    :features="['加气信息列表/录入', '加气量统计', '单车加气成本分析']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
