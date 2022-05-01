// 给tailwind写插件
const plugin = require("tailwindcss/plugin");
const fccStyles = require("./fcc-styles");
const fccComponents = plugin(
  ({ addBase, addComponents, theme }) => {
    console.log(
      "🍺fcc-custom-tailwind-plugin启动成功🍺",
      addBase,
      addComponents,
      theme
    );
    // 把fccStyles 给注到全局css里面
    addComponents(fccStyles);
  }
  // {
  // theme: {
  // color: {
  // <div class="bg-fcc-select-hover"></div>
  //   "fcc-select-hover": "var(--sc-bgcolor)",
  // },
  // },
  // }
);
module.exports = fccComponents;
