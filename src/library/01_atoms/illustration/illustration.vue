<template>
  <img :src="src" />
</template>

<script>
import props from "./illustration.json";
export default {
  name: "Illustration",
  props: props
};
</script>
