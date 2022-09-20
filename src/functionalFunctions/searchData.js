const formatFile = require('../functionalFunctions/formatFile.js');
const fileCheck = require('../functionalFunctions/fileCheck.js');
const sendResults = require('../functionalFunctions/sendResults.js');

module.exports = async function searchData(data, dataType, channels, counter) {
console.log(data);

    // IDEA - Maybe have the `✅ **Search Complete** ✅\n` ephemeral messages changed to just `Search Complete` but without the counter. and instead create an embed that sayins how many results were found so everyone to see

  if (data.length) {
    // send each song File that exists for said song
    // for every result found
    for (const result of data) {
      //if there is at least one link present in the song's songFile array
      if (result?.[dataType]?.[0]) {
        // for every String within the songFile array
        const files = [];
        const messages = [];

        for (const file of result[dataType]) {
          let resultsArray = formatFile(file);
          for (let resultFile of resultsArray) {
            console.log(`Checking > . > . > . > song # ${counter+1}`);
            console.log(`File Link : ${resultFile}`);
            // create function for this proccess
            resultFile = resultFile.replace(" ", "").replace('C:\\Users\\wildc\\Desktop\\Bots\\Abyss (V 0.0.1)\\ ', '');
            const fileCheckResult = await fileCheck(resultFile)
            console.log(`the file result value is : ${fileCheckResult}`)
              if (fileCheckResult) {
                messages.push(resultFile)
              // await sendResults(resultFile, counter, channels, dataType)
              // counter++;
            } else {
              files.push(resultFile)
              // await sendResults(resultFile, counter, channels, dataType)
              // channels.sendTyping();
              // counter++;
              //               resultFile = resultFile.replace('C:\\Users\\wildc\\Desktop\\Bots\\Abyss (V 0.0.1)\\ ', '');
              //               channels.send(`${resultFile}`);
              //               console.log(`\nSent Song Link # (${counter+1})`);
              //               counter++;

            }

          }
        }
        console.log("files array : " + files);
        for(const file of files){
          channels.sendTyping();
            await sendResults(file, counter, channels, dataType, 'files')
            counter++;
        }
        console.log("message array : " + messages);
        for(const message of messages){
            await sendResults(message, counter, channels, dataType, 'message')
            //channels.sendTyping();
            counter++;
        }
      }
      // if there isnt a song File link existing in the current song result
    }
  }

return counter;
}
