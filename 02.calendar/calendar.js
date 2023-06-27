var argv = require("minimist")(process.argv.slice(2));
const currentDate = new Date();
const currentMonth = argv.m ? argv.m : currentDate.getMonth() + 1;
const currentYear = argv.y ? argv.y : currentDate.getFullYear();
const lastDate = new Date(currentYear, currentMonth, 0).getDate();
const wday = new Date(currentYear, currentMonth - 1, 1).getDay();
const wdays = ["日", "月", "火", "水", "木", "金", "土", "\n"];

wdays.forEach((wday) => process.stdout.write(wday.padStart(2, " ")));
console.log(`${currentMonth}月 ${currentYear}`.padStart(13, " "));
process.stdout.write(" ".repeat(3 * wday));
for (let date = 1; date <= lastDate; date++) {
  process.stdout.write(String(date).padStart(3, " "));
  if ((date + wday) % 7 == 0) {
    console.log("\n");
  }
}
console.log("\n");
