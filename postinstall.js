/* Modules */
const figlet = require("figlet");
const chalk = require("chalk");

console.log(
  chalk.blue(
    figlet.textSync("discord.js-pagination", {
      horizontalLayout: "default",
      verticalLayout: "default",
      font: "Small",
    })
  )
);

console.log(
  chalk.underline(
    chalk.blue(`Thank you for installing ${require("./package.json").name}.`)
  )
);

console.log(
  `${chalk.bold(
    chalk.blue(`Github: https://github.com/XoAlone/discordjs-pagination`)
  )}\n${chalk.bold(
    chalk.blue(`Support: https://github.com/XoAlone/discordjs-pagination`)
  )}`
);
