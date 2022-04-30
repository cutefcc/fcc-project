// 给tailwind写插件
const plugin = require("tailwindcss/plugin");
const fccComponents = plugin(({ addBase, addComponents, theme }) => {
  console.log(
    "🍺fcc-custom-tailwind-plugin启动成功🍺",
    addBase,
    addComponents,
    theme
  );
});
mudule.exports = fccComponents;
