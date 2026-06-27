/**
 * 物流委托计划
 * 注：原 PRD 中的"物料规则"字段，按 v1.1 补全建议已统一为"物料规格"
 */
export interface DispatchPlan {
  planNo: string
  status: 'pending' | 'running' | 'finished' | 'rejected'
  dept: string
  contractor?: string
  needSignoff?: boolean
  submitTime: string
  shift: string
  material: string
  spec: string  // 物料规格（v1.1 建议值，原"物料规则"已统一）
  fromUnit?: string
  fromArea?: string
  from: string
  toUnit?: string
  toArea?: string
  to: string
  carrier?: string
  signStatus?: string
  workArea?: string
  receiver?: string
  receiveTime?: string
  plannedTons: number
  actualTons?: number
  finishedTons?: number
  remainingTons?: number
  vehicleCount: number
  createTime?: string
  transportKm?: number
}

/** 物流执行计划 */
export interface DispatchExecution {
  execNo: string
  status: 'pending' | 'running' | 'finished' | 'rejected'
  material: string
  spec: string  // 物料规格
  measurementPoint?: string
  from: string
  to: string
  vehicle: string
  vehicleType: string
  driver: string
  driverNo?: string
  carrier: string
  workArea: string
  execTime?: string
  plannedTons: number
  measuredTons?: number
  estimateFinishTime?: string
  transportKm?: number
  progress?: number
}

/** 工程车申请单 */
export interface EngApply {
  applyNo: string
  applyDate: string
  applyDept: string
  companyName?: string
  vehicleType: string
  urgency: 'urgent' | 'normal'
  reason: string
  useLocation: string
  projectNo?: string
  projectName?: string
  costOwner?: string
  /** 费用资产编号（v1.1 建议值，原"费用资产"已统一） */
  costAssetCode?: string
  contact: string
  phone: string
  planStart: string
  planEnd: string
  planHours: number
  remark?: string
  needGateAccess?: boolean
  lineManager?: string
  divisionLeader?: string
}

/** 工程车派工单 */
export interface EngDispatch {
  dispatchNo: string
  applyNo: string
  source: 'internal' | 'external'
  unitPrice: number
  contractNo?: string
  /** 租赁商（v1.1 建议值，原"租凭商"已统一为"租赁商"） */
  lessor?: string
  vehicleCertNo?: string
  vehicleCertExpire?: string
  driverCertNo?: string
  driverCertExpire?: string
  driverName: string
  driverPhone: string
  remark?: string
}
