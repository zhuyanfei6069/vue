<template>
  <PlaceholderPage title="作业区" subtitle="作业区基础信息维护"
    description="维护作业区代码、作业名称、所属车队。"
    :features="['新增/编辑/作废', '所属车队关联', '作业长配置']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
