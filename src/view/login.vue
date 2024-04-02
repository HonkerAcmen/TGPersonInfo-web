<template>
        <link rel="stylesheet" href="/css/login.css" />
        <div class="login">
                <div class="title">用户登录</div>
                <el-input v-model="inputName" style="width: 240px" placeholder="请输入账号" />
                <br>
                <el-input v-model="inputPassword" style="width: 240px" type="password" placeholder="请输入密码" show-password />
                <br>
                <el-button type="primary" plain @click="login">登录</el-button>
                <el-button type="primary" plain @click="GotoRegisterPage">注册</el-button>
        </div>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus'
import useLogin from '@/hooks/login'
import {GotoRegisterPage} from '@/common/authFunc'
const {inputName, inputPassword,login} = useLogin()
</script>
