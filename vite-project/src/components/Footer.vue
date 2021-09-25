<template>
  <footer class="footer">
    <div class="copyright">© 2021 ZHIMA</div>
    <div class="description">Built with Vue, TypeScript, Vite</div>
    <div class="thanks">Special thanks💕 to MrWillCom</div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  margin-top: 100px;
  margin-bottom: 20px;
  padding-top: 20px;
  text-align: center;
  border-top: var(--border-primary);
}

.copyright {
  font-size: var(--txt-size-small);
}

.description {
  font-size: var(--txt-size-mini);
  color: var(--txt-color-tertiary);
}

.thanks {
  font-size: var(--txt-size-mini);
}
</style>
