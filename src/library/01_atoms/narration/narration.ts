import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  template: `
    <audio :src="src" autoplay></audio>
  `
})
export class Narration extends Vue {
  @Prop(String) readonly src: string | undefined;
}
