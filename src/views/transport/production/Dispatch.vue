<template>
  <div class="page-container">
    <PageHeader title="作业区调度平台" subtitle="物流委托计划接收 + 派车 + 资源调度">
      <template #actions>
        <el-button :icon="Refresh">刷新</el-button>
        <el-button type="primary" :icon="Position">智能派车</el-button>
      </template>
    </PageHeader>

    <!-- 资源统计面板 -->
    <el-row :gutter="12" class="stat-row">
      <el-col v-for="s in resourceStats" :key="s.label" :xs="12" :sm="6">
        <div class="res-card">
          <div class="res-card__label">{{ s.label }}</div>
          <div class="res-card__value">{{ s.value }}</div>
          <div class="res-card__sub">{{ s.sub }}</div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="12">
      <!-- 左侧：物流委托计划 -->
      <el-col :xs="24" :lg="14">
        <DataTable title="物流委托计划" :data="plans" :show-pagination="false">
          <el-table-column prop="planNo" label="委托单号" width="140" />
          <el-table-column prop="material" label="物料" width="120" />
          <el-table-column prop="plannedTons" label="计划吨位" width="100" align="right" />
          <el-table-column prop="finishedTons" label="已完成" width="100" align="right" />
          <el-table-column prop="from" label="装点" width="100" />
          <el-table-column prop="to" label="卸点" width="100" />
          <el-table-column prop="status" label="状态" width="90">
            <template #default="{ row }">
              <StatusTag :status="row.status" />
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200" fixed="right">
            <template #default>
              <el-button text type="primary" size="small">接收</el-button>
              <el-button text type="primary" size="small">派车</el-button>
              <el-button text type="danger" size="small">拒收</el-button>
            </template>
          </el-table-column>
        </DataTable>
      </el-col>

      <!-- 右侧：资源池 -->
      <el-col :xs="24" :lg="10">
        <el-card shadow="never" class="pool-card">
          <template #header>
            <span class="card-title">空闲驾驶员</span>
          </template>
          <div class="pool-list">
            <div v-for="d in drivers" :key="d.id" class="pool-item">
              <el-avatar :size="32" class="avatar">{{ d.name[0] }}</el-avatar>
              <div class="pool-item__info">
                <div class="pool-item__name">{{ d.name }}</div>
                <div class="pool-item__meta">{{ d.team }} · {{ d.shift }}</div>
              </div>
              <el-button text type="primary" size="small">派单</el-button>
            </div>
          </div>
        </el-card>

        <el-card shadow="never" class="pool-card" style="margin-top: 12px;">
          <template #header>
            <span class="card-title">空闲车辆</span>
          </template>
          <div class="pool-list">
            <div v-for="v in vehicles" :key="v.id" class="pool-item">
              <el-icon size="22" color="#6F63FF"><Van /></el-icon>
              <div class="pool-item__info">
                <div class="pool-item__name">{{ v.no }}</div>
                <div class="pool-item__meta">{{ v.type }} · {{ v.capacity }}吨</div>
              </div>
              <el-tag size="small" :type="v.status === 'idle' ? 'success' : 'info'">
                {{ v.status === 'idle' ? '空闲' : '备用' }}
              </el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Refresh, Position, Van } from '@element-plus/icons-vue'
import PageHeader from '@/components/common/PageHeader.vue'
import DataTable from '@/components/common/DataTable.vue'
import StatusTag from '@/components/common/StatusTag.vue'
import { mockDispatch } from '@/mock/dispatch'

const resourceStats = ref(mockDispatch.resourceStats)
const plans = ref(mockDispatch.plans)
const drivers = ref(mockDispatch.idleDrivers)
const vehicles = ref(mockDispatch.idleVehicles)
</script>

<style lang="scss" scoped>
@use '@/styles/tokens.scss' as *;

.stat-row { margin-bottom: $space-4; }

.res-card {
  background: $bg-container;
  border-radius: $radius-md;
  padding: $space-4;
  box-shadow: $shadow-xs;
  margin-bottom: $space-4;
  text-align: center;
  &__label { color: $text-tertiary; font-size: $font-size-sm; }
  &__value { font-size: 22px; font-weight: $font-weight-semibold; color: $color-primary; margin: $space-1 0; }
  &__sub   { color: $text-tertiary; font-size: $font-size-xs; }
}

.pool-card {
  border-radius: $radius-md;
  :deep(.el-card__header) { padding: $space-3 $space-4; }
  :deep(.el-card__body) { padding: $space-3; }
}
.card-title { font-size: $font-size-md; font-weight: $font-weight-medium; color: $text-primary; }

.pool-list { max-height: 320px; overflow-y: auto; }
.pool-item {
  display: flex; align-items: center; gap: $space-3;
  padding: $space-2 $space-3;
  border-radius: $radius-sm;
  &:hover { background: $bg-hover; }
  &__info { flex: 1; }
  &__name { color: $text-primary; font-size: $font-size-base; font-weight: $font-weight-medium; }
  &__meta { color: $text-tertiary; font-size: $font-size-xs; }
}
.avatar { background: $color-primary !important; color: $text-inverse !important; }
</style>
