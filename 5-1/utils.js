import chalk from "chalk";
import uniqid from "uniqid";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");
// const uniqid = require("uniqid");

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (err) {
    return [];
  }
};

// const duplicates = (data, category) => {
//   return data.filter((user) => {
//     return user.category === category;
//   });
// };

const saveUsers = (users) => {
  const dataJson = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJson);
};

const createUser = (name, email) => {
  const users = loadUsers();
  // const duplicatedNames = duplicates(users, name);
  // const duplicatedEmails = duplicates(users, email);
  const duplicatedNames = users.filter((user) => {
    return user.name === name;
  });
  const duplicatedEmails = users.filter((user) => {
    return user.email === email;
  });

  if (duplicatedNames.length === 0 && duplicatedEmails.length === 0) {
    users.push({
      id: uniqid(),
      name: name,
      email: email,
    });
    saveUsers(users);
    console.log(chalk.green.inverse("New user has been added!"));
  } else if (duplicatedNames.length !== 0 && duplicatedEmails.length !== 0) {
    console.log(
      chalk.red.inverse(
        `Both name: ${name} and email: ${email} are already taken...`
      )
    );
    return;
  } else if (duplicatedNames.length !== 0) {
    console.log(chalk.red.inverse(`Name: ${name} is already taken...`));
    return;
  } else {
    console.log(chalk.red.inverse(`Email: ${email} is already taken...`));
    return;
  }
};

const readUser = (id) => {
  const users = loadUsers();
  const foundUser = users.filter((user) => {
    return user.id === id;
  });
  if (foundUser.length === 0) {
    console.log(chalk.red.inverse(`No such user with id: ${id}`));
    return;
  }
  console.log(
    chalk.blue.inverse(
      `id: ${id}, name: ${foundUser[0].name}, email: ${foundUser[0].email}`
    )
  );
};

const deleteUser = (id) => {
  const users = loadUsers();
  const reducedUsers = users.filter((user) => {
    return user.id !== id;
  });
  if (users.length === reducedUsers.length) {
    console.log(chalk.red.inverse(`No such user with id: ${id}`));
    return;
  }
  // const foundUser = users.filter((user) => {
  //   return user.id === id;
  // });
  // const userIndex = users.findIndex((user) => {
  //   return user.id === id;
  // });
  // if (userIndex < 0) {
  //   console.log("No such user with this id...");
  //   return;
  // }
  // users.splice(userIndex, 1);
  saveUsers(reducedUsers);
  // console.log(
  //   `user => (id: ${foundUser[0].id} , name: ${foundUser[0].name}, email: ${foundUser[0].email}) was deleted`
  // );
  console.log(chalk.green.inverse(`user => id: ${id} was deleted`));
};

const updateUser = (id, name, email) => {
  const users = loadUsers();
  const userIndex = users.findIndex((user) => {
    return user.id === id;
  });
  if (userIndex < 0) {
    console.log(chalk.red.inverse(`No such user with id: ${id}`));
    return;
  }
  if ((name.length === 0 && email.length === 0) || (users[userIndex].name === name && users[userIndex].email === email)) {
    console.log(chalk.red.inverse(`Nothing has been changed for user ${id}`));
  } else if (email.length === 0 || users[userIndex].email === email) {
    users[userIndex].name = name;
    saveUsers(users);
    console.log(chalk.green.inverse(`User id: ${id} updated name: ${name}`));
  } else if (name.length === 0 || users[userIndex].name === name) {
    users[userIndex].email = email;
    saveUsers(users);
    console.log(chalk.green.inverse(`User id: ${id} updated email: ${email}`));
  } else {
    users[userIndex].name = name;
    users[userIndex].email = email;
    saveUsers(users);
    console.log(
      chalk.green.inverse(`User ${id} updated name: ${name}, updted email: ${email}`)
    );
  }
};

// module.exports = {
//   createUser: createUser,
//   readUser: readUser,
//   deleteUser: deleteUser,
//   updateUser: updateUser,
// };

const utils = {
  createUser: createUser,
  readUser: readUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
};

export default utils;
