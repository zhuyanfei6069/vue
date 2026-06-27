# 物流执行系统 (logistics-aily)

> 永钢（永卓控股）物流执行系统 - PC 端骨架
> 永卓控股 · 恒创数科 · 解决方案室
> 基于 Vue 3 + TypeScript + Vite + Element Plus

## 🚀 快速开始

### 环境要求
- Node.js 18+
- npm 9+ / yarn 1.22+ / pnpm 8+

### 安装与启动

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务（默认 mock 模式，无需后端）
npm run dev

# 浏览器自动打开 http://localhost:5173
# 登录：任意账号 + 任意密码
```

### 构建与部署

```bash
# 类型检查 + 生产构建
npm run build

# 预览构建产物
npm run preview
```

## 📁 项目结构

```
logistics-aily/
├── public/                      # 静态资源
├── src/
│   ├── api/                     # API 封装层
│   │   ├── index.ts             # 统一出口
│   │   ├── auth.ts              # 登录/用户
│   │   ├── dispatch.ts          # 调度
│   │   └── base.ts              # 基础数据
│   ├── components/common/       # 通用业务组件
│   │   ├── PageHeader.vue       # 页面头
│   │   ├── StatusTag.vue        # 状态标签
│   │   ├── SearchForm.vue       # 查询表单
│   │   ├── DataTable.vue        # 数据表格
│   │   └── PlaceholderPage.vue  # 占位页
│   ├── layouts/                 # 布局组件
│   │   ├── MainLayout.vue
│   │   └── components/
│   │       ├── Sidebar.vue      # 侧边栏（含菜单）
│   │       ├── Header.vue       # 顶部
│   │       └── Breadcrumb.vue   # 面包屑
│   ├── mock/                    # Mock 数据
│   │   ├── index.ts
│   │   ├── dashboard.ts
│   │   └── dispatch.ts
│   ├── router/                  # 路由 + 菜单
│   │   ├── index.ts             # 10 大模块路由
│   │   └── menu.ts              # 菜单树生成
│   ├── stores/                  # Pinia 状态管理
│   │   ├── user.ts              # 用户/Token
│   │   ├── app.ts               # 应用级（侧边栏、缓存）
│   │   └── permission.ts        # 角色权限
│   ├── styles/                  # 样式
│   │   ├── tokens.scss          # 设计 Tokens（SCSS）
│   │   ├── element-plus-theme.scss  # Element Plus 主题覆盖
│   │   └── global.scss          # 全局样式
│   ├── types/                   # TypeScript 类型
│   │   ├── api.ts
│   │   └── dispatch.ts
│   ├── utils/                   # 工具
│   │   ├── request.ts           # Axios 封装
│   │   ├── format.ts            # 格式化
│   │   └── auth.ts              # Token + 角色
│   ├── views/                   # 业务页面
│   │   ├── login/Index.vue
│   │   ├── dashboard/Index.vue
│   │   ├── plan/                # 1. 计划管理
│   │   ├── transport/           # 2. 运输管理
│   │   │   ├── production/      #    生产用车
│   │   │   └── engineering/     #    工程用车
│   │   ├── fuel/                # 4. 燃料消耗
│   │   ├── visualization/       # 5. 物流可视化
│   │   ├── cost/                # 6. 费用归集
│   │   ├── kpi/                 # 7. KPI
│   │   ├── fleet/               # 8. 车队管理
│   │   ├── base/                # 9. 基础数据
│   │   ├── rule/                # 10. 规则管理
│   │   └── error/404.vue
│   ├── App.vue
│   ├── main.ts
│   └── env.d.ts
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── package.json
├── .env.development
├── .env.production
└── .gitignore
```

## 🎨 设计系统

| Token | 值 | 用途 |
|---|---|---|
| **主色** | `#6F63FF` 紫罗兰 | 按钮、链接、强调 |
| **功能色** | success `#186E55` / warning `#7C4F1B` / error `#F0647B` / info `#5877FF` | 状态 |
| **文字色** | `#15133F` / `#626789` / `#8589AA` / `#C9CDE8` | 4 档文字层级 |
| **字号** | 12 / 13 / 14 / 16 / 17 / 20 / 24 / 32 / 40 / 72 px | xs ~ 5xl |
| **间距** | 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 px | 1 ~ 16 |
| **圆角** | 4 / 8 / 12 / 16 / 24 px + 9999px | sm ~ xl + full |
| **字体** | Noto Sans SC + Inter | 中英混排 |

数据源：Figma 文件 `xD7ApPASxkbsP6ZNmSz70L/01-设计系统搭建`

## 🗺️ 10 大模块（PC 端）

