<template>
  <PlaceholderPage title="物流综合概览" subtitle="厂区物流资源分布与计划执行情况"
    description="集成车辆实时位置、委托计划进度、厂区地图、资源统计图表、异常警示。"
    :features="[
      '厂区地图 + 车辆实时位置',
      '委托计划甘特图',
      '资源统计图表（车/驾驶员）',
      '7 类异常检测（长时间未动/偏离路线/拥堵/超速/疲劳等）',
      'GCJ-02 坐标系 / 轨迹 90 天'
    ]" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
