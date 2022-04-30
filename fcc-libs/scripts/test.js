const minimist = require("minimist"); // 请求参数
const rawArgs = process.argv.slice(2);
const args = minimist(rawArgs);
const path = require("path");
const figlet = require("figlet"); // 生成文字assic码
const versionStr = figlet.textSync("Fcc Lib");
const Printer = require("@darkobits/lolcatjs"); // 彩色字符块
let rootDir = path.resolve(__dirname, "../");
const ora = require("ora"); // loading
if (args.p) {
  rootDir = rootDir + "/packages/" + args.p;
  const _version = require(rootDir + "/package.json").name;
  console.log(
    Printer.default.fromString(`${_version} test cases \n${versionStr}`)
  );
}
const jestArgs = ["--runInBand", "--rootDir", rootDir];
const spinner = ora(`\n 🚗 =====> running: jest${jestArgs}`).start();
require("jest").run(jestArgs);
spinner.stop();
