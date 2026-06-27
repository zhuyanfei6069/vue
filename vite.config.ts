import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: './',
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        resolvers: [ElementPlusResolver()],
        dts: 'src/auto-imports.d.ts',
        eslintrc: { enabled: true }
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: 'src/components.d.ts'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 旧版 sass (1.78-) 用 additionalData；新版本请用 api
          api: 'modern-compiler',
          additionalData: (content: string, filename: string) => {
            if (filename.replace(/\\/g, '/').endsWith('/src/styles/tokens.scss')) {
              return content
            }
            return `@use "@/styles/tokens.scss" as *;\n${content}`
          }
        }
      }
    },
    server: {
      host: '0.0.0.0',
      port: 5173,
      open: true,
      proxy: env.VITE_USE_MOCK === 'true' ? undefined : {
        '/api': {
          target: env.VITE_API_BASE || 'http://localhost:8080',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api/, '/api')
        }
      }
    },
    build: {
      target: 'es2015',
      outDir: 'dist',
      sourcemap: false,
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/vue') || id.includes('node_modules/vue-router') || id.includes('node_modules/pinia')) {
              return 'vue'
            }
            if (id.includes('node_modules/element-plus') || id.includes('node_modules/@element-plus/icons-vue')) {
              return 'element'
            }
            if (id.includes('node_modules/echarts') || id.includes('node_modules/vue-echarts')) {
              return 'echarts'
            }
          }
        }
      }
    }
  }
})
