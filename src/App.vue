<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

const locale = zhCn;
</script>

<template>
  <div class="m-5">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
  <TheFooter></TheFooter>
</template>
