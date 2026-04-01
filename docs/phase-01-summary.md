# 阶段 1 总结：项目初始化与基础架构

## 1) 框架选型结论
- **前端框架**：Vue 3 + Vite（更轻量、启动快，适合个人导航页）
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **图标库**：Lucide Vue Next（已加入依赖）
- **状态管理**：Pinia（后续用于主题、导航、设置持久化）

## 2) 已完成项
- 初始化工程骨架（`src/components`, `src/layouts`, `src/features`, `src/stores` 等目录）
- 配置 TypeScript 与路径别名 `@/`
- 配置 Vite + Vue 插件
- 配置 Tailwind 主题扩展：
  - 语义色板（surface / panel / sidebar / accent / content / muted）
  - Bento 圆角 `rounded-bento`
  - Bento 阴影 `shadow-bento` 与悬停阴影 `shadow-bento-hover`
- 创建基础入口页面用于验证配置接入

## 3) 企业化规范约定（本项目从第一阶段开始执行）
- **目录分层**：
  - `layouts/`（页面骨架）
  - `features/`（业务功能模块）
  - `components/`（可复用组件）
  - `stores/`（Pinia 状态）
  - `types/`（TS 类型）
  - `data/`（静态数据 / mock）
  - `docs/`（阶段性文档）
- **命名规范**：
  - 组件：`PascalCase.vue`
  - store：`useXxxStore.ts`
  - 类型：`xxx.type.ts`
- **样式策略**：优先 Tailwind 原子类，跨组件复用再抽取到 `@layer components`

## 4) 本地初始化命令（推荐）
> 当前环境无法访问 npm registry，以下命令请在可联网环境执行。

```bash
npm create vite@latest tabmebox -- --template vue-ts
cd tabmebox
npm install
npm install -D tailwindcss postcss autoprefixer
npm install pinia lucide-vue-next
```

## 5) 下一阶段输入/输出
- **输入**：阶段 2 的布局线框（Sidebar + Main + 移动抽屉）
- **输出**：可响应式切换的页面骨架组件与导航高亮逻辑
