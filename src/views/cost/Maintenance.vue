<template>
  <PlaceholderPage title="车辆维修费" subtitle="对接车辆维修系统，提取维修费用清单"
    description="按车辆/车型/日期维度汇总维修费用。"
    :features="['对接车辆维修系统接口', '多维度统计', '维修工时/材料费分类', '对账功能']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
