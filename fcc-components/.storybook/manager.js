import fccTheme from "./fccTheme";
import { addons } from "@storybook/addons";

addons.setConfig({
  sidebar: {
    showRoots: false,
  },
  toolbar: {
    "storybook/background": { hidden: true },
  },
  theme: fccTheme,
});
