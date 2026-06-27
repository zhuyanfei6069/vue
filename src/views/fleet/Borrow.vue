<template>
  <PlaceholderPage title="车辆借调" subtitle="跨作业区车辆借调与续借"
    description="作业长可向其他车队借调车辆，填借调起止日期，到期可续借。"
    :features="['借调申请（发起→对方同意→借用中）', '到期前提醒', '续借申请（最多 2 次）', '逾期自动标记', '借调历史']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
