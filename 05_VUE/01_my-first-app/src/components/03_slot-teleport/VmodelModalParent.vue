<template>
  <div>
    <button @click="isModalVisible = true">모달 열기</button>
    <div class="content">
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠 입니다!</h1>
    </div>
    <VmodelModalChild v-model:visible="isModalVisible">
      <h2>이 모달을 당장 닫지 않으면!?</h2>
      <p>씨끄러울 겁니다!</p>
      <img
        src="https://photo.coolenjoy.co.kr/data/editor/2008/20200813130955_aiqgbsrk.gif"
        alt="장동민마멋"
      />
    </VmodelModalChild>
  </div>
</template>

<script>
import VmodelModalChild from './VmodelModalChild.vue';

export default {
  components: {
    VmodelModalChild,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
};
</script>

<style scoped></style>
