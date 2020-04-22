import Vue from "vue";
import { default as H1 } from "./h1.vue";
import { default as H2 } from "./h2.vue";

export default { title: "01_atoms/headings" };

export const h1 = () => {
  return {
    components: { H1 },
    template: `<H1>Fantasy Story</H1>`
  };
};

export const h2 = () => {
  return {
    components: { H2 },
    template: `<H2><a href="#prolog">Prolog</a></H2>`
  };
};
