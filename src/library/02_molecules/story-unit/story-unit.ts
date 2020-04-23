import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import { H1, H2, Narration, Word } from "../../01_atoms/";

@Component({
  components: {
    H1: H1,
    H2: H2,
    Narration: Narration,
    Word: Word
  },
  template: `
    <div class="story-unit">
      <Narration :src="src" />
      <div v-for="(element, index) in unit" :key="index">
        <H1 v-if="element.type === 'h1'">
          <Word
            v-for="(word, index) in element.content"
            :start="word.start"
            :end="word.end"
            :key="index"
          >
            {{ word.text }}
          </Word>
        </H1>
        <H2 v-else-if="element.type === 'h2'">
          <Word
            v-for="(word, index) in element.content"
            :start="word.start"
            :end="word.end"
            :key="index"
          >
            {{ word.text }}
          </Word>
        </H2>
        <p v-else-if="element.type === 'p'">
          <Word
            v-for="(word, index) in element.content"
            :start="word.start"
            :end="word.end"
            :key="index"
          >
            {{ word.text }}
          </Word>
        </p>
      </div>
    </div>
  `
})
export class StoryUnit extends Vue {
  @Prop(String) readonly src: string | undefined;
  @Prop(Array) readonly unit: Word[] | undefined;
}
