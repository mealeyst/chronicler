import Vue from "vue";
import { H1, H2 } from "./index";

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
