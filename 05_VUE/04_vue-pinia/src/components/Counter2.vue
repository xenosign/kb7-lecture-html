<script setup>
import { useCounterStore } from '@/stores/counter';
import { ref } from 'vue';

const couterStore = useCounterStore();
</script>

<template>
  <div>
    <h1>Counter</h1>
    <h2>count : {{ couterStore.count }}</h2>
    <h2>counnt x 2 : {{ couterStore.doubleCount }}</h2>
    <button @click="couterStore.increment">+1</button>
  </div>
</template>

<style lang="scss" scoped></style>
