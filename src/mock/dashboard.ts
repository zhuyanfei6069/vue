/**
 * Dashboard 演示数据
 */
export const mockDashboard = {
  stats: [
    { label: '总车辆数', value: 40, trend: 2, color: '#6F63FF', icon: 'Van' },
    { label: '在线车辆', value: 28, trend: 5, color: '#186E55', icon: 'CircleCheck' },
    { label: '今日运单', value: 86, trend: -3, color: '#7C4F1B', icon: 'Document' },
    { label: '总驾驶员', value: 52, trend: 1, color: '#5877FF', icon: 'User' }
  ],
  trend: {
    order: [
      { date: '06/21', value: 78 },
      { date: '06/22', value: 82 },
      { date: '06/23', value: 75 },
      { date: '06/24', value: 88 },
      { date: '06/25', value: 92 },
      { date: '06/26', value: 86 },
      { date: '06/27', value: 86 }
    ],
    tonnage: [
      { date: '06/21', value: 1180 },
      { date: '06/22', value: 1230 },
      { date: '06/23', value: 1100 },
      { date: '06/24', value: 1320 },
      { date: '06/25', value: 1380 },
      { date: '06/26', value: 1286 },
      { date: '06/27', value: 1286 }
    ]
  },
  todayOrders: [
    { orderNo: 'DP20260627001', material: '20mm螺纹钢', from: '炼钢1号', to: '轧钢A区', tons: 80, status: 'pending',  time: '2026-06-27 08:12', handler: '张班长' },
    { orderNo: 'DP20260627002', material: '盘螺Φ12',   from: '轧钢B区',  to: '成品库1', tons: 60, status: 'running',  time: '2026-06-27 08:30', handler: '李班长' },
    { orderNo: 'DP20260627003', material: '钢坯Q235B',  from: '炼钢2号',  to: '轧钢C区', tons: 120,status: 'finished', time: '2026-06-27 09:00', handler: '王班长' },
    { orderNo: 'DP20260627004', material: '废钢',       from: '废钢场',   to: '炼钢1号', tons: 50, status: 'pending',  time: '2026-06-27 09:15', handler: '赵班长' },
    { orderNo: 'DP20260627005', material: '铁矿石',     from: '原料场',   to: '烧结区',  tons: 200,status: 'running',  time: '2026-06-27 09:30', handler: '钱班长' }
  ]
}
