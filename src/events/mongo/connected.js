const chalk = require("chalk");
console.log("Checked Connected");
module.exports = {
    name: "connected",
    execute(client){
        console.log(chalk.green("[Database Status]: Connected."));
    }
}