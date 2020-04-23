import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  template: `
    <section v-bind:id="name">
      <slot></slot>
    </section>
  `
})
export class Chapter extends Vue {
  @Prop(String) readonly name: string | undefined;
}
