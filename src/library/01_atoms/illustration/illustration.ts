import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component({
  template: `<img :src="src" />`
})
export class Illustration extends Vue {
  @Prop(String) readonly src: string | undefined
}
