<template>
  <PlaceholderPage title="计划完成率" subtitle="计划完成情况统计分析"
    description="公式：已完成吨位 / 计划吨位；含直送率、按时率、超期率。"
    :features="['计划完成率', '直送率（目标 80%）', '按时率', '超期率', '日/周/月报表']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
