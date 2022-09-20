// TODO:
// HACK:
// NOTE:
// TODO:
// FIXME:
// REVIEW:
// REVIEW

require('dotenv').config();
const {
  Client,
  GatewayIntentBits,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Collection
} = require('discord.js');
const fs = require('fs');
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
  rest: {
    timeout: (1000) * 45
  }
});
const {
  token,
  databaseToken
} = process.env;
const {
  connect
} = require('mongoose');
const mongoose = require('mongoose');
const newLeak = require('./functionalFunctions/newLeak.js')
const embed = require('./functionalFunctions/embed.js')
const newLeakModal = require('./functionalFunctions/newLeakModal.js')
const newOGLeakModal = require('./functionalFunctions/newOGLeakModal.js')
const newLeakEmbed = require('./functionalFunctions/newLeakEmbed.js')
const newOGLeakEmbed = require('./functionalFunctions/newOGLeakEmbed.js')
const enterFileLinkModal = require('./functionalFunctions/enterFileLinkModal.js')
const newCustomEmbed = require('./functionalFunctions/newCustomEmbed.js')
const newCustomModal = require('./functionalFunctions/newCustomModal.js')
const newStudioSessionLeakEmbed = require('./functionalFunctions/newStudioSessionLeakEmbed.js')
const newStudioSessionLeakModal = require('./functionalFunctions/newStudioSessionLeakModal.js')
const enterFileLinkEmbed = require('./functionalFunctions/enterFileLinkEmbed.js')



let collect = new Collection(); // collect targetChannel
let collectAttachment = new Collection();
let collectRoles = new Collection();
let collectEmbed = new Collection();
let collectButtonId = new Collection();
let collectNotes = new Collection();
const statuses = [{
    name: "𝟡𝟡𝟡 Till WRLD Blows",
    type: "PLAYING"
  },
  {
    name: "Road Rage 🎵 𝟡𝟡𝟡",
    type: "LISTENING"
  },
];
client.commands = new Collection();

// require('dotenv').config();
//im confusing rn
const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");


