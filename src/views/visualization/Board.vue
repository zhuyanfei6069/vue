<template>
  <PlaceholderPage title="管理看板" subtitle="今日运单 + 资源状态 + 月度统计"
    description="对接每日早调会 KPI 管理看板。"
    :features="[
      '今日运单（堆叠条形图）',
      '厂区作业资源地图',
      '委托计划执行进度',
      '月运单量/加油加气量',
      '人员/车辆状态饼图'"
    ]" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
