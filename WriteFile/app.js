const fs = require("fs");
fs.writeFile("WriteFile/file.txt", "Hello World!", function (err) {
  if (err) throw err;
  console.log("File saved!");
});
