import Vue from "vue";
import { default as Stage } from "./stage.vue";

export default { title: "01_atoms/stage" };

export const stage = () => {
  return {
    components: { Stage },
    template: `<stage><h1 class="text-3xl">Hello</h1></stage>`
  };
};
