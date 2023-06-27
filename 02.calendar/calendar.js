var argv = require("minimist")(process.argv.slice(2));
const date = new Date();
const month = argv.m ? argv.m : date.getMonth() + 1;
const year = argv.y ? argv.y : date.getFullYear();
const lastDate = new Date(year, month, 0).getDate();
const wday = new Date(year, month - 1, 1).getDay();

console.log("日 月 火 水 木 金 土");
console.log(`${month}月 ${year}`.padStart(13, " "));
process.stdout.write(" ".repeat(3 * wday));
for (let date = 1; date <= lastDate; date++) {
  process.stdout.write(String(date).padStart(2, " ") + " ");
  if ((date + wday) % 7 === 0) {
    console.log("\n");
  }
}
console.log("\n");
