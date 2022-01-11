import chalk from 'chalk';
import {createRequire} from "module";
const require = createRequire(import.meta.url);
const { demandOption } = require('yargs');
const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'Addition',
  builder: {
    num1: {
      describe: "Number",
      demandOption: true,
      type: 'number'
    }
  },
  builder: {
    num2: {
      describe: "Number",
      demandOption: true,
      type: 'number'
    }
  },
  handler: function (argv) {
    console.log(`${chalk.yellow(argv.num1)} + ${chalk.blue(argv.num2)} = ${chalk.green(argv.num1 + argv.num2)}`);
  }
});

yargs.command({
  command: 'sub',
  describe: 'Subtruction',
  builder: {
    num1: {
      describe: "Number",
      demandOption: true,
      type: 'number'
    }
  },
  builder: {
    num2: {
      describe: "Number",
      demandOption: true,
      type: 'number'
    }
  },
  handler: function (argv) {
    console.log(`${chalk.yellow(argv.num1)} - ${chalk.blue(argv.num2)} = ${chalk.green(argv.num1 - argv.num2)}`);
  }
});

yargs.command({
  command: 'mult',
  describe: 'Multiplication',
  builder: {
    num1: {
      describe: "Number",
      demandOption: true,
      type: 'number'
    }
  },
  builder: {
    num2: {
      describe: "Number",
      demandOption: true,
      type: 'number'
    }
  },
  handler: function (argv) {
    console.log(`${chalk.yellow(argv.num1)} * ${chalk.blue(argv.num2)} = ${chalk.green(argv.num1 * argv.num2)}`);
  }
});

yargs.command({
  command: 'pow',
  describe: 'Exponentiation',
  builder: {
    num: {
      describe: "Number",
      demandOption: true,
      type: 'number'
    }
  },
  handler: function (argv) {
    console.log(`${chalk.red(argv.num)} ^ ${chalk.cyan(2)} = ${chalk.blue(Math.pow(argv.num, 2))}`);
  }
})

yargs.parse();