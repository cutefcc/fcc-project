import "../src/App.css";
import { themes } from "@storybook/theming";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming";

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  themes: {
    default: "fccdark",
    disable: true,
    list: [
      { name: "fccdark", class: "theme-dark" },
      { name: "fcclight", class: "theme-light" },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: {
      ...themes.dark,
      appBg: "#1b1b24",
      appContentBg: "#1b1b24",
      appBorderRadius: 4,
      barTextColor: "white",
      barBg: "#1b1b24",
      inputBorderRadius: 4,
    },
  },
};
const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={defaultTheme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
