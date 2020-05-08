import { storiesOf } from "@storybook/vue";
import { Narration } from "./narration";
import sampleAudio from "./sample.mp3";

storiesOf("01_atoms/narration", module)
  .add("with audio", () => ({
    components: { Narration },
    template: `<Narration src="${sampleAudio}"/>`
  }))
