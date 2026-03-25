<template>
  <div :style="{ backgroundColor: color }">
    <h1>저의 색상을 정해주세요!</h1>
    <ColorEmitChild v-on:colorChange="colorChangeHandler" />
  </div>
</template>

<script>
import ColorEmitChild from './ColorEmitChild.vue';

export default {
  name: 'ColorEmitParent',
  components: { ColorEmitChild },
  data() {
    return {
      color: '',
    };
  },
  methods: {
    colorChangeHandler(color) {
      this.color = color;
    },
  },
};
</script>
