import log from "./note.js";
import changeVowels from "./changeVowels.js";
import multiply from "./multiply.js"
import chalk from "chalk";

console.log(chalk.green(log()));
console.log(chalk.blue(changeVowels("idan")));
console.log(chalk.red(multiply(7,4)));