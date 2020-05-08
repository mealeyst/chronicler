import { storiesOf } from "@storybook/vue";
import { text, number } from "@storybook/addon-knobs";
import { Word } from "./word";

export default { title: "01_atoms/word" };

export const word = () => {
  return {
    components: { Word },
    template: `<Word v-bind:start="0.849" v-bind:end="1.478">This<Word/>`
  };
};

storiesOf("01_atoms/word", module)
  .add("with children", () => ({
    components: { Word },
    props: {
      children: {
        type: String,
        default: text("Children", "This"),
      },
      start: {
        type: Number,
        default: number("Start", 0.849)
      },
      end: {
        type: Number,
        default: number("End", 1.478)
      }
    },
    template: `<Word v-bind:start="start" v-bind:end="end">{{children}}<Word/>`
  }))
