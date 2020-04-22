<template>
  <h2
    class="my-6 h-12 text-2xl font-serif flex items-center justify-center"
    style="color: #7f1416; background: url('images/chapter/background.svg') no-repeat center;"
  >
    <span class="mr-1">❧</span>
    <slot></slot>
    <span class="ml-1 inline-block" style="transform: scaleX(-1);">❧</span>
  </h2>
</template>

<style></style>

<script>
export default {
  name: "H2"
};
</script>
