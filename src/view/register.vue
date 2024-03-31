<template>
    <link rel="stylesheet" href="/css/register.css" />
    <div class="login">
            <div class="title">用户注册</div>
            <el-input v-model="account" style="width: 240px" placeholder="请输入新账号" />
            <br>
            <el-input v-model="password" style="width: 240px" type="password" placeholder="请输入新密码" show-password />
            <br>
            <el-button type="primary" plain>注册</el-button>
            <el-button type="primary" plain @click="GotoLoginPage">返回</el-button>
    </div>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus'
import useLogin from '@/hooks/login'
import {GotoLoginPage} from '@/common/authFunc'
const {account, password} = useLogin()


</script>
