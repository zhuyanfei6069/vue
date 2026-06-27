<template>
  <PlaceholderPage title="车辆" subtitle="车辆全量信息维护"
    description="车号、车型、车辆种类（厂内/厂外）、排放标准、RFID 卡号等。"
    :features="['新增/编辑/作废', '批量导入', 'RFID 绑定', '证件有效期校验']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
