<template>
  <div
    class="h-screen"
    style="background: url('images/stage/background.jpg') no-repeat; background-size: 100%;"
  >
    <slot></slot>
  </div>
</template>

<style></style>

<script>
export default {
  name: "Stage",
  props: {
    content: String
  }
};
</script>
