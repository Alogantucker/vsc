const formatFile = require('../functionalFunctions/formatFile.js');
const fileCheck = require('../functionalFunctions/fileCheck.js');
const sendResults = require('../functionalFunctions/sendResults.js');
const findEra = require('../functionalFunctions/findEra.js');

module.exports = async function findEra(data, dataType, channels, counter, userInput = '') {
console.log(data + "this is the log");
dataType = 'era';
console.log(dataType);
let sendAs = '';

    // IDEA - Maybe have the `✅ **Search Complete** ✅\n` ephemeral messages changed to just `Search Complete` but without the counter. and instead create an embed that sayins how many results were found so everyone to see
if (dataType != "era") {
  if (data.length) {
    // send each song File that exists for said song
    // for every result found
    for (const result of data) {
      //if there is at least one link present in the song's songFile array
      if (result?.[dataType]?.[0]) {
        // for every String within the songFile array

        let messages = [];

        for (const file of result[dataType]) {
          let resultsArray = formatFile(file);
          for (let resultFile of resultsArray) {
            console.log(`Checking > . > . > . > song # ${counter+1}`);
            console.log(`File Link : ${resultFile}`);
            resultFile = resultFile.replace(" ", "").replace('C:\\Users\\wildc\\Desktop\\Bots\\Abyss (V 0.0.1)\\ ', '');
              messages.push(resultFile)
          }
        }
        console.log("files array : " + files);
        for(const file of files){
          channels.sendTyping();
          sendAs = 'files';
            await sendResults(file, counter, channels, dataType, sendAs)
            counter++;
        }
        console.log("message array : " + messages);
        for(const message of messages){
          sendAs = 'message';
            await sendResults(message, counter, channels, dataType, sendAs)
            //channels.sendTyping();
            counter++;
        }
      }
      // if there isnt a song File link existing in the current song result
    }
  }
} else {
  if (data.length) {
    // send each song File that exists for said song
    // for every result found
    let colAttributeArray  = [ "era"]
    for (let typeOfInfo of colAttributeArray){
      for (const result of data) {
      //if there is at least one link present in the song's songFile array
      if (result?.[typeOfInfo]?.[0]) {
        let messages = [];

        for (const era of result[typeOfInfo]) {
            console.log(`Checking > . > . > . > song # ${counter+1}`);
            console.log(`era Text : ${era}`);
            // create function for this proccess

              messages.push(era)
            }
        console.log("era array : " + messages);
        for(const message of messages){
            await sendResults(message, counter, channels, dataType, sendAs, userInput)
            counter++;
        }
      }
    }
    }
  }
}


return counter;
}
