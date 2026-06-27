<template>
  <PlaceholderPage title="车辆跟踪" subtitle="单车实时位置 + 轨迹回放"
    description="实时跟踪车辆位置、回放历史轨迹。"
    :features="['车辆实时定位（GPS/RTK 亚米级）', '轨迹回放', '速度/方向/状态实时显示']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
