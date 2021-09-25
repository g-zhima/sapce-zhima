<template>
  <div class="section-card">
    <div class="emoji">{{ emoji }}</div>
    <div class="title">{{ title }}</div>
    <div class="detail">{{ detail }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  emoji: String,
  title: String,
  detail: String,
})
</script>

<style scoped>
.section-card {
  border: var(--border-primary);
  padding: 12px;
  margin: 6px;
  border-radius: 6px;
  transition-property: all;
  transition-duration: 0.2s;
  flex: 1;
}

.section-card:hover {
  box-shadow: var(--shadow-primary);
}

.emoji {
  font-size: 30px;
  margin-bottom: 10px;
}

.title {
  font-size: var(--txt-size-large);
}

.detail {
  font-size: var(--txt-size-normal);
}
</style>
