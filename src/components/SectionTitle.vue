<template>
  <div class="section-title">
    <slot>#</slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.section-title {
  text-align: center;
  font-size: var(--txt-size-normal);
  margin: 20px 0;
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
