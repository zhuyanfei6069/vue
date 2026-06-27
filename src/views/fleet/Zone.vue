<template>
  <PlaceholderPage title="作业区管理" subtitle="作业区人员、车辆、备用池管理"
    description="作业长/跟班班长对本作业区的人员、车辆、备用池进行配置和借调管理。"
    :features="[
      '驾驶员配置（工号/姓名/班别/状态）',
      '车辆配置（车号/车型/RFID/状态）',
      '借调/续借（单次≤1月，最多续借 2 次）',
      '备用池',
      '车辆状况查看（对接维修系统）'
    ]" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
