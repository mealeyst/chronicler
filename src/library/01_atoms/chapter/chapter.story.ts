import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import { Chapter } from "./chapter";

storiesOf("01_atoms/chapter", module).add("with children", () => ({
  component: { Chapter },
  props: {
    children: {
      type: String,
      default: text(
        "Children content",
        "This is some example content inside of the chapter container."
      )
    }
  },
  template: `
      <Chapter name="prolog">{{children}}</Chapter>
    `
}));
