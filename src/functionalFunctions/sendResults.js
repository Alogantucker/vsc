const fileCheck = require("./fileCheck");

module.exports = async function sendResults(result, counter, channels, dataType, sendAs = 'message', songName = "No Song Entered") {
  switch (dataType) {
    case "songFile":
      dataType = "Song";
      break;

    case "coverFile":
      dataType = "Cover";
      break;


    case "snipFile":
      dataType = "Snippet";
      break;

    case "sessionFile":
      dataType = "Session";
      break;
    case "era":
      dataType = "Era";
      break;

    case "info":
      dataType = "General Information ";
      break;

    default:

  }

  channels.sendTyping();
resultFile = result
  console.log('Result File Path : ' + resultFile);
  if (dataType === "General Information ") {

    let colAttributeArray  = [ "Era : ", "Date Released : ", "Date Leaked : ","Date Recorded : ", "Produced By : ", "Features : " ]

        channels.send(`**${colAttributeArray[counter]}${resultFile}**`);
        console.log(`\nSent ${colAttributeArray[counter]} MESSAGE `);
  } else if (dataType === "Era") {

    let colAttributeArray  = [ `${songName} Era : `]

        channels.send(`**${colAttributeArray[counter]}${resultFile}**`);
        console.log(`\nSent ${colAttributeArray[counter]} MESSAGE `);
  } else {
    resultFile = result.replace(" ", "").replace('C:\\Users\\wildc\\Desktop\\Bots\\Abyss (V 0.0.1)\\ ', '');
    if (sendAs === 'files') {
      console.log('Sending as File : ' + resultFile);
      channels.send({
        files: [`${resultFile}`],
      });
      console.log(`\nSent ${dataType} File # (${counter + 1})`);
      // counter++;
      //channels.sendTyping();
    } else if (sendAs === 'message') {
      channels.send(`${resultFile}`);
      console.log(`\nSent ${dataType} MESSAGE # (${counter + 1})`);
      // counter++;
      // channels.sendTyping();
    }
  }

  // if there isnt a song File link existing in the current song result


}
