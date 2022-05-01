import { ComponentStory, ComponentMeta } from "@storybook/react";

// import { Button } from './Button';
import { FccTextField } from "@/stories/playGround/TextField";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/FccTextField",
  component: FccTextField,
} as ComponentMeta<typeof FccTextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FccTextField> = (args) => (
  <FccTextField />
);

export const Primary = Template.bind({});
