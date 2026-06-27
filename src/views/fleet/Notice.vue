<template>
  <PlaceholderPage title="通知下发" subtitle="向作业区驾驶员发送通知"
    description="作业长/跟班班长向本作业区驾驶员下发通知，APP 端接收。"
    :features="['按作业区/按人下发', '通知类型（检修/道路/临时任务）', 'APP 推送 + 短信', '已读回执', '必读率统计']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
