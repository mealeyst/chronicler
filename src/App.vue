<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Word>Hello</Word>
  </div>
</template>

<script>
import { Word } from "./library/01_atoms/word/word.vue";

export default {
  name: "App",
  components: {
    Word
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
