<template>
    <link rel="stylesheet" href="/css/register.css" />
    <div class="login">
            <div class="title">用户注册</div>
            <el-input v-model="inputName" style="width: 240px" placeholder="请输入新账号" />
            <br>
            <el-input v-model="inputPassword" style="width: 240px" type="password" placeholder="请输入新密码" show-password />
            <br>
            <el-button type="primary" plain @click="register">注册</el-button>
            <el-button type="primary" plain @click="GotoLoginPage">返回</el-button>
    </div>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus'
import useRegister from '@/hooks/register'
import {GotoLoginPage} from '@/common/authFunc'

const {inputName, inputPassword, register} = useRegister()

</script>
