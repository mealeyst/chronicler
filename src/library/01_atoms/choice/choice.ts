import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import classNames from "classnames";

export enum ChoiceTypes {
  Friendly = "0",
  Aggressive = "1",
  Neutral = "2"
}

@Component({
  template: `
    <button :class="classNames" onClick="clickHandler">
      <slot></slot>
    </button>
  `
})
export class Choice extends Vue {
  @Prop(String) readonly className: string | undefined;
  @Prop(String) readonly type!: ChoiceTypes;
  @Prop(Function) readonly clickHandler: any
  
  get classNames(): string {
    let textColor = "text-gray-700";
    console.log(typeof this.type, typeof ChoiceTypes.Friendly);
    switch (this.type) {
      case ChoiceTypes.Friendly:
        console.log('We hitting here baby!')
        textColor = "text-blue-700";
        break;
      case ChoiceTypes.Aggressive:
        textColor = "text-red-700";
        break;
    }
    return classNames(textColor, this.className);
  }
}