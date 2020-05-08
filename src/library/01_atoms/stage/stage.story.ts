import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import { Stage } from "./stage";

storiesOf("01_atoms/stage", module)
  .add("with children", () => ({
    components: { Stage },
    props: {
      children: {
        type: String,
        default: text("Children", "Fantasy Story")
      }
    },
    template: `<stage><h1 class="text-3xl">{{children}}</h1></stage>`
  }))