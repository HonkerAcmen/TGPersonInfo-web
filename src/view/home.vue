<template>
  <link rel="stylesheet" href="css/home.css">
  <div class="container">
    <div class="box">
      <el-avatar :src="user.avatarUrl" />
      <div class="name">{{ user.name }}<p>{{ user.username }}</p><span>{{ user.quote }}</span></div>
      <div class="follow">following <p>{{ user.following }}</p>followers <span>{{ user.followers }}</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 定义一个响应式对象来存储用户信息
const user = ref({
  avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
  name: '戊辰',
  username: 'Abaa123',
  quote: '身无彩凤双飞翼，心有灵犀一点通',
  following: 34,
  followers: 43
});

</script>