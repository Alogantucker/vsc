module.exports = async function sortChoice(choice, input, song, replyTo, channels, counter, reply, songArray ) {
  let songFile = 'songFile';
  let coverArt = 'coverArt';
  let snippet = 'snippet';
  let session = 'session';
  let info = 'info';
  let era = 'era';
  let infoArray = songArray;
  switch (choice) {
    case songFile:
      counter = 0;

console.log(`Sending Song File Results for : ${song}`);
      for (var i = 0; i < songArray.length; i++) {
        if (songArray[i].name.includes(song)) {
          let g = 0;
          let k = 0;
          if (songArray[i].links.songFile[k]) {
            while (songArray[i].links.songFile[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send({  files: [`${songArray[i].links.songFile[k]}`]});
              console.log(`\nSent song file # ${counter+1}`);
              counter++;
              k++;
            }
          } else {

            k++;
            while (songArray[i].links.songFile[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send({  files: [`${songArray[i].links.songFile[k]}`]});
              console.log(`\nSent song file # ${counter+1}`);
              counter++;
              k++;
            }
          }

          k = 0;
          if (songArray[i].links.songLink[k]) {

            while (songArray[i].links.songLink[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send(`${songArray[i].links.songLink[k]}`);
              console.log(`\nSent song link # ${counter+1}`);
              counter++;
              k++;
            }
          } else {

            k++;
            while (songArray[i].links.songLink[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send(`${songArray[i].links.songLink[k]}`);
              console.log(`\nSent song link # ${counter+1}`);
              counter++;
              k++;
            }
            k=0;
          }
        }
      }
      replyTo.reply({
        content: `✅ **Search Complete** ✅\n \[ ${counter} \] ***${song}*** **Results Found :** `,
        ephemeral: true,
      });
      break;

    case coverArt:
      counter = 0;
console.log(`Sending Cover Art Results for : ${song}`);
      for (var i = 0; i < songArray.length; i++) {
        if (songArray[i].name.includes(song)) {
          let g = 0;
          let k = 0;
          if (songArray[i].links.artFile[k]) {
            while (songArray[i].links.artFile[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send({  files: [`${songArray[i].links.artFile[k]}`]});
              console.log(`\nSent song file # ${counter+1}`);
              counter++;
              k++;
            }
          } else {
            k++;
            while (songArray[i].links.artFile[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send({  files: [`${songArray[i].links.artFile[k]}`]});
              console.log(`\nSent song file # ${counter+1}`);
              counter++;
              k++;
            }
          }

          k = 0;
          if (songArray[i].links.artLink[k]) {
            while (songArray[i].links.artLink[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send(`${songArray[i].links.artLink[k]}`);
              console.log(`\nSent song file # ${counter+1}`);
              counter++;
              k++;
            }
          } else {
            k++;
            while (songArray[i].links.artLink[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send(`${songArray[i].links.artLink[k]}`);
              console.log(`\nSent song file # ${counter+1}`);
              counter++;
              k++;
            }
            k=0;
          }
        }

    }
    replyTo.reply({
      content: `✅ **Search Complete** ✅\n \[ ${counter} \] ***${song}*** **Results Found :** `,
      ephemeral: true,
    });
      break;

    case snippet:
      counter = 0;


console.log(`Sending Snippet Results for : ${song}`);
      for (var i = 0; i < songArray.length; i++) {
        if (songArray[i].name.includes(song)) {
          let g = 0;
          let k = 0;
          if (songArray[i].links.snippetFile[k]) {
            while (songArray[i].links.snippetFile[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send({  files: [`${songArray[i].links.snippetFile[k]}`]});
              console.log(`\nSent song file # ${counter+1}`);
              counter++;
              k++;
            }
          } else {
            k++;
            while (songArray[i].links.snippetFile[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send({  files: [`${songArray[i].links.snippetFile[k]}`]});
              console.log(`\nSent song file # ${counter+1}`);
              counter++;
              k++;
            }
          }

          k = 0;
          if (songArray[i].links.snipLink[k]) {
            while (songArray[i].links.snipLink[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send(`${songArray[i].links.snipLink[k]}`);
              console.log(`\nSent song file # ${counter+1}`);
              counter++;
              k++;
            }
          } else {
            k++;
            while (songArray[i].links.snipLink[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send(`${songArray[i].links.snipLink[k]}`);
              console.log(`\nSent song file # ${counter+1}`);
              counter++;
              k++;
            }
            k=0;
          }
        }
      }
      //  });
      replyTo.reply({
        content: `✅ **Search Complete** ✅\n \[ ${counter} \] ***${song}*** **Results Found :** `,
        ephemeral: true,
      });
      break;

    case session:
      counter = 0;
console.log(`Sending Session Results for : ${song}`);

      for (var i = 0; i < songArray.length; i++) {
        if (songArray[i].name.includes(song)) {
          let g = 0;
          let k = 0;
          if (songArray[i].links.sessionFile[k]) {
            while (songArray[i].links.sessionFile[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send({  files: [`${songArray[i].links.sessionFile[k]}`]});
              console.log(`\nSent song file # ${counter+1}`);
              counter++;
              k++;
            }
          } else {
            k++;
            while (songArray[i].links.sessionFile[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send({  files: [`${songArray[i].links.sessionFile[k]}`]});
              console.log(`\nSent song file # ${counter+1}`);
              counter++;
              k++;
            }
          }

          k = 0;
          if (songArray[i].links.sessionLink[k]) {
            while (songArray[i].links.sessionLink[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send(`${songArray[i].links.sessionLink[k]}`);
              console.log(`\nSent song file # ${counter+1}`);
              counter++;
              k++;
            }
          } else {
            k++;
            while (songArray[i].links.sessionLink[k]) {
              channels.sendTyping();
              //channels.send(`${songLinks[i2]}`);
              channels.send(`${songArray[i].links.sessionLink[k]}`);
              console.log(`\nSent song file # ${counter+1}`);
              counter++;
              k++;
            }
            k=0;
          }
        }
      replyTo.reply({
        content: `✅ **Search Complete** ✅\n \[ ${counter} \] ***${song}*** **Results Found :** `,
        ephemeral: true,
      });
    }
      break;

    case info:
      infoArray.forEach((item, i, songData) => {
        let dateRecorded = songData[i].info.dateRecorded;
        let state = songData[i].info.status.state;
        let dateLeaked = songData[i].info.status.dateleaked;
        let released = songData[i].info.status.released;
        let era = songData[i].info.era;

        let recordedValid = false;
        let stateValid = false;
        let leakedValid = false;
        let releasedValid = false;
        let eraValid = false;

        if (songData[i].name.includes(song)) {
          reply = reply + `:face_with_monocle:  **${song} Info : **\n\n`;
          if (dateRecorded) {
            recordedValid = true;
          }

          if (state) {
            stateValid = true;
          }

          if (dateLeaked) {
            leakedValid = true;
          }

          if (released) {
            releasedValid = true;
          }

          if (era) {
            eraValid = true;
          }

          if (eraValid) {
            dateRecorded.forEach((item2, i2, data) => {
              reply = reply + `**Era : ** ${data[i2]}\n`;
            });
          }

          if (recordedValid) {
            dateRecorded.forEach((item2, i2, data) => {
              reply = reply + `**Date Recorded : ** ${data[i2]}\n`;
            });
          }
          if (stateValid) {
            //  state.forEach((item2, i2, data) => {

            reply = reply + `**Status : ** ${state[0]}\n`;
            //});
          }

          if (leakedValid) {
            dateLeaked.forEach((item2, i2, data) => {
              reply = reply + `**Date Leaked : ** ${data[i2]}\n`;
            });
          }
          if (releasedValid) {
            released.forEach((item2, i2, data) => {
              reply = reply + `**Date Released : ** ${data[i2]}`;
            });
          }
        }
      });
      await replyTo.reply({ content: `${reply}`, ephemeral: true });

    default:
    //await interaction.reply({ content: `An Error has Occured, Try Again`, ephemeral: true });
  }
};
