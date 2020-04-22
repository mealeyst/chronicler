import Vue from "vue";
import { default as Narration } from "./narration.vue";
import sampleAudio from "./sample.mp3";

export default { title: "01_atoms/narration" };

export const narration = () => {
  return {
    components: { Narration },
    template: `<Narration src="${sampleAudio}"/>`
  };
};
