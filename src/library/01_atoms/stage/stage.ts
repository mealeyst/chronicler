import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  template: `
    <div
      class="h-screen"
      style="background: url('images/stage/background.jpg') no-repeat; background-size: 100%;"
    >
      <slot></slot>
    </div>
  `
})
export class Stage extends Vue {
  @Prop(String) readonly content: string | undefined;
}