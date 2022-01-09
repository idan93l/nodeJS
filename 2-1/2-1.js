const fs = require("fs");

// 1)
fs.writeFileSync("./nodeJS/2-1/notes.txt", "first text written with node js");

// // 2)
fs.copyFileSync("./nodeJS/2-1/notes.txt", "./nodeJS/2-1/copy.txt");
console.log("notes.txt was copied to destination.txt");

// // 3)
fs.renameSync("./nodeJS/2-1/copy.txt", "./nodeJS/2-1/changedName.txt");
console.log("copy.txt name was changed to changedName.txt");

// // 4)
fs.appendFileSync("./nodeJS/2-1/changedName.txt", ` "new text!"`);
console.log("changedName.txt been updated");