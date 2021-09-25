<template>
  <div class="section-title">
    <slot>#</slot>
  </div>
</template>

<script setup lang="ts">
// defineProps({
//   content: String,
// })
</script>

<style scoped>
.section-title {
  text-align: center;
  font-size: var(--txt-size-normal);
}
.section-title::before {
  content: '';
  display: block;
  position: relative;
  height: 1.5px;
  top: 10px;
  background-image: linear-gradient(90deg, #eee, transparent, #eee);
}
</style>
