<template>
  <PlaceholderPage title="车队信息" subtitle="车队基础信息维护"
    description="维护车队代码、车队名称等基础信息。"
    :features="['新增/编辑/作废', '查询', '导出']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
