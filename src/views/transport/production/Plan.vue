<template>
  <div class="page-container">
    <PageHeader title="物流委托计划" subtitle="各业务单位发起的运输需求计划" />

    <SearchForm v-model="query" @search="onSearch" @reset="onReset">
      <el-form-item label="委托单号">
        <el-input v-model="query.planNo" placeholder="请输入" clearable />
      </el-form-item>
      <el-form-item label="物料">
        <el-input v-model="query.material" placeholder="请输入" clearable />
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="query.status" placeholder="全部" clearable>
          <el-option label="待接收" value="pending" />
          <el-option label="执行中" value="running" />
          <el-option label="已完成" value="finished" />
          <el-option label="已拒收" value="rejected" />
        </el-select>
      </el-form-item>
      <el-form-item label="提交日期">
        <el-date-picker v-model="query.dateRange" type="daterange" range-separator="至" start-placeholder="开始" end-placeholder="结束" />
      </el-form-item>
    </SearchForm>

    <DataTable :data="filteredData" :total="filteredData.length">
      <el-table-column prop="planNo" label="委托单号" width="160" />
      <el-table-column prop="dept" label="委托部门" width="120" />
      <el-table-column prop="material" label="物资名称" width="120" />
      <el-table-column prop="spec" label="物资规格" width="100" />
      <el-table-column prop="plannedTons" label="计划吨位" width="100" align="right" />
      <el-table-column prop="from" label="装点" width="100" />
      <el-table-column prop="to" label="卸点" width="100" />
      <el-table-column prop="status" label="状态" width="100">
        <template #default="{ row }">
          <StatusTag :status="row.status" />
        </template>
      </el-table-column>
      <el-table-column prop="submitTime" label="提交时间" width="160" />
      <el-table-column label="操作" width="160" fixed="right">
        <template #default>
          <el-button text type="primary" size="small">详情</el-button>
          <el-button text type="primary" size="small">派车</el-button>
        </template>
      </el-table-column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import SearchForm from '@/components/common/SearchForm.vue'
import DataTable from '@/components/common/DataTable.vue'
import StatusTag from '@/components/common/StatusTag.vue'
import { mockDispatch } from '@/mock/dispatch'

const query = ref<any>({ planNo: '', material: '', status: '', dateRange: null })

const allData = ref(mockDispatch.plans)
const filteredData = computed(() => {
  return allData.value.filter((p: any) => {
    if (query.value.planNo && !p.planNo.includes(query.value.planNo)) return false
    if (query.value.material && !p.material.includes(query.value.material)) return false
    if (query.value.status && p.status !== query.value.status) return false
    return true
  })
})

const onSearch = () => {}
const onReset = () => { query.value = { planNo: '', material: '', status: '', dateRange: null } }
</script>
