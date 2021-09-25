<template>
  <div class="home">
    <section class="hero">
      <h3>Hi,往这儿看! <span class="animate-wobble">👋</span></h3>
      <h1>我是 Zhima</h1>
      <p>一个 JavaScript 爱好者</p>
    </section>
    <section class="section">
      <SectionTitle></SectionTitle>
      <div class="section-cards">
        <SectionCard
          v-for="card in sectionCardsList"
          v-bind="card"
        ></SectionCard>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../components/SectionTitle.vue'
import SectionCard from '../components/SectionCard.vue'
import { reactive } from '@vue/reactivity'

const sectionCardsList = reactive([
  {
    emoji: '📜',
    title: 'Blog',
    detail: 'My blog from github issue',
  },
  {
    emoji: '🔖',
    title: '无签',
    detail: '此处无签胜有签',
  },
])
</script>

<style scoped>
@keyframes wobble {
  0%,
  100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateX(-15px) rotate(-6deg);
  }
  30% {
    transform: translateX(8px) rotate(6deg);
  }
  45% {
    transform: translateX(-8px) rotate(-3.6deg);
  }
  60% {
    transform: translateX(4px) rotate(2.4deg);
  }
  75% {
    transform: translateX(-2px) rotate(-1.2deg);
  }
}

.animate-wobble {
  display: inline-block;
}

.hero:hover .animate-wobble {
  animation: wobble 0.8s both;
}

.hero {
  user-select: none;
  margin: 130px 0;
}

.hero h3 {
  color: var(--txt-color-tertiary);
  font-size: var(--txt-size-large);
  margin: 24px 0;
}

.hero h1 {
  font-size: 56px;
  margin: 38px 0;
}

.hero p {
  font-size: 20px;
}

.section-cards {
  display: flex;
  justify-content: space-between;
}
</style>
