<template>
  <div class="page-container dashboard">
    <PageHeader title="工作台" subtitle="今日运输资源与计划概览">
      <template #actions>
        <el-button :icon="Refresh" @click="loadData">刷新</el-button>
        <el-button type="primary" :icon="Download">导出报表</el-button>
      </template>
    </PageHeader>

    <!-- 统计卡片 -->
    <el-row :gutter="16" class="stat-row">
      <el-col v-for="s in stats" :key="s.label" :xs="12" :sm="12" :md="6">
        <div class="stat-card" :style="{ '--accent': s.color }">
          <div class="stat-card__icon">
            <el-icon size="22"><component :is="s.icon" /></el-icon>
          </div>
          <div class="stat-card__body">
            <div class="stat-card__label">{{ s.label }}</div>
            <div class="stat-card__value">{{ s.value }}</div>
            <div class="stat-card__trend">
              <span :class="s.trend > 0 ? 'up' : 'down'">
                {{ s.trend > 0 ? '↑' : '↓' }} {{ Math.abs(s.trend) }}%
              </span>
              <span class="stat-card__sub">较昨日</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 图表 + 列表 -->
    <el-row :gutter="16" class="chart-row">
      <el-col :xs="24" :lg="16">
        <el-card shadow="never" class="card">
          <template #header>
            <div class="flex-between">
              <span class="card-title">近 7 日运单趋势</span>
              <el-radio-group v-model="trendType" size="small">
                <el-radio-button label="order">运单数</el-radio-button>
                <el-radio-button label="tonnage">吨位</el-radio-button>
              </el-radio-group>
            </div>
          </template>
          <div ref="chartRef" class="chart" />
        </el-card>
      </el-col>
      <el-col :xs="24" :lg="8">
        <el-card shadow="never" class="card">
          <template #header>
            <span class="card-title">车辆状态分布</span>
          </template>
          <div ref="pieRef" class="chart chart--pie" />
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="16">
      <el-col :span="24">
        <DataTable title="今日待处理运单" :data="tableData" :show-pagination="false">
          <el-table-column prop="orderNo" label="运单号" width="160" />
          <el-table-column prop="material" label="物料" width="120" />
          <el-table-column prop="from" label="装点" width="120" />
          <el-table-column prop="to" label="卸点" width="120" />
          <el-table-column prop="tons" label="计划吨位" width="100" align="right" />
          <el-table-column prop="status" label="状态" width="100">
            <template #default="{ row }">
              <StatusTag :status="row.status" />
            </template>
          </el-table-column>
          <el-table-column prop="time" label="提交时间" width="180" />
          <el-table-column prop="handler" label="处理人" />
        </DataTable>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import { Refresh, Download, Van, User, Box, Histogram } from '@element-plus/icons-vue'
import * as echarts from 'echarts'
import PageHeader from '@/components/common/PageHeader.vue'
import DataTable from '@/components/common/DataTable.vue'
import StatusTag from '@/components/common/StatusTag.vue'
import { mockDashboard } from '@/mock/dashboard'

const stats = ref(mockDashboard.stats)
const tableData = ref(mockDashboard.todayOrders)
const trendType = ref('order')

const chartRef = ref<HTMLElement>()
const pieRef = ref<HTMLElement>()
let chart: echarts.ECharts | null = null
let pieChart: echarts.ECharts | null = null

const trend = ref(mockDashboard.trend.order)

const renderTrend = () => {
  if (!chartRef.value) return
  chart = echarts.init(chartRef.value)
  chart.setOption({
    grid: { top: 20, left: 40, right: 20, bottom: 30 },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: trend.value.map((d) => d.date),
      axisLine: { lineStyle: { color: '#E1E4F7' } },
      axisLabel: { color: '#8589AA' }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: '#EEF0FF' } },
      axisLabel: { color: '#8589AA' }
    },
    series: [{
      type: 'line', smooth: true, symbolSize: 6,
      data: trend.value.map((d) => d.value),
      lineStyle: { color: '#6F63FF', width: 2 },
      itemStyle: { color: '#6F63FF' },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(111, 99, 255, 0.3)' },
          { offset: 1, color: 'rgba(111, 99, 255, 0.02)' }
        ])
      }
    }]
  })
}

const renderPie = () => {
  if (!pieRef.value) return
  pieChart = echarts.init(pieRef.value)
  pieChart.setOption({
    color: ['#6F63FF', '#186E55', '#7C4F1B', '#8589AA'],
    tooltip: { trigger: 'item' },
    legend: { bottom: 0, textStyle: { color: '#626789' } },
    series: [{
      type: 'pie',
      radius: ['45%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: { borderRadius: 6, borderColor: '#fff', borderWidth: 2 },
      label: { show: true, formatter: '{b}\n{d}%', color: '#626789', fontSize: 12 },
      data: [
        { value: 28, name: '在线' },
        { value: 6, name: '维修' },
        { value: 4, name: '备用' },
        { value: 2, name: '离线' }
      ]
    }]
  })
}

const loadData = () => {
  stats.value = mockDashboard.stats
  tableData.value = mockDashboard.todayOrders
  trend.value = mockDashboard.trend[trendType.value as keyof typeof mockDashboard.trend] as any
  nextTick(renderTrend)
}

watch(trendType, (v) => {
  trend.value = mockDashboard.trend[v as keyof typeof mockDashboard.trend] as any
  nextTick(renderTrend)
})

onMounted(() => {
  nextTick(() => { renderTrend(); renderPie() })
  window.addEventListener('resize', () => { chart?.resize(); pieChart?.resize() })
})
</script>

<style lang="scss" scoped>
@use '@/styles/tokens.scss' as *;

.dashboard { padding-bottom: $space-8; }

.stat-row { margin-bottom: $space-4; }

.stat-card {
  background: $bg-container;
  border-radius: $radius-md;
  padding: $space-5;
  display: flex; align-items: center; gap: $space-4;
  box-shadow: $shadow-sm;
  margin-bottom: $space-4;
  border-left: 3px solid var(--accent);

  &__icon {
    width: 48px; height: 48px;
    border-radius: $radius-base;
    background: rgba(111, 99, 255, 0.1);
    color: var(--accent);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  &__label { color: $text-tertiary; font-size: $font-size-sm; }
  &__value { font-size: 24px; font-weight: $font-weight-semibold; color: $text-primary; margin: $space-1 0; }
  &__trend { font-size: $font-size-xs; }
  &__sub { color: $text-tertiary; margin-left: $space-1; }
  .up   { color: $color-success; }
  .down { color: $color-error; }
}

.chart-row { margin-bottom: $space-4; }

.chart { height: 280px; }
.chart--pie { height: 320px; }

.card-title { font-size: $font-size-md; font-weight: $font-weight-medium; color: $text-primary; }
</style>
