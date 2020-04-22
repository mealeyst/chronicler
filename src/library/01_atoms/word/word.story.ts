import Vue from "vue";
import { default as Word } from "./word.vue";

export default { title: "01_atoms/word" };

export const word = () => {
  return {
    components: { Word },
    template: `<Word v-bind:start="0.849" v-bind:end="1.478">This<Word/>`
  };
};
