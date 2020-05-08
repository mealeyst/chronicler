import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import classNames from "classnames";

export enum ChoiceTypes {
  Friendly = "0",
  Aggressive = "1",
  Neutral = "2"
}

const setClasses = (
  selected: boolean,
  defaultClasses: Array<string>,
  selectedClasses: Array<string>
) => {
  if (selected) {
    return selectedClasses;
  }
  return defaultClasses;
};

@Component({
  template: `
    <button :class="classNames" v-on:click="onClick">
      <slot></slot>
    </button>
  `
})
export class Choice extends Vue {
  @Prop(String) readonly className: string | undefined;
  @Prop(String) readonly type!: ChoiceTypes;
  @Prop(Boolean) readonly selected!: boolean;
  onClick(): void {
    this.$emit("clicked", 0.1);
  }
  get classNames(): string {
    const classes = [
      "hover:text-white",
      "p-2",
      "rounded",
      "transition",
      "ease-in",
      "duration-200"
    ];
    switch (this.type) {
      case ChoiceTypes.Friendly:
        classes.push(
          ...setClasses(
            this.selected,
            ["text-blue-700", "hover:bg-blue-700"],
            ["text-white", "bg-blue-800"]
          )
        );
        break;
      case ChoiceTypes.Aggressive:
        classes.push(
          ...setClasses(
            this.selected,
            ["text-red-700", "hover:bg-red-700"],
            ["text-white", "bg-red-800"]
          )
        );
        break;
      default:
        classes.push(
          ...setClasses(
            this.selected,
            ["text-gray-700", "hover:bg-gray-700"],
            ["text-white", "bg-gray-800"]
          )
        );
    }
    return classNames(classes.join(" "), this.className);
  }
}
