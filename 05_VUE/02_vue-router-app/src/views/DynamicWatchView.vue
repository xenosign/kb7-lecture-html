<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const msg = ref('');
const imgSrc = ref('');

watch(
  () => route.params.mood,
  (cur, prev) => {
    if (cur === 'happy') {
      msg.value = '행복합니다';
      imgSrc.value =
        'https://i.pinimg.com/564x/a3/a3/52/a3a352efb5a5829ca7007d86369a0d59.jpg';
    } else {
      msg.value = '씐납니다';
      imgSrc.value = 'https://i.imgur.com/wOCGlbN.gif';
    }
  },
  { immediate: true },
);
</script>

<template>
  <div>
    <h1>오늘의 기분은 !? {{ msg }}</h1>
    <img :src="imgSrc" :alt="msg" />
  </div>
</template>

<style lang="scss" scoped></style>
