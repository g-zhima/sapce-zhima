<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import setFavicon from './utils/setFavicon'

/* 设置页面的 favicon */
onMounted(() => {
  setFavicon('🚀')
})
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  background-color: var(--bg-color-primary);
  color: var(--txt-color-primary);
  --bg-color-primary: #fff;
  --txt-color-primary: #36393a;
  --txt-color-secondary: #3d4041;
  --txt-color-tertiary: #797d7e;
  --txt-size-large: 24px;
  --txt-size-normal: 16px;
  --txt-size-small: 14px;
  --txt-size-mini: 12px;
  --border-color-primary: #eee;
  --border-primary: 1px solid var(--border-color-primary);
  --shadow-color-primary: #0002;
  --shadow-primary: 0 8px 24px var(--shadow-color-primary);
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  width: 10px;
  border-radius: 5px;
  background-color: #bebebe;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #757575;
}

.container {
  width: 600px;
  margin: 0 auto;
}
</style>
