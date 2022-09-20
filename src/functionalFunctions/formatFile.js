module.exports = function formatFile(input) {
console.log(`Input to FormatFile : ${input}`);
  if (input.includes("|")) {
  	var inputArray = input.split("|");
		console.log(`\n\n\n\nInput Array : ${inputArray}\n\n\n\n\n AND InputArray[0] : ${inputArray[0]}`);

			let outputArray = inputArray.filter(item => item);
		console.log(`InputArray Length : ${inputArray.length}`);
		console.log(`\n\n\n\n\n\n\nOutputArray Length : ${outputArray.length}`);
		return outputArray;
  } else{
		let formatted = [];
		formatted[0] = input.toString();
		console.log(`Formatted File : ${formatted}`);
	    return formatted;
	}
	};
  //console.log(`\n\n\n${analyticIf}`);
