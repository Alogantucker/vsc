// make sure payloads are correct

module.exports = function sendSearchStatus(replyTo, reply, channels, counter, dataType, input) {
  switch (dataType) {
    case "songFile":
      dataType = "Song Files of";
      break;

    case "coverFile":
      dataType = "Cover Art of";
      break;


    case "snipFile":
      dataType = "Snippets of";
      break;

    case "sessionFile":
      dataType = "Session Files of";
      break;
    case "era":
      dataType = "Era of";
      break;

    case "info":
      dataType = "General Information About";
      break;

    default:

  }
  console.log(`THIS IS THE CURRENT DATATYPE VALUE ${dataType}`)
  if (dataType === 'General Information About') {
      // channels.sendTyping();
      console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Success Reply Sent!`);
      channels.send(`✅ <@${replyTo.user.id}>\n  **Searched For ${dataType} ${input} ** `);
  } else if (dataType === 'era') {
    dateType = 'Era'
    if (counter != 0) {
      // channels.sendTyping();
      console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Success Reply Sent!`);
      channels.send(`✅ <@${replyTo.user.id}>\n  **Searched For the ${dataType} of ${input}\n Information has Been Found ** `);
    } else {
      channels.send(`❌ <@${replyTo.user.id}>\n **No Era Found for ${input}** `);
    }
  } else {
    if (counter != 0) {
      // channels.sendTyping();
      console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Success Reply Sent!`);
      channels.send(`✅ <@${replyTo.user.id}>\n  **Searched For ${dataType} ${input}\n \[ ${counter} \]  Results Found ** `);
    } else {
      channels.send(`❌ <@${replyTo.user.id}>\n **No Results Found for ${dataType} ${input}** `);
    }

  }
}
