<template>
        <link rel="stylesheet" href="/css/login.css" />
        <div class="login">
                <div class="title">用户登录</div>
                <el-input v-model="account" style="width: 240px" placeholder="请输入账号" />
                <br>
                <el-input v-model="password" style="width: 240px" type="password" placeholder="请输入密码" show-password />
                <br>
                <el-button type="primary" plain>登录</el-button>
                <el-button type="primary" plain>注册</el-button>
        </div>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus'
import useLogin from '@/hooks/login'

const {account, password} = useLogin()
</script>
