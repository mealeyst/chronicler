<template>
  <audio :src="src" autoplay></audio>
</template>

<script>
export default {
  name: "Narration",
  props: {
    src: {
      type: String,
      data: function() {
        return {
          src: ""
        };
      }
    }
  }
};
</script>
