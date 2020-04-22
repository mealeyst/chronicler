<template>
  <div>
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
</template>

<script>
import { H1, H2, Narration, Word } from "../../01_atoms";
export default {
  name: "StoryUnit",
  props: {
    src: {
      type: String
    },
    unit: {
      type: Array
    }
  },
  components: {
    H1: H1,
    H2: H2,
    Narration: Narration,
    Word: Word
  },
  mounted: function() {
    console.log(this.unit);
  }
};
</script>
