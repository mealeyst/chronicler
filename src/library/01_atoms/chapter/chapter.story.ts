import Vue from "vue";
import { Chapter } from "./chapter";

export default { title: "01_atoms/chapter" };

export const chapter = () => {
  return {
    components: { Chapter },
    template: `
<Chapter name="prolog">
  <h1>Prolog</h1>
  <p>This is some example content inside of the chapter container.</p>
</Chapter>
`
  };
};
