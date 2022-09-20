// IMPORTS ...
const getData = require('./getData.js');
const searchData = require('./searchData.js');
const searchInfo = require('../functionalFunctions/searchInfo.js');
const sendSearchStatus = require('./sendSearchStatus.js');
const sendResultCount = require('./sendResultCount.js');
const findEra = require('./findEra.js');

// function to bridge the main file to all other function commands

module.exports = async function control(what, userInput, songName, replyTo, channels, counter, reply) {

    // what - what type of data would you like to retrieve
    // input - what song would you like to search for
    // songName - formatted version of the user input song choice //  maybe perform actinos within this funciton and create variable instead of having it as a payload
    // replyTo - the original command interaction
    // channels - the channel where the command was performed
    // counter - the amount of data found per each search
    // reply - empty string


    // Set Data Retrieval Type | what
    let dataType = what;

    // Get Data | songName

     let data = await getData(songName);
    // let data = getData(songName).then(results => {data = results})
let newcounter;
    // search data | data, dataType
    if (dataType == "info") {
       newCounter = await searchInfo(data, dataType, channels, counter);

    } if (dataType == "era") {
       newCounter = await findEra(data, dataType, channels, counter, userInput);

    } else {
       newCounter = await searchData(data, dataType, channels, counter);
    }


    console.log(newCounter);
      sendSearchStatus(replyTo, reply, channels);
      setTimeout(()=>{sendResultCount(replyTo, reply, channels, newCounter, dataType, userInput)}, 5.999 * 1000);
      //sendResultCount(replyTo, reply, channels, newCounter, dataType, userInput)

    }
