import utils from "./utils.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const yargs = require("yargs");

yargs.command({
  command: "create",
  describe: "User Creation",
  builder: {
    name: {
      describe: "Name",
      demandOption: true,
      type: "string",
    },
  },
  builder: {
    email: {
      describe: "Email",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    utils.createUser(argv.name, argv.email);
  },
});

yargs.command({
  command: "read",
  describe: "Show specific users data",
  builder: {
    id: {
      describe: "Number",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    utils.readUser(argv.id);
  },
});

yargs.command({
  command: "delete",
  describe: "User deletion",
  builder: {
    id: {
      describe: "Number",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    utils.deleteUser(argv.id);
  },
});

yargs.command({
  command: "update",
  describe: "Update users data",
  builder: {
    id: {
      describe: "Number",
      demandOption: true,
      type: "string",
    },
  },
  builder: {
    name: {
      describe: "Name",
      demandOption: true,
      type: "string",
    },
  },
  builder: {
    email: {
      describe: "Email",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    utils.updateUser(argv.id, argv.name, argv.email);
  },
});

yargs.parse();
