<template>
  <PlaceholderPage title="驾驶员配置" subtitle="作业区驾驶员增删改"
    description="作业长/跟班班长可在所属作业区添加、删除、修改驾驶员信息。"
    :features="['新增/编辑/删除驾驶员', '班组分配', '状态管理（在岗/休息/请假）', '批量导入']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
