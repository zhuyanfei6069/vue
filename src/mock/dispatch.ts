/**
 * 作业区调度平台演示数据
 */
export const mockDispatch = {
  resourceStats: [
    { label: '总车辆', value: 40, sub: '辆' },
    { label: '在线',   value: 28, sub: '辆' },
    { label: '总驾驶员', value: 52, sub: '人' },
    { label: '在线驾驶员', value: 38, sub: '人' }
  ],
  plans: [
    { planNo: 'WT20260627001', material: '20mm螺纹钢', plannedTons: 80, finishedTons: 0,  from: '炼钢1号', to: '轧钢A区', status: 'pending' },
    { planNo: 'WT20260627002', material: '盘螺Φ12',   plannedTons: 60, finishedTons: 25, from: '轧钢B区',  to: '成品库1', status: 'running' },
    { planNo: 'WT20260627003', material: '钢坯Q235B',  plannedTons: 120,finishedTons: 120,from: '炼钢2号',  to: '轧钢C区', status: 'finished' },
    { planNo: 'WT20260627004', material: '废钢',       plannedTons: 50, finishedTons: 0,  from: '废钢场',   to: '炼钢1号', status: 'pending' },
    { planNo: 'WT20260627005', material: '铁矿石',     plannedTons: 200,finishedTons: 80, from: '原料场',   to: '烧结区',  status: 'running' }
  ],
  idleDrivers: [
    { id: 'D001', name: '张明',  team: '铁前作业区', shift: '白班' },
    { id: 'D002', name: '李强',  team: '铁前作业区', shift: '白班' },
    { id: 'D003', name: '王伟',  team: '炼钢作业区', shift: '白班' },
    { id: 'D004', name: '赵刚',  team: '炼钢作业区', shift: '中班' },
    { id: 'D005', name: '钱进',  team: '轧钢作业区', shift: '白班' }
  ],
  idleVehicles: [
    { id: 'V001', no: '苏E-A1234', type: '重型半挂', capacity: 30, status: 'idle' },
    { id: 'V002', no: '苏E-B5678', type: '重型半挂', capacity: 30, status: 'idle' },
    { id: 'V003', no: '苏E-C9012', type: '自卸车',   capacity: 25, status: 'idle' },
    { id: 'V004', no: '苏E-D3456', type: '自卸车',   capacity: 25, status: 'standby' },
    { id: 'V005', no: '苏E-E7890', type: '平板车',   capacity: 20, status: 'standby' }
  ]
}
