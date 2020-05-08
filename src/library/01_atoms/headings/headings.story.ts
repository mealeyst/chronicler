import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import { H1, H2 } from "./index";

storiesOf("01_atoms/headings", module)
  .add("H1", () => ({
    components: { H1 },
    props: {
      children: {
        type: String,
        default: text("Children", "Fantasy Story")
      }
    },
    template: `<H1>{{children}}</H1>`
  }))
  .add("H2", () => ({
    components: { H2 },
    props: {
      children: {
        type: String,
        default: text("Children", "Prolog")
      }
    },
    template: `<H2>{{children}}</H2>`
  }));
