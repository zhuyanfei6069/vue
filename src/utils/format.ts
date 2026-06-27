import dayjs from 'dayjs'

/**
 * 日期格式化
 */
export const formatDate = (date: string | Date | number, fmt = 'YYYY-MM-DD') =>
  dayjs(date).format(fmt)

export const formatDateTime = (date: string | Date | number) =>
  dayjs(date).format('YYYY-MM-DD HH:mm:ss')

export const formatTime = (date: string | Date | number) =>
  dayjs(date).format('HH:mm:ss')

/**
 * 数字格式化
 */
export const formatNumber = (num: number, decimals = 0) =>
  Number(num || 0).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

/**
 * 金额格式化（元）
 */
export const formatMoney = (num: number, decimals = 2) =>
  '¥' + formatNumber(num, decimals)

/**
 * 吨位格式化
 */
export const formatTons = (num: number) => `${formatNumber(num, 2)} 吨`

/**
 * 文件大小格式化
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * 字典映射
 */
export const useDictMap = (dict: Record<string, string>, value: any) =>
  dict[value] || value
