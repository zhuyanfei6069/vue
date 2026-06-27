<template>
  <PlaceholderPage title="工程车申请单" subtitle="业务单位用车申请、审核、查询"
    description="业务单位填写用车申请单 → OA 审核 → 机动车队接收并判断委外。"
    :features="[
      '申请单填写（用车类别/紧急程度/工时/项目等 22 个字段）',
      'OA 两级审核流程（条线主管 → 事业部领导）',
      '委外判断',
      '申请单状态实时跟踪'
    ]" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
