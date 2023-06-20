var argv = require("minimist")(process.argv.slice(2));
const current_date = new Date();
const current_month = argv.m ? argv.m : current_date.getMonth() + 1;
const current_year = argv.y ? argv.y : current_date.getFullYear();
const last_date = new Date(current_year, current_month, 0).getDate();
const wday = new Date(current_year, current_month - 1, 1).getDay();
const wdays = ["日", "月", "火", "水", "木", "金", "土", "\n"];

wdays.forEach((wday) => process.stdout.write(wday.padStart(2, " ")));
console.log(`${current_month}月 ${current_year}`.padStart(13, " "));
process.stdout.write(" ".repeat(3 * wday));
for (let date = 1; date <= last_date; date++) {
  process.stdout.write(String(date).padStart(3, " "));
  if ((date + wday) % 7 == 0) {
    console.log("\n");
  }
}
console.log("\n");
