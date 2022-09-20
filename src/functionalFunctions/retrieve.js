//const Guild = require("../../schemas/guild");
const Song = require("../schemas/songSchema");
//const { SlashCommandBuilder } = require("discord.js");
const mongoose = require("mongoose");
//const escapeStringRegexp = require("escape-string-regexp");
const format = require('../functionalFunctions/format.js');
const formatFile = require('../functionalFunctions/formatFile.js');
const fileCheck = require('../functionalFunctions/fileCheck.js');
 //const escapeStringRegexp = require('escape-string-regexp');

console.log("Retrieval Started . . . . . . . . . . . . . loading");
//const Person = mongoose.model('Person'  , yourSchema);
module.exports = async function retrieve(what, input, songName, replyTo, channels, counter, reply) {
  let songFile = 'songFile';
  let coverArt = 'coverArt';
  let snippet = 'snippet';
  let session = 'session';
  let info = 'info';
  let era = 'era';
  //let results = await Song.find({ title: songName }, (err) => {if(err){console.log(`An Error occured during search : ${err}`)}}).clone();


//let results = await Song.find({ title: songName.toString() }).exec();
    function escapeStringRegexp(string) {
        if (typeof string !== 'string') {
            throw new TypeError('Expected a string');
        }

        // Escape characters with special meaning either inside or outside character sets.
        // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
        return string
            .replace(/[|{}()[\]^$+*?.]/g, '\\$&')
            .replace(/-/g, '\\x2d');
    }

const $regex = new RegExp(escapeStringRegexp(songName.toString()));
let results = await Song.find({ title: { $regex } }).exec();
 //let results = await Song.find({}).exec();
 //let results = await Song.findById("63102d38e14f4653d8065c3d");
// let results = await Song.find({coverFile: 'https://media.discordapp.net/attachments/978161565691953184/997221941926699098/hh_100_Band_Jugg.png'}).exec();
//let results = await Song.find({ title: "100bandjugg" }).exec();
    // Get Song Link
    switch (what) {
      case songFile:

        // if there is at least one result that matches the songName
        if (results.length) {
          // send each song File that exists for said song
          // for every result found
         for (const result of results){
            //if there is at least one link present in the song's songFile array
            if (result.songFile[0]) {
            // for every String within the songFile array
          for (const file of result.songFile){
            let resultsArray = formatFile(file);
            for (let resultFile of resultsArray){
              console.log(`Checking > . > . > . > song # ${counter+1}`);
              console.log(`File Link : ${resultFile}`);
              if (resultFile.indexOf(".jpg") != -1 || resultFile.indexOf(".wav") != -1 || resultFile.indexOf(".png") != -1 || resultFile.indexOf(".mp3") != -1 || resultFile.indexOf(".mp4") != -1 || resultFile.indexOf(".m4a") != -1 || resultFile.indexOf(".mov") != -1) {
                if (fileCheck(resultFile)){
                channels.sendTyping();
                resultFile = resultFile.replace(" ", "");
                console.log('Result File Path : ' + resultFile);
                resultFile = resultFile.replace('C:\\Users\\wildc\\Desktop\\Bots\\Abyss (V 0.0.1)\\ ', '');
                channels.send({  files: [`${resultFile}`]});
              console.log(`\nSent Song File # (${counter+1})`);
              counter++;
            } else {
              channels.sendTyping();
              resultFile = resultFile.replace('C:\\Users\\wildc\\Desktop\\Bots\\Abyss (V 0.0.1)\\ ', '');
              channels.send(`${resultFile}`);
              console.log(`\nSent Song Link # (${counter+1})`);
              counter++;
            }
          }
            }
            }
          }
          // if there isnt a song File link existing in the current song result
        }

      replyTo.reply({
        content: `✅ **Search Complete** ✅\n \[ **${counter}** \] ***${input}*** **Results Found :** `,
        ephemeral: true,
      });
    } else {
      replyTo.reply({
        content: `❌ **No Results For** ***${input}***\n *please try again* ❌`,
        ephemeral: true,
      });
    }



        break;


        case coverArt:

          // if there is at least one result that matches the songName
          console.log(`Song Name = ${songName}`);
          console.log(`Results  & Length : ${results} & ${results.length}`);
        if (results.length) {
          // send each song File that exists for said song

          // for every result found
          for (const result of results){
            //if there is at least one link present in the song's songFile array
            if (result.coverFile[0]) {
            // for every String within the songFile array
          for (const file of result.coverFile){
            let resultsArray = formatFile(file);
            for (const resultFile of resultsArray){
              console.log(`Checking > . > . > . > Cover # ${counter+1}`);
              console.log(`File Link : ${resultFile}`);
              if (resultFile.indexOf(".jpg") != -1 || resultFile.indexOf(".wav") != -1 || resultFile.indexOf(".png") != -1 || resultFile.indexOf(".mp3") != -1 || resultFile.indexOf(".mp4") != -1 || resultFile.indexOf(".m4a") != -1 || resultFile.indexOf(".mov") != -1) {
                if (fileCheck(resultFile)){
                channels.send({  files: [`${resultFile}`]});
              console.log(`\nSent Cover Art File # (${counter+1})`);
              counter++;
            } else {
              channels.sendTyping();
              channels.send(`${resultFile}`);
              console.log(`\nSent Cover Art Link # (${counter+1})`)
              counter++;
            }
          }
          }
          }
        }
      }
          replyTo.reply({
          content: `✅ **Search Complete** ✅\n \[ **${counter}** \] ***${input}*** **Results Found :** `,
          ephemeral: true,
        });
      } else {
        replyTo.reply({
          content: `❌ **No Results For** ***${input}***\n *please try again* ❌`,
          ephemeral: true,
        });
      }



          break;


  // Get Snippets
          case snippet:

            // if there is at least one result that matches the songName
            if (results.length) {
              // send each song File that exists for said song
              // for every result found
             for (const result of results){
                //if there is at least one link present in the song's songFile array
                if (result.snipFile[0]) {
                // for every String within the songFile array
              for (const file of result.snipFile){
                let resultsArray = formatFile(file);
                for (const resultFile of resultsArray){
                  console.log(`Checking > . > . > . > Snippet # ${counter+1}`);
                  console.log(`File Link : ${resultFile}`);
                  if (resultFile.indexOf(".jpg") != -1 || resultFile.indexOf(".wav") != -1 || resultFile.indexOf(".png") != -1 || resultFile.indexOf(".mp3") != -1 || resultFile.indexOf(".mp4") != -1 || resultFile.indexOf(".m4a") != -1 || resultFile.indexOf(".mov") != -1) {
              if (fileCheck(resultFile)){
                      channels.sendTyping();
                        channels.send({  files: [`${resultFile}`]});
                      console.log(`\nSent Snippet File # (${counter+1})`);
                      counter++;
                  } else {
                    channels.sendTyping();
                    channels.send(`${resultFile}`);
                    console.log(`\nSent Snippet Link # (${counter+1})`);
                    counter++;
                  }
                }}
                }
              }
              // if there isnt a song File link existing in the current song result
            }
          replyTo.reply({
            content: `✅ **Search Complete** ✅\n \[ **${counter}** \] ***${input}*** **Results Found :** `,
            ephemeral: true,
          });
          } else {
          replyTo.reply({
            content: `❌ **No Results For** ***${input}***\n *please try again* ❌`,
            ephemeral: true,
          });
          }



            break;



          // Get Sessions
          case session:

            // if there is at least one result that matches the songName
            if (results.length) {
              // send each song File that exists for said song
              // for every result found
             for (const result of results){
                //if there is at least one link present in the song's songFile array
                if (result.sessionFile[0]) {
                // for every String within the songFile array
              for (const file of result.sessionFile){
                let resultsArray = formatFile(file);
                for (const resultFile of resultsArray){
                  console.log(`Checking > . > . > . > Session # ${counter+1}`);
                  console.log(`File Link : ${resultFile}`);
                  if (resultFile.indexOf(".jpg") != -1 || resultFile.indexOf(".wav") != -1 || resultFile.indexOf(".png") != -1 || resultFile.indexOf(".mp3") != -1 || resultFile.indexOf(".mp4") != -1 || resultFile.indexOf(".m4a") != -1 || resultFile.indexOf(".mov") != -1) {
                if (fileCheck(resultFile)){
                      channels.sendTyping();
                        channels.send({  files: [`${resultFile}`]});
                      console.log(`\nSent Session File # (${counter+1})`);
                      counter++;
                  } else {
                    channels.sendTyping();
                    channels.send(`${resultFile}`);
                    console.log(`\nSent Session Link # (${counter+1})`);
                    counter++;
                  }
                }}
                }
              }
              // if there isnt a song File link existing in the current song result
            }

          replyTo.reply({
            content: `✅ **Search Complete** ✅\n \[ **${counter}** \] ***${input}*** **Results Found :** `,
            ephemeral: true,
          });
          } else {
          replyTo.reply({
            content: `❌ **No Results For** ***${input}***\n *please try again* ❌`,
            ephemeral: true,
          });
          }



            break;

          // Get info
          case info:
          let erax = "x";
          let statusx = "x";
          let dateReleasedx = "x";
          let dateLeakedx = "x";
          let dateRecordedx = "x";
          let producedByx = "Produced By : ";
          let featuresx = "Features : ";
          let infoMessage = `:face_with_monocle:  **${input} Info : ** \n`;
          let g = 0;

let totalResults = results.length
            // if there is at least one result that matches the songName
          if (results.length) {
            // send each song Link that exists for said song
            for (const result of results){
              //if there is at least one link present in the song's songFile array
              if (result.era[0]) {
            for (const file of result.era){
              let resultsArray = formatFile(file);
                for (const entry of resultsArray){
                channels.sendTyping();
                erax = `Era : ${entry}\n`;
                console.log(`\nAdded Era: ${entry} | (${counter+1})`);
                counter++;

              }

            }
            // if there isnt a song File link existing in the current song result
          } else {
            if (g <= totalResults) {
              if (erax === "x") {
                erax =`Era : *unknown*`;
              }
            }
          }
          // status Info

          if (result.status[0]) {
        for (const file of result.status){
          let resultsArray = formatFile(file);
            for (const entry of resultsArray){
            channels.sendTyping();
            statusx = `Status : ${entry}\n`;
            console.log(`\nAdded Status: ${entry} | (${counter+1})`);
            counter++;

          }

        }
        // if there isnt a song File link existing in the current song result
      } else {
        if (g <= totalResults) {
          if (statusx === "x") {
            statusx =`Status : *unknown*`;
          }
        }
      }

      // date released Info

      if (result.dateReleased[0]) {
    for (const file of result.dateReleased){
      let resultsArray = formatFile(file);
        for (const entry of resultsArray){
        channels.sendTyping();
        dateReleasedx = `Date Released : ${entry}\n`;
        console.log(`\nAdded Date Released: ${entry} | (${counter+1})`);
        counter++;

      }

    }
    // if there isnt a song File link existing in the current song result
  } else {
    if (g <= totalResults) {
      if (dateReleasedx === "x") {
        dateReleasedx =`Date Released : *N/A*`;
      }
    }
  }

  // date Leaked Info

  if (result.dateLeaked[0]) {
for (const file of result.dateLeaked){
  let resultsArray = formatFile(file);
    for (const entry of resultsArray){
    channels.sendTyping();
    dateLeakedx = `Date Leaked : ${entry}\n`;
    console.log(`\nAdded Date Leaked: ${entry} | (${counter+1})`);
    counter++;

  }

}
// if there isnt a song File link existing in the current song result
} else {
if (g <= totalResults) {
  if (dateLeakedx === "x") {
    dateLeakedx =`Date Leaked : *unknown*`;
  }
}
}

// date Recorded Info

if (result.dateRecorded[0]) {
for (const file of result.dateRecorded){
let resultsArray = formatFile(file);
  for (const entry of resultsArray){
  channels.sendTyping();
  dateRecordedx = `Date Recorded : ${entry}\n`;
  console.log(`\nAdded Date Recorded: ${entry} | (${counter+1})`);
  counter++;

}

}
// if there isnt a song File link existing in the current song result
} else {
if (g <= totalResults) {
if (dateRecordedx === "x") {
  dateRecordedx =`Date Recorded : *unknown*`;
}
}
}

// date Recorded Info

if (result.producedBy[0]) {
for (const file of result.producedBy){
let resultsArray = formatFile(file);
  for (const entry of resultsArray){
  channels.sendTyping();
  producedByx = producedByx + `${entry}\n`;
  console.log(`\nAdded Producer(s): ${entry} | (${counter+1})`);
  counter++;

}

}
// if there isnt a song File link existing in the current song result
} else {
if (g <= totalResults) {
if (producedByx === "Produced By : ") {
  producedByx =`Producer(s) : *unknown*`;
}
}
}
// date Recorded Info

if (result.features[0]) {
for (const file of result.features){
let resultsArray = formatFile(file);
  for (const entry of resultsArray){
  channels.sendTyping();
  featuresx = featuresx +`${entry}\n`;
  console.log(`\nAdded Feature(s): ${entry} | (${counter+1})`);
  counter++;

}

}
// if there isnt a song File link existing in the current song result
} else {
if (g <= totalResults) {
if (featuresx === "Features : ") {
  featuresx =`Features : *N/A*`;
}
}
}
g++;
channels.send({content: `${infoMessage}\n${erax}\n${statusx}\n${dateReleasedx}\n${dateLeakedx}\n${producedByx}\n${featuresx}`})

    }
    replyTo.reply({
      content: `✅ **Search Complete** ✅\n ***${g}* Results Found :** `,
      ephemeral: true,
    });
        } else {
          replyTo.reply({
            content: `❌ **No Results For** ***${input}***\n *please try again* ❌`,
            ephemeral: true,
          });
        }



            break;
      default:
      replyTo.reply({
        content: `An Error Occured, Please Try Again`,
        ephemeral: true,
      })

    }
    console.log(`Retrieval for song . . . . : ${songName} is Complete`);





};