(async () => {
  try {
    for (file of functions) {
      require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");

    (async () => {
      await mongoose.connect(databaseToken).catch(console.error);
    })();
    console.log("about to check token");
    client.login(token)
    console.log("After checking token");

    // move this to file within within handle commands
    client.on('interactionCreate', async (interaction) => {

      let role1, role2, role3,
        roles1, roles2, roles3,
        linkSlot1,
        linkSlot2,
        linkSlot3,
        attachment,
        targetChannel,
        buttonId,
        replyTo,
        channels,
        completeEmbed,
        altLeakNames,
        price,
        notes,
        leakName,
        dateOfLeak;

      if (!interaction.inCachedGuild()) return;

      if (interaction.isChatInputCommand()) {
        //await interaction.deferReply({ephemeral: true});
        // the roles the user want to tag in the message
        if (interaction.options.getRole('role')) {
          role1 = interaction.options.getRole('role')
          collectRoles.set('roles1', role1)
        }
        // the roles the user want to tag in the message
        if (interaction.options.getRole('role2')) {
          role2 = interaction.options.getRole('role2')
          collectRoles.set('roles2', role2)
        }
        // the roles the user want to tag in the message
        if (interaction.options.getRole('role3')) {
          role3 = interaction.options.getRole('role3')
          collectRoles.set('roles3', role3)
        }
        // the attachment the user want to attach to the message
        if (interaction.options.getAttachment('attachment')) {
          attachment1 = interaction.options.getAttachment('attachment');
          collectAttachment.set('attachment', attachment1)
          console.log(`the attachment __________________ ${attachment1}`);
        }
        // the text channel the user would like to send the announcement into
        if (interaction.options.getChannel('sendto')) {
          targetChannel = interaction.options.getChannel('sendto');
          console.log(`Got channel id to send to ${targetChannel}`);
          collect.set('channel', targetChannel)
          console.log(`set collection channel value`);
          console.log(`collection value 1 : ${collect.get('channel')}`)
        }
        console.log(`logging channel id inside the if statment : ${targetChannel}`);
      }
      let temp = collect.get('channel');
      console.log(`PRINTING TEMP : ${temp}`);
      // the roles the user want to tag in the message



      //set the channel

      //this returns the targetChannel value

      // MODAL INTERACTIONS-------------------------------------------------------------------------------
      if (interaction.isModalSubmit()) {
        await interaction.deferReply({
          ephemeral: true
        });
        // const channel = interaction.guild.channels.cache.get(targetChannel)
        // if (channel) {
        //   console.log(`logging the NEW channel IN if statment ${channel}`)
        // }
        // console.log(`logging the NEW channel OUT if statment ${channel}`)
        let modalID = interaction.customId;
        replyTo = interaction;
        channels = interaction.channel;

        // USER SUBMISSIONS
        let temp2 = collect.get('channel');
        console.log(`PRINTING TEMP2 : ${temp2}`);
        let temp3 = collect.get('channel');

        if (modalID === 'newCustomModal') {
          let title = interaction.fields.getTextInputValue('title');
          let description = interaction.fields.getTextInputValue('description');
          let content = interaction.fields.getTextInputValue('content');
          let contentHeader = interaction.fields.getTextInputValue('contentHeader');
          let additionalDetails = interaction.fields.getTextInputValue('additionalDetails');

          if (interaction.fields.getTextInputValue('title')) {
            title = interaction.fields.getTextInputValue('title');
            collectNotes.set('title', title);
          }
          if (interaction.fields.getTextInputValue('additionalDetails')) {
            additionalDetails = interaction.fields.getTextInputValue('additionalDetails');
            collectNotes.set('additionalDetails', additionalDetails);
          }
          if (interaction.fields.getTextInputValue('description')) {
            description = interaction.fields.getTextInputValue('description');
            collectNotes.set('content', content);
          }
          if (interaction.fields.getTextInputValue('content')) {
            content = interaction.fields.getTextInputValue('content');
            collectNotes.set('content', content);
          }
          if (interaction.fields.getTextInputValue('contentHeader')) {
            contentHeader = interaction.fields.getTextInputValue('contentHeader');
            collectNotes.set('contentHeader', contentHeader);
          }

        } else if (modalID === 'enterFileLinkModal') {
          if (interaction.fields.getTextInputValue('linkSlot1')) {
            linkSlot1 = interaction.fields.getTextInputValue('linkSlot1');
          }

          if (interaction.fields.getTextInputValue('linkSlot2')) {
            linkSlot2 = interaction.fields.getTextInputValue('linkSlot2');
          }

          if (interaction.fields.getTextInputValue('linkSlot3')) {
            linkSlot3 = interaction.fields.getTextInputValue('linkSlot3');
          }
          let links = (linkSlot1, linkSlot2, linkSlot3) => {
            let newLinks = '***__File Links :__***\n';
            if (linkSlot1) {
              newLinks = `${newLinks}1️⃣ - ${linkSlot1}\n`;
            }
            if (linkSlot2) {
              newLinks = `${newLinks}2- ${linkSlot2}\n`;
            }
            if (linkSlot3) {
              newLinks = `${newLinks}3 - ${linkSlot3}\n`;
            }
            return newLinks;
          }

          notes = `${links}\n` + notes
          console.log(`Newly Configured Notes with Link : \n ${notes}`);
          collectNotes.set('notes', notes);
        } else {
          if (interaction.fields.getTextInputValue('leakName')) {
            leakName = interaction.fields.getTextInputValue('leakName');
            collectNotes.set('leakName', leakName);
          }
          if (interaction.fields.getTextInputValue('dateOfLeak')) {
            dateOfLeak = interaction.fields.getTextInputValue('dateOfLeak');
            collectNotes.set('dateOfLeak', dateOfLeak);
          }
          if (interaction.fields.getTextInputValue('altLeakNames')) {
            altLeakNames = interaction.fields.getTextInputValue('altLeakNames');
          }
          if (interaction.fields.getTextInputValue('price')) {
            price = interaction.fields.getTextInputValue('price');
          }
          if (interaction.fields.getTextInputValue('notes')) {
            notes = interaction.fields.getTextInputValue('notes');
            collectNotes.set('notes', notes);
          }
        }


        let idButton = collectButtonId.get('buttonId');


        console.log(`${modalID} Button was pressed -------------------------`)
        // if button clicked
        switch (modalID) {

          case 'enterFileLinkModal':

            collectAttachment.set('attachment', '')

            interaction.editReply({
              content: 'What kind of Announcement would you like to make?',
              components: [new ActionRowBuilder().setComponents(
                new ButtonBuilder().setCustomId('leak').setLabel('New Leak').setStyle(ButtonStyle.Danger),
                new ButtonBuilder().setCustomId('ogfile').setLabel('New OG File Leak').setStyle(ButtonStyle.Danger),
                new ButtonBuilder().setCustomId('studiosession').setLabel('New Studio Sessions').setStyle(ButtonStyle.Danger),
                new ButtonBuilder().setCustomId('custom').setLabel(`Custom Announcement`).setStyle(ButtonStyle.Danger)
              )]
            })

            break;


          case 'newLeakModal':

            console.log(`PRINTING TEMP : ${temp3}`);
            if (collect.get('channel')) {
              targetChannel = collect.get('channel');
            }
            // send new leak embed with modal input
            console.log(`Displaying channel id to send to ${targetChannel}`);
            role1 = collectRoles.get('roles1');
            role2 = collectRoles.get('roles2');
            role3 = collectRoles.get('roles3');
            console.log(`Role 1 : ${role1}`);
            console.log(`Role 2 : ${role2}`);
            console.log(`Role 3 : ${role3}`);

            completeEmbed = await newLeakEmbed(client, interaction, targetChannel, attachment, role1, role2, role3, leakName, dateOfLeak, altLeakNames, price, notes);
            // send buttons to confirm send to desrired channels// if yes send Announcement
            console.log(`the embed - ------ ---- --- ---- -- ${completeEmbed}`);
            console.log(`string in quotes`, completeEmbed)
            try {
              console.log(`inside try line 244`);
              await interaction.editReply(completeEmbed);
            } catch (e) {
              console.log(`inside catch line 247`);
              console.log('error : ', e);
            } finally {
              console.log(`inside finally line 250`);
              collectEmbed.set('embed', completeEmbed)
            }



            break;

          case 'newOGLeakModal':

            console.log(`PRINTING TEMP : ${temp3}`);
            if (collect.get('channel')) {
              targetChannel = collect.get('channel');
            }
            // send new leak embed with modal input
            console.log(`Displaying channel id to send to ${targetChannel}`);
            role1 = collectRoles.get('roles1');
            role2 = collectRoles.get('roles2');
            role3 = collectRoles.get('roles3');
            console.log(`Role 1 : ${role1}`);
            console.log(`Role 2 : ${role2}`);
            console.log(`Role 3 : ${role3}`);

            completeEmbed = await newOGLeakEmbed(client, interaction, targetChannel, attachment, role1, role2, role3, leakName, dateOfLeak, altLeakNames, price, notes);
            // send buttons to confirm send to desrired channels// if yes send Announcement
            console.log(`the embed - ------ ---- --- ---- -- ${completeEmbed}`);
            try {

              await interaction.editReply(completeEmbed);
            } catch (e) {
              console.log('error : ', e);
            } finally {

              collectEmbed.set('embed', completeEmbed)
            }

            break;


          case 'newStudioSessionLeakModal':
            // send new studio session leak modal to get input
            if (collect.get('channel')) {
              targetChannel = collect.get('channel');
            }
            // send new leak embed with modal input
            console.log(`Displaying channel id to send to ${targetChannel}`);
            role1 = collectRoles.get('roles1');
            role2 = collectRoles.get('roles2');
            role3 = collectRoles.get('roles3');
            console.log(`Role 1 : ${role1}`);
            console.log(`Role 2 : ${role2}`);
            console.log(`Role 3 : ${role3}`);

            completeEmbed = await newStudioSessionLeakEmbed(client, interaction, targetChannel, attachment, role1, role2, role3, leakName, dateOfLeak, altLeakNames, price, notes);
            // send buttons to confirm send to desrired channels// if yes send Announcement
            console.log(`the embed - ------ ---- --- ---- -- ${completeEmbed}`);
            try {

              await interaction.editReply(completeEmbed);
            } catch (e) {
              console.log('error : ', e);
            } finally {

              collectEmbed.set('embed', completeEmbed)
            }

            break;

            break;
          case 'newCustomModal':
            // send new custom announcement modal to get input
            if (collect.get('channel')) {
              targetChannel = collect.get('channel');
            }
            // send new leak embed with modal input
            console.log(`Displaying channel id to send to ${targetChannel}`);
            role1 = collectRoles.get('roles1');
            role2 = collectRoles.get('roles2');
            role3 = collectRoles.get('roles3');
            console.log(`Role 1 : ${role1}`);
            console.log(`Role 2 : ${role2}`);
            console.log(`Role 3 : ${role3}`);
            let title = interaction.fields.getTextInputValue('title');
            let description = interaction.fields.getTextInputValue('description');
            let content = interaction.fields.getTextInputValue('content');
            let contentHeader = interaction.fields.getTextInputValue('contentHeader');
            let additionalDetails = interaction.fields.getTextInputValue('additionalDetails');

            completeEmbed = await newCustomEmbed(client, interaction, targetChannel, attachment, role1, role2, role3, title, description, content, contentHeader, additionalDetails);
            // send buttons to confirm send to desrired channels// if yes send Announcement




            console.log(`the embed - ------ ---- --- ---- -- ${completeEmbed}`);
            try {

              await interaction.editReply(completeEmbed);
            } catch (e) {
              console.log('error : ', e);
            } finally {

              collectEmbed.set('embed', completeEmbed)
            }

            break;


            break;
          default:
            await interaction.editReply({
              content: `Error occured when pressing modal Button, please contact admin about a fix`
            })
        }
      }

      // BUTTON INTERACTIONS------------------------------------------------------------------------------
      if (interaction.isButton()) {
        //await interaction.deferReply();
        buttonId = interaction.customId;
        collectButtonId.set('buttonId', buttonId)
        replyTo = interaction;
        channels = interaction.channel;


        console.log(`${buttonId} Button was pressed -------------------------`)
        // if button clicked
        switch (buttonId) {

          case 'enterlink':
            console.log(`Enter File Share Link modal request Sent`);
            enterFileLinkModal(client, interaction);

            break;

          case 'leak':

            // send new leak modal to get input
            console.log(`${buttonId} modal request Sent`);
            newLeakModal(client, interaction);


            // embed(client, replyTo)
            //newLeak(client, replyTo, channels);

            // interaction.editReply({
            //   content: `${buttonId} Successfully Pressed and Registered`
            // })

            break;

          case 'ogfile':

            // send new leak modal to get input
            console.log(`${buttonId} modal request Sent`);
            newOGLeakModal(client, interaction);
            break;

          case 'studiosession':
            // send new studio session leak modal to get input
            console.log(`${buttonId} modal request Sent`);
            newStudioSessionLeakModal(client, interaction);

            break;

          case 'custom':
            // send new custom announcement modal to get input
            console.log(`${buttonId} modal request Sent`);
            newCustomModal(client, interaction);

            break;


          case 'sendAnnouncement':
            // send new custom announcement modal to get input
            interaction.update({
              components: [new ActionRowBuilder().setComponents(
                new ButtonBuilder().setCustomId('sendAnnouncement').setLabel('Sent Announcement!').setStyle(ButtonStyle.Success).setDisabled(true)
              )]
            })
            roles1 = collectRoles.get('roles1');
            roles2 = collectRoles.get('roles2');
            roles3 = collectRoles.get('roles3');
            console.log(`Role 1 : ${roles1}`);
            console.log(`Role 2 : ${roles2}`);
            console.log(`Role 3 : ${roles3}`);
            targetChannel = collect.get('channel');
            completeEmbed = collectEmbed.get('embed');

            let modChannel = interaction.channel;


            let attachment = collectAttachment.get('attachment');

            // take this attachment, check if its file size is ok, then return true or false whether in order to determine to send as a file or prompt the user to get an onlyfiles or kraken link for the file
            // make a function to check if file is valid
            let filePresent = !!attachment;


            if (filePresent) {

              if (roles1 && roles2 && roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: [attachment]
                })
              } else if (roles1 && roles2 && !roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: [attachment]
                })
              } else if (roles1 && !roles2 && !roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: [attachment]
                })
              } else if (roles1 && !roles2 && roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: [attachment]
                })
              } else if (!roles1 && roles2 && roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: [attachment]
                })
              } else if (!roles1 && !roles2 && roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: [attachment]
                })
              } else if (!roles1 && !roles2 && !roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: [attachment]
                })
              } else if (!roles1 && roles2 && !roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: [attachment]
                })
              }
            } else {
              // no attachment file present

              if (roles1 && roles2 && roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: []
                })
              } else if (roles1 && roles2 && !roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: []
                })
              } else if (roles1 && !roles2 && !roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: []
                })
              } else if (roles1 && !roles2 && roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: []
                })
              } else if (!roles1 && roles2 && roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: []
                })
              } else if (!roles1 && !roles2 && roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: []
                })
              } else if (!roles1 && !roles2 && !roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: []
                })
              } else if (!roles1 && roles2 && !roles3) {
                targetChannel.send({
                  ...completeEmbed,
                  content: ``,
                  ephemeral: false,
                  components: [],
                  files: []
                })
              }
            }
            break;
          default:
            interaction.reply({
              content: `<@${interaction.user.id}> has sent an ***Announcement*** to channel: ${targetChannel} !`
            })
        }
      }
    })
  } catch (err) {
    console.log('error: ', err)
  }
})();
