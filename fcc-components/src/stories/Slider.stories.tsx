import { ComponentStory, ComponentMeta } from "@storybook/react";

// import { Button } from './Button';
import { CustomSlicer } from "@/stories/playGround/CustomSlicer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Slicer",
  component: CustomSlicer,
} as ComponentMeta<typeof CustomSlicer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomSlicer> = (args) => (
  <CustomSlicer />
);

export const Primary = Template.bind({});
