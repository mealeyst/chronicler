import { storiesOf } from "@storybook/vue";
import { boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Choice, ChoiceTypes } from "./choice";

storiesOf("01_atoms/choice", module)
  .add("Aggressive", () => ({
    components: { Choice },
    props: {
      isSelected: {
        type: Boolean,
        default: boolean("Selected", false)
      },
      text: {
        type: String,
        default: text("Button Text", "Go away you useless sod!")
      }
    },
    template: `
     <Choice 
       :selected="isSelected"
       type=${ChoiceTypes.Aggressive}
       @clicked="handleClick">
       {{text}}
     </Choice>`,
    methods: { handleClick: action("clicked") }
  }))
  .add("Friendly", () => ({
    components: { Choice },
    props: {
      isSelected: {
        type: Boolean,
        default: boolean("Selected", false)
      },
      text: {
        type: String,
        default: text(
          "Button Text",
          "We would be thrilled to have you join us!"
        )
      }
    },
    template: `
     <Choice 
       :selected="isSelected"
       type=${ChoiceTypes.Friendly}
       @clicked="handleClick">
       {{text}}
     </Choice>`,
    methods: { handleClick: action("clicked") }
  }))
  .add("Neutral", () => ({
    components: { Choice },
    props: {
      isSelected: {
        type: Boolean,
        default: boolean("Selected", false)
      },
      text: {
        type: String,
        default: text("Button Text", "What skills do you have to offer?")
      }
    },
    template: `
     <Choice 
       :selected="isSelected"
       type=${ChoiceTypes.Neutral}
       @clicked="handleClick">
       {{text}}
     </Choice>`,
    methods: { handleClick: action("clicked") }
  }));
