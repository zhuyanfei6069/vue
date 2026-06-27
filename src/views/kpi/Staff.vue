<template>
  <PlaceholderPage title="人员绩效" subtitle="驾驶员绩效多维度分析"
    description="加权模型：运量 40% + 完成率 30% + 服务 20% + 安全 10%。"
    :features="['人员绩效评分', '运量排名', '完成率排名', '服务评价', '安全违规记录', '绩效排名榜']" />
</template>
<script setup lang="ts">
import PlaceholderPage from '@/components/common/PlaceholderPage.vue'
</script>
