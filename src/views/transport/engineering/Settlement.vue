<template>
  <PlaceholderPage title="工程车结算单" subtitle="费用结算、审定、发票入账"
    description="账务部门出具结算单，完成工程车使用费结算。"
    :features="[
      '送审金额/审定金额/发票入账金额',
      'EAS 系统单据/凭证关联',
      '税率、开票通知单',
      '结算单审定流程'"
    ]" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
