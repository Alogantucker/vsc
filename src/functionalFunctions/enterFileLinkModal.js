// IMPORTS ...
const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');


module.exports = async function enterFileLinkModal(client, interaction){
  console.log(`Modal request Recieved`);



  const enterFileLinkModal = new ModalBuilder()
  			.setCustomId('enterFileLinkModal')
  			.setTitle('Enter the File Share Link');

  		// Add components to modal

  		// Create the text input components
      // name of the song leaking
  		const linkSlot1 = new TextInputBuilder()
  			.setCustomId('linkSlot1')
  		    // The label is the prompt the user sees for this input
  			.setLabel("*Link 1️⃣*")
  		    // Short means only a single line of text
  			.setStyle(TextInputStyle.Short).setPlaceholder('if there is more than one link, use additional fields.').setRequired(true);

        const linkSlot2 = new TextInputBuilder()
    			.setCustomId('linkSlot2')
    		    // The label is the prompt the user sees for this input
    			.setLabel("*Link ️⃣*")
    		    // Short means only a single line of text
    			.setStyle(TextInputStyle.Short).setPlaceholder('One link per field').setRequired(false);

          // the date the file was leaked
          const linkSlot3 = new TextInputBuilder()
            .setCustomId('linkSlot3')
              // The label is the prompt the user sees for this input
            .setLabel("*Link ️⃣*")
              // Short means only a single line of text
            .setStyle(TextInputStyle.Short).setPlaceholder('One link per field').setRequired(false);

  		const firstActionRow = new ActionRowBuilder().addComponents(linkSlot1);
  		const secondActionRow = new ActionRowBuilder().addComponents(linkSlot2);
      const thirdActionRow = new ActionRowBuilder().addComponents(linkSlot3);


  		// Add inputs to the modal
  		enterFileLinkModal.addComponents(firstActionRow, secondActionRow,thirdActionRow);
  console.log('Submit File Share Link Modal Configured and about to display');
  		// Show the modal to the user
  		await interaction.showModal(enterFileLinkModal);

  console.log('Submit File Share Link Modal Displayed');
  }
