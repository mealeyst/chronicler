<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  template: `
    <span
      class="inline-block mr-1"
      style="color: hsl(230, 0%, 45%);"
      ref="word"
    >
      <slot></slot>
    </span>
  `
})
class Word extends Vue {
  @Prop(Number) readonly start: number | undefined;
  @Prop(Number) readonly end: number | undefined;

  mounted() {
    if (this.start && this.end) {
      const highlightKeyframes = new KeyframeEffect(
        this.$refs.word as HTMLElement,
        [
          { color: "hsl(230, 0%, 45%)" },
          { color: "hsl(230, 0%, 0%)" },
          { color: "hsl(230, 0%, 45%)" }
        ],
        {
          duration: (this.end - this.start) * 1000,
          easing: "ease-in-out",
          delay: this.start * 1000
        }
      );
      const highlightAnimation = new Animation(
        highlightKeyframes,
        document.timeline
      );
      highlightAnimation.play();
    }
  }
}

export default Word;
</script>