| # | 模块 | 路由 | 状态 |
|---|---|---|---|
| 1 | 计划管理 | `/plan/*` | ✅ 骨架 + 占位 |
| 2 | 运输管理·生产用车 | `/transport/production/*` | ✅ 核心已实现 |
| 3 | 运输管理·工程用车 | `/transport/engineering/*` | ✅ 骨架 + 占位 |
| 4 | 燃料消耗 | `/fuel/*` | ✅ 骨架 + 占位 |
| 5 | 物流可视化 | `/visualization/*` | ✅ 骨架 + 占位 |
| 6 | 费用归集 | `/cost/*` | ✅ 骨架 + 占位 |
| 7 | KPI 指标分析 | `/kpi/*` | ✅ 看板已实现 |
| 8 | 车队管理 | `/fleet/*` | ✅ 骨架 + 占位 |
| 9 | 基础数据 | `/base/*` | ✅ 骨架 + 占位 |
| 10 | 规则管理 | `/rule/*` | ✅ 骨架 + 占位 |

## 🔧 3 个待定字段（v1.1 建议值）

| 字段 | 原值 | 建议值 | 状态 |
|---|---|---|---|
| 物流执行计划 - 物料字段 | 物料规则 | **物料规格 (spec)** | ✅ 已统一 |
| 工程车申请单 - 费用资产字段 | 费用资产 | **费用资产编号 (costAssetCode)** | ✅ 已统一 |
| 工程车派工单 - 租赁商字段 | 租凭商 | **租赁商 (lessor)** | ✅ 已统一 |

字段说明已落到 `src/types/dispatch.ts`，UI 文案已落到对应页面。

## 🛠️ 技术栈

- **Vue 3.4** + Composition API + `<script setup>`
- **TypeScript 5.4** 严格模式
- **Vite 5.2** 构建工具
- **Vue Router 4** 路由
- **Pinia 2** 状态管理
- **Element Plus 2.7** UI 组件（已按品牌色定制）
- **Axios** HTTP 客户端
- **ECharts 5** 图表
- **SCSS** 样式预处理
- **unplugin-auto-import / unplugin-vue-components** 自动按需引入
- **NProgress** 路由进度条

## 📝 开发说明

### Mock 模式
- 默认开启 Mock（`.env.development` 中 `VITE_USE_MOCK=true`）
- 演示数据在 `src/mock/`
- 登录页任意账号密码即可登录

### 接入真实后端
1. 修改 `.env.development` 中 `VITE_USE_MOCK=false`
2. 配置 `VITE_API_BASE` 指向后端 API 地址
3. 实现后端接口时按 `src/api/*.ts` 中定义的请求/响应结构

### 路由权限
- 当前为统一登录，登录后所有路由可访问
- 后续可按 `usePermissionStore.hasAnyRole` 实现细粒度控制
- 9 类角色定义在 `src/utils/auth.ts`

## 📋 已实现 vs 待开发

### ✅ 已实现
- 完整项目骨架
- 设计 Tokens + Element Plus 主题
- 登录页（含渐变背景）
- 工作台 Dashboard（4 卡片 + 折线图 + 饼图 + 今日运单表）
- **作业区调度平台**（资源统计 + 委托计划 + 资源池 + 派车操作）
- 物流委托计划列表（查询/筛选）
- 执行跟踪（带进度条）
- KPI 看板（4 指标 + 双图表）
- 30+ 业务页面占位（带功能点说明）

### ⏳ 待开发（按 PRD）
- 计划管理：录入/审批/下发流程
- 工程车：申请单/派工单/结算单全流程
- 燃料消耗：加油/加气录入 + 对账
- 物流可视化：地图集成 + 实时车辆
- 费用归集：4 类费用计算 + EAS 对接
- 车队管理：借调/续借/通知下发
- 基础数据/规则管理：CRUD + 导入导出
- 真实 API 对接

## 🤝 后续建议

1. **后端先行**：与永钢运输部确认接口规范，优先对接委托计划/作业区调度
2. **APP 端**：单独搭 H5 仓库，复用设计 Tokens
3. **可视化地图**：选择高德/百度/天地图 SDK（高德对厂区坐标系支持较好）
4. **权限细化**：按 9 类角色做菜单级 + 按钮级权限
5. **打印导出**：使用 vue-plugin-hiprint 或 jspdf

## 📄 配套文档

- [PC 端需求规格说明书](https://www.feishu.cn/docx/J8mid0axkoAsWwxbqSocYtBpn0c) - 飞书云文档
- [设计 Tokens 提取结果](artifacts/figma-design-tokens/) - Figma 紫罗兰主色 #6F63FF
- [原始 PRD](attachments/物流执行系统-需求规格说明书.docx) - Word 文档

## License

内部使用 - © 永卓控股有限公司 · 恒创数字科技（江苏）有限公司
