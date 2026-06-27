<template>
  <PlaceholderPage title="加油记录" subtitle="车辆加油信息登记、统计与分析"
    description="对接加油站实时油价，按车辆/车型/日期维度汇总。"
    :features="[
      '加油信息列表/详情/录入',
      '合计金额 = 数量 × 单价（自动计算）',
      '与加油站系统对账',
      '与司机 APP 登记数据三方核对',
      '单车油耗/百公里油耗计算'
    ]" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
