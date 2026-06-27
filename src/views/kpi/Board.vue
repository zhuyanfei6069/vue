<template>
  <div class="page-container">
    <PageHeader title="KPI 指标看板" subtitle="运输量/车辆利用率/人员绩效/计划完成率">
      <template #actions>
        <el-date-picker v-model="date" type="date" placeholder="选择日期" />
        <el-button type="primary">查询</el-button>
      </template>
    </PageHeader>

    <el-row :gutter="16">
      <el-col v-for="kpi in kpis" :key="kpi.label" :xs="12" :md="6">
        <div class="kpi-card">
          <div class="kpi-card__head">
            <span class="kpi-card__label">{{ kpi.label }}</span>
            <el-tag :type="kpi.tagType" size="small">{{ kpi.targetLabel }}</el-tag>
          </div>
          <div class="kpi-card__value">{{ kpi.value }}<span class="unit">{{ kpi.unit }}</span></div>
          <div class="kpi-card__bar">
            <el-progress :percentage="kpi.percent" :color="kpi.color" :show-text="false" :stroke-width="6" />
          </div>
          <div class="kpi-card__footer">
            <span>目标 {{ kpi.target }}</span>
            <span>达成率 {{ kpi.percent }}%</span>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="16" style="margin-top: 16px;">
      <el-col :xs="24" :md="12">
        <el-card shadow="never" class="card">
          <template #header><span class="card-title">月度运量趋势</span></template>
          <div ref="barRef" class="chart" />
        </el-card>
      </el-col>
      <el-col :xs="24" :md="12">
        <el-card shadow="never" class="card">
          <template #header><span class="card-title">各作业区计划完成率</span></template>
          <div ref="radarRef" class="chart" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'
import PageHeader from '@/components/common/PageHeader.vue'

const date = ref(new Date())

const kpis = ref([
  { label: '今日运量', value: '1,286', unit: '吨', target: '1500', targetLabel: '日目标', percent: 86, color: '#6F63FF', tagType: 'primary' },
  { label: '车辆利用率', value: '82.3', unit: '%', target: '85%', targetLabel: '月目标', percent: 82, color: '#186E55', tagType: 'success' },
  { label: '计划完成率', value: '94.5', unit: '%', target: '95%', targetLabel: '月目标', percent: 95, color: '#7C4F1B', tagType: 'warning' },
  { label: '人员绩效', value: '92.1', unit: '分', target: '90分', targetLabel: '月目标', percent: 92, color: '#5877FF', tagType: 'info' }
])

const barRef = ref<HTMLElement>()
const radarRef = ref<HTMLElement>()

onMounted(() => {
  nextTick(() => {
    if (barRef.value) {
      const c = echarts.init(barRef.value)
      c.setOption({
        color: ['#6F63FF', '#8589AA'],
        tooltip: { trigger: 'axis' },
        legend: { data: ['运量(吨)', '车次'], textStyle: { color: '#626789' } },
        grid: { top: 40, left: 40, right: 20, bottom: 30 },
        xAxis: { type: 'category', data: ['1月','2月','3月','4月','5月','6月'], axisLabel: { color: '#8589AA' } },
        yAxis: [
          { type: 'value', name: '吨', axisLabel: { color: '#8589AA' }, splitLine: { lineStyle: { color: '#EEF0FF' } } },
          { type: 'value', name: '车次', axisLabel: { color: '#8589AA' }, splitLine: { show: false } }
        ],
        series: [
          { name: '运量(吨)', type: 'bar', data: [1820, 2050, 2380, 2210, 2450, 2680] },
          { name: '车次', type: 'line', yAxisIndex: 1, smooth: true, data: [320, 360, 420, 380, 440, 480] }
        ]
      })
    }
    if (radarRef.value) {
      const c = echarts.init(radarRef.value)
      c.setOption({
        color: ['#6F63FF'],
        tooltip: {},
        radar: {
          indicator: [
            { name: '铁前区', max: 100 },
            { name: '炼钢区', max: 100 },
            { name: '轧钢区', max: 100 },
            { name: '其他区', max: 100 }
          ],
          radius: '65%',
          splitArea: { areaStyle: { color: ['#F9FAFF', '#FFFFFF'] } },
          axisName: { color: '#626789' }
        },
        series: [{
          type: 'radar',
          data: [{
            value: [95, 88, 92, 85],
            name: '完成率(%)',
            areaStyle: { color: 'rgba(111,99,255,0.2)' }
          }]
        }]
      })
    }
  })
})
</script>

<style lang="scss" scoped>
@use '@/styles/tokens.scss' as *;

.kpi-card {
  background: $bg-container;
  border-radius: $radius-md;
  padding: $space-5;
  box-shadow: $shadow-sm;
  margin-bottom: $space-4;

  &__head { display: flex; align-items: center; justify-content: space-between; }
  &__label { color: $text-tertiary; font-size: $font-size-sm; }
  &__value { font-size: 28px; font-weight: $font-weight-semibold; color: $text-primary; margin: $space-2 0;
    .unit { font-size: $font-size-base; color: $text-tertiary; margin-left: 4px; font-weight: 400; }
  }
  &__bar { margin: $space-2 0; }
  &__footer { display: flex; justify-content: space-between; color: $text-tertiary; font-size: $font-size-xs; }
}

.card-title { font-size: $font-size-md; font-weight: $font-weight-medium; color: $text-primary; }
.chart { height: 280px; }
</style>
