<template>
  <div>
    <SlotChild>
      <h1>가냐?</h1>
      <img
        src="https://blog.kakaocdn.net/dna/SI2aq/btqLBOaqPyP/AAAAAAAAAAAAAAAAAAAAAKOkYuT5AxPubO3__De5PVd1oSpunf_8Xlvgnb7Qywzd/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1774969199&allow_ip=&allow_referer=&signature=YWjO68yQspHK4ZXedswHFkWyKEc%3D"
      />
    </SlotChild>
  </div>
</template>

<script>
import SlotChild from './SlotChild.vue';

export default {
  components: {
    SlotChild,
  },
};
</script>
