<template>
  <div class="page-container">
    <PageHeader title="执行跟踪" subtitle="实时跟踪物流执行计划进度" />
    <DataTable :data="rows" :total="rows.length" :show-pagination="false">
      <el-table-column prop="execNo" label="执行单号" width="160" />
      <el-table-column prop="vehicle" label="车号" width="100" />
      <el-table-column prop="driver" label="驾驶员" width="100" />
      <el-table-column prop="material" label="物料" width="120" />
      <el-table-column prop="from" label="装点" width="100" />
      <el-table-column prop="to" label="卸点" width="100" />
      <el-table-column label="进度" width="200">
        <template #default="{ row }">
          <el-progress :percentage="row.progress" :status="row.progress === 100 ? 'success' : ''" />
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="100">
        <template #default="{ row }">
          <StatusTag :status="row.status" />
        </template>
      </el-table-column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import DataTable from '@/components/common/DataTable.vue'
import StatusTag from '@/components/common/StatusTag.vue'

const rows = ref([
  { execNo: 'EX20260627001', vehicle: '苏E-A1234', driver: '张明', material: '20mm螺纹钢', from: '炼钢1号', to: '轧钢A区', progress: 78, status: 'running' },
  { execNo: 'EX20260627002', vehicle: '苏E-B5678', driver: '李强', material: '盘螺Φ12', from: '轧钢B区', to: '成品库1', progress: 45, status: 'running' },
  { execNo: 'EX20260627003', vehicle: '苏E-C9012', driver: '王伟', material: '钢坯Q235B', from: '炼钢2号', to: '轧钢C区', progress: 100, status: 'finished' }
])
</script>
