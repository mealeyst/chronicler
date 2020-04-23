import Vue from "vue";
import { StoryUnit } from "./story-unit";
import sampleAudio from "../../01_atoms/narration/sample.mp3";

export default { title: "02_molecules/Story Unit" };

export const storyUnit = () => {
  // const words = ;
  return {
    components: { StoryUnit },
    template: `<StoryUnit
      src="${sampleAudio}"
      :unit="[
        {
          type: 'h1',
          content: [
            { text: 'This', start: 0.849, end: 1.478},
            { text: 'is', start: 1.478, end: 1.576},
            { text: 'a', start: 1.576, end: 1.643},
            { text: 'Sample', start: 1.643, end: 2.244},
          ]
        },
        {
          type: 'p',
          content: [
            { text: 'This', start: 0.849, end: 1.478},
            { text: 'is', start: 1.478, end: 1.576},
            { text: 'a', start: 1.576, end: 1.643},
            { text: 'sample', start: 1.643, end: 2.244},
          ]
        }
      ]"
    />`
  };
};
