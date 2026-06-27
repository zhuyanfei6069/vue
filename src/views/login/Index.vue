<template>
  <div class="login">
    <div class="login-bg" />
    <div class="login-card">
      <div class="login-card__brand">
        <div class="brand-icon">L</div>
        <h1 class="brand-title">物流执行系统</h1>
        <p class="brand-subtitle">永卓控股 · 恒创数科 · 解决方案室</p>
      </div>
      <el-form ref="formRef" :model="form" :rules="rules" class="login-form" @keyup.enter="onLogin">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="账号" size="large" :prefix-icon="User" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" show-password placeholder="密码" size="large" :prefix-icon="Lock" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="large" :loading="loading" class="login-btn" @click="onLogin">
            登 录
          </el-button>
        </el-form-item>
        <div class="login-tips">
          <p>演示账号：任意账号 + 任意密码即可登录</p>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage, type FormInstance } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const formRef = ref<FormInstance>()
const loading = ref(false)

const form = reactive({ username: '', password: '' })
const rules = {
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

const onLogin = async () => {
  if (!formRef.value) return
  await formRef.value.validate(async (valid) => {
    if (!valid) return
    loading.value = true
    try {
      // Mock 登录：任意账号密码都可登录
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        userStore.token = 'mock-token-' + Date.now()
        userStore.userInfo = {
          id: '1',
          username: form.username || 'admin',
          realName: form.username || '演示用户',
          role: 'admin'
        }
        localStorage.setItem('logistics_token', userStore.token)
        localStorage.setItem('logistics_user', JSON.stringify(userStore.userInfo))
      } else {
        await userStore.login(form)
      }
      ElMessage.success('登录成功')
      const redirect = (route.query.redirect as string) || '/dashboard'
      router.push(redirect)
    } finally {
      loading.value = false
    }
  })
}
</script>

<style lang="scss" scoped>
@use '@/styles/tokens.scss' as *;

.login {
  position: relative;
  height: 100vh;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}

.login-bg {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, #6F63FF 0%, #5A50E6 50%, #7E73FF 100%);
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
  }
  &::before { width: 480px; height: 480px; top: -120px; right: -120px; }
  &::after  { width: 360px; height: 360px; bottom: -80px; left: -80px; }
}

.login-card {
  position: relative; z-index: 1;
  width: 400px;
  background: $bg-container;
  border-radius: $radius-lg;
  box-shadow: $shadow-xl;
  padding: $space-10 $space-8;
}

.login-card__brand {
  text-align: center;
  margin-bottom: $space-8;
  .brand-icon {
    width: 56px; height: 56px;
    margin: 0 auto $space-4;
    border-radius: $radius-md;
    background: $color-primary;
    color: $text-inverse;
    display: flex; align-items: center; justify-content: center;
    font-size: 28px; font-weight: 700;
  }
  .brand-title {
    font-size: $font-size-xl;
    font-weight: $font-weight-semibold;
    color: $text-primary;
    margin: 0 0 $space-2;
  }
  .brand-subtitle {
    font-size: $font-size-sm;
    color: $text-tertiary;
    margin: 0;
  }
}

.login-btn { width: 100%; }
.login-tips {
  text-align: center;
  font-size: $font-size-xs;
  color: $text-tertiary;
  margin-top: $space-2;
}
</style>
