<template>
  <PlaceholderPage title="路线规则" subtitle="路线信息维护"
    description="路线编码、作业区、服务需求单位、车型、装运货物、起点/终点、往返距离、单程用时、类型（固定/临时）。"
    :features="['新增/编辑/作废', '路线地图可视化', '距离/用时计算', '临时路线审批']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
