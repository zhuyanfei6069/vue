<template>
  <PlaceholderPage title="物流点位" subtitle="物流点位基础信息维护"
    description="点位代码、所属单位、所属区域、点位名称。"
    :features="['新增/编辑/作废', '地图坐标录入', '点位类型分类', '批量导入']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
