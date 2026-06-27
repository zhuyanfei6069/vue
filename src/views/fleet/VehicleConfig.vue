<template>
  <PlaceholderPage title="车辆配置" subtitle="作业区车辆增删改"
    description="作业长/跟班班长可在所属作业区添加、删除、修改车辆信息。"
    :features="['新增/编辑/删除车辆', 'RFID 绑定', '排放标准', '排放/维修/备用状态', '证件到期前 30 天提醒']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
