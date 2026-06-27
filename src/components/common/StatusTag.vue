<template>
  <el-tag :type="elType" effect="light" round :size="size">
    <el-icon v-if="icon" :size="12" class="status-icon"><component :is="icon" /></el-icon>
    {{ label }}
  </el-tag>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  status: string | number
  /** 状态字典映射（可选） */
  dict?: Record<string, { label: string; type: string; icon?: string }>
  size?: 'small' | 'default' | 'large'
}>(), {
  size: 'default'
})

const map: Record<string, { label: string; type: string; icon?: string }> = {
  // 物流委托计划
  pending:  { label: '待接收', type: 'danger', icon: 'Warning' },
  running:  { label: '执行中', type: 'warning', icon: 'Loading' },
  finished: { label: '已完成', type: 'success', icon: 'CircleCheck' },
  rejected: { label: '已拒收', type: 'info', icon: 'CircleClose' },
  // 工程车
  drafting:    { label: '草稿', type: 'info' },
  submitted:   { label: '已提交', type: 'warning' },
  approved:    { label: '已审核', type: 'success' },
  outsourced:  { label: '已委外', type: 'warning' },
  settling:    { label: '结算中', type: 'warning' },
  settled:     { label: '已结算', type: 'success' },
  voided:      { label: '已作废', type: 'info' }
}

const cfg = computed(() => props.dict?.[String(props.status)] || map[String(props.status)] || { label: String(props.status), type: 'info' })
const elType = computed(() => cfg.value.type as any)
const label = computed(() => cfg.value.label)
const icon = computed(() => cfg.value.icon)
</script>

<style lang="scss" scoped>
.status-icon { margin-right: 2px; vertical-align: -1px; }
</style>
