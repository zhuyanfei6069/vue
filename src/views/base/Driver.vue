<template>
  <PlaceholderPage title="驾驶员" subtitle="驾驶员全量信息维护"
    description="工号、姓名、班别、所属车队、手机号码等。"
    :features="['新增/编辑/作废', '批量导入', '工号唯一性校验', '驾驶证到期提醒']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
