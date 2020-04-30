import Vue from "vue";
import { Choice, ChoiceTypes } from "./choice";

export default { title: "01_atoms/choice" };

export const neutral = () => {
  return {
    components: { Choice },
    template: `<Choice type=${ChoiceTypes.Neutral}>What skills can you offer?</Choice>`
  };
};

export const friendly = () => {
  return {
    components: { Choice },
    template: `<Choice type=${ChoiceTypes.Friendly}>You can come with us!</Choice>`
  };
};

export const aggressive = () => {
  return {
    components: { Choice },
    template: `<Choice type=${ChoiceTypes.Aggressive}>Go away you useless sod!</Choice>`
  };
};
