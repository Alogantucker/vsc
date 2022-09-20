// get data from JSON
const fs = require('fs');
let data = fs.readFileSync('./src/information.json');
let songInfo = JSON.parse(data);

var dataArray = [];
for (var object of songInfo) {
	dataArray.push(object);
}



module.exports = function format(input) {

  if (input.includes("|")) {
  	var inputArray = input.split("|");
		for (var i = 0; i < inputArray.length; i++) {
			var outputArray = [];
			 outputArray[i] = inputArray[i].toString()
		      .toLowerCase()
		      .replace(/\s/g, "")
		      .replaceAll(".", "")
		      .replaceAll("'", "")
		      .replaceAll("(", "")
		      .replaceAll(")", "")
		      .replaceAll("_", "")
		      .replaceAll('"', "")
		      .replaceAll(",", "")
		      .replaceAll("-", "")
		      .replaceAll("\\", "")
		      .replaceAll("~", "")
		      .replaceAll("`", "")
		      .replaceAll("!", "")
		      .replaceAll("@", "")
		      .replaceAll("#", "")
		      .replaceAll("$", "s")
		      .replaceAll("%", "")
		      .replaceAll("^", "")
		      .replaceAll("&", "and")
		      .replaceAll("*", "")
		      .replaceAll("+", "")
		      .replaceAll("=", "")
		      .replaceAll("[", "")
		      .replaceAll("]", "")
		      .replaceAll("{", "")
		      .replaceAll("}", "")
		      .replaceAll(":", "")
		      .replaceAll(";", "")
		      .replaceAll("<", "")
		      .replaceAll(">", "")
		      .replaceAll("?", "")
		      .replaceAll("|", "");
					//.replaceAll("/", "")
		}
		return outputArray;
  } else{
		let formatted = [];
		formatted[0] = input.toString()
	      .toLowerCase()
	      .replace(/\s/g, "")
	      .replaceAll(".", "")
	      .replaceAll("'", "")
	      .replaceAll("(", "")
	      .replaceAll(")", "")
	      .replaceAll("_", "")
	      .replaceAll('"', "")
	      .replaceAll(",", "")
	      .replaceAll("-", "")
	      // .replaceAll("/", "")
	      .replaceAll("\\", "")
	      .replaceAll("~", "")
	      .replaceAll("`", "")
	      .replaceAll("!", "")
	      .replaceAll("@", "")
	      .replaceAll("#", "")
	      .replaceAll("$", "s")
	      .replaceAll("%", "")
	      .replaceAll("^", "")
	      .replaceAll("&", "and")
	      .replaceAll("*", "")
	      .replaceAll("+", "")
	      .replaceAll("=", "")
	      .replaceAll("[", "")
	      .replaceAll("]", "")
	      .replaceAll("{", "")
	      .replaceAll("}", "")
	      .replaceAll(":", "")
	      .replaceAll(";", "")
	      .replaceAll("<", "")
	      .replaceAll(">", "")
	      .replaceAll("?", "")
	      .replaceAll("|", "");
	    return formatted;
	}
	};
