<template>
  <h1
    class="my-6 h-16 text-3xl flex font-serif items-center justify-center"
    style="color: #7f1416; background: url('images/chapter/background.svg') no-repeat center;"
  >
    <span class="mr-1">❧</span>
    <slot></slot>
    <span class="ml-1 inline-block" style="transform: scaleX(-1);">❧</span>
  </h1>
</template>

<script>
export default {
  name: "H1"
};
</script>
