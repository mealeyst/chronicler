import Vue from "vue";
import { Illustration } from "./illustration";

export default { title: "01_atoms/illustration" };

export const illustration = () => {
  return {
    components: { Illustration },
    template: `<Illustration src="https://via.placeholder.com/150"/>`
  };
};
