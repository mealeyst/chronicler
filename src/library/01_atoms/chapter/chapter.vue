<template>
  <section v-bind:id="name">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "Chapter",
  props: {
    name: String
  }
};
</script>
