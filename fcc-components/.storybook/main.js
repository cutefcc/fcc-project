const { resolve } = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": [resolve(__dirname, "../src"), resolve(__dirname, "../")],
    };
    // config.module.rules.push({
    //   test: /\.css/,
    //   use: [
    //     "style-loader",
    //     "css-loader",
    //     {
    //       loader: "postcss-loader",
    //     },
    //   ],
    // });
    return config;
  },
};
