// IMPORTS ...
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');


module.exports = async function newLeakModal(client, interaction){
  console.log(`Modal request Recieved`);



  const newLeakModal = new ModalBuilder()
  			.setCustomId('newLeakModal')
  			.setTitle('Create New Leak Announcement');

  		// Add components to modal

  		// Create the text input components
      // name of the song leaking
  		const leakName = new TextInputBuilder()
  			.setCustomId('leakName')
  		    // The label is the prompt the user sees for this input
  			.setLabel("What's the new leak name?")
  		    // Short means only a single line of text
  			.setStyle(TextInputStyle.Short).setPlaceholder('Adore You').setRequired(true);

        const altLeakNames = new TextInputBuilder()
    			.setCustomId('altLeakNames')
    		    // The label is the prompt the user sees for this input
    			.setLabel("If there are alternate titles, separate (,)")
    		    // Short means only a single line of text
    			.setStyle(TextInputStyle.Short).setPlaceholder('Dark Knight,Seen A Soul Like Yours,Hold U').setRequired(false);

          // the date the file was leaked
          const dateOfLeak = new TextInputBuilder()
            .setCustomId('dateOfLeak')
              // The label is the prompt the user sees for this input
            .setLabel("Input the date the leak occured")
              // Short means only a single line of text
            .setStyle(TextInputStyle.Short).setPlaceholder('October 25th 2021').setRequired(true);

            // // any artists that are featured in the leak
            // const leakFeatures = new TextInputBuilder()
        		// 	.setCustomId('leakFeatures')
        		//     // The label is the prompt the user sees for this input
        		// 	.setLabel("If the leak has any features, please type each artist featured seperated by commas (,) otherwise skip")
        		//     // Short means only a single line of text
        		// 	.setStyle(TextInputStyle.Short).setRequired(false);

              // name of the song leaking
          		const price = new TextInputBuilder()
          			.setCustomId('price')
          		    // The label is the prompt the user sees for this input
          			.setLabel("Enter the price if bought or skip")
          		    // Short means only a single line of text
          			.setStyle(TextInputStyle.Short).setPlaceholder('$25,000').setRequired(false);

              // extra notes for user to include in announcement
          		const notes = new TextInputBuilder()
          			.setCustomId('notes')
          		    // The label is the prompt the user sees for this input
          			.setLabel("Any additional notes to send in announcement?")
          		    // Long means it is a paragraph of text
          			.setStyle(TextInputStyle.Paragraph).setPlaceholder('Adore You was group bought in a bundle along with PITR and one other song').setRequired(false);



  		// An action row only holds one text input,
  		// so you need one action row per text input.
  		const firstActionRow = new ActionRowBuilder().addComponents(leakName);
  		const secondActionRow = new ActionRowBuilder().addComponents(altLeakNames);
      const thirdActionRow = new ActionRowBuilder().addComponents(dateOfLeak);
  		const fourthActionRow = new ActionRowBuilder().addComponents(price);
      const fifthActionRow = new ActionRowBuilder().addComponents(notes);


  		// Add inputs to the modal
  		newLeakModal.addComponents(firstActionRow, secondActionRow,thirdActionRow,fourthActionRow,fifthActionRow);
  console.log('Modal Configured and about to display');
  		// Show the modal to the user
  		await interaction.showModal(newLeakModal);

  console.log('Modal Displayed');
  }
