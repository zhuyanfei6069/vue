<template>
  <el-card shadow="never" class="data-table">
    <div v-if="title || $slots.toolbar" class="data-table__toolbar">
      <h3 v-if="title" class="data-table__title">{{ title }}</h3>
      <div class="flex-1"><slot name="toolbar" /></div>
      <div class="data-table__actions"><slot name="actions" /></div>
    </div>
    <el-table
      v-loading="loading"
      :data="data"
      :border="border"
      stripe
      :height="height"
      :row-key="rowKey"
      :default-sort="defaultSort"
      @selection-change="onSelection"
    >
      <el-table-column v-if="selectable" type="selection" width="48" />
      <el-table-column v-if="showIndex" type="index" label="#" width="56" />
      <slot />
    </el-table>
    <div v-if="showPagination" class="data-table__pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="total"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        background
        @size-change="emit('page-change', { page: currentPage, size: pageSize })"
        @current-change="emit('page-change', { page: currentPage, size: pageSize })"
      />
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  data: any[]
  total?: number
  loading?: boolean
  title?: string
  border?: boolean
  height?: string | number
  rowKey?: string
  selectable?: boolean
  showIndex?: boolean
  showPagination?: boolean
  page?: number
  size?: number
  defaultSort?: { prop: string; order: 'ascending' | 'descending' }
}>(), {
  total: 0, loading: false, border: true,
  selectable: false, showIndex: true, showPagination: true,
  page: 1, size: 20
})

const emit = defineEmits<{
  'page-change': [{ page: number; size: number }]
  'selection-change': [any[]]
}>()

const currentPage = ref(props.page)
const pageSize = ref(props.size)

watch(() => props.page, (v) => { currentPage.value = v })
watch(() => props.size, (v) => { pageSize.value = v })

const onSelection = (rows: any[]) => emit('selection-change', rows)
</script>

<style lang="scss" scoped>
@use '@/styles/tokens.scss' as *;

.data-table {
  border-radius: $radius-md;
  :deep(.el-card__body) { padding: $space-4; }
  &__toolbar {
    display: flex; align-items: center; gap: $space-3;
    margin-bottom: $space-4;
  }
  &__title {
    font-size: $font-size-md;
    font-weight: $font-weight-medium;
    color: $text-primary;
    margin: 0;
  }
  &__pagination {
    margin-top: $space-4;
    display: flex; justify-content: flex-end;
  }
}
</style>
