// IMPORTS ...
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');


module.exports = async function newCustomModal(client, interaction){
  console.log(`Modal request Recieved`);



  const newCustomModal = new ModalBuilder()
  			.setCustomId('newCustomModal')
  			.setTitle('Create Your own CUSTOM Announcement');

  		// Add components to modal

  		// Create the text input components
      // name of the song leaking
  		const title = new TextInputBuilder()
  			.setCustomId('title')
  		    // The label is the prompt the user sees for this input
  			.setLabel("What is the title of the announcement?")
  		    // Short means only a single line of text
  			.setStyle(TextInputStyle.Short).setPlaceholder('New Nitro Giveaway!').setRequired(true);

        const description = new TextInputBuilder()
    			.setCustomId('description')
    		    // The label is the prompt the user sees for this input
    			.setLabel("What is the announcement description?")
    		    // Short means only a single line of text
    			.setStyle(TextInputStyle.Short).setPlaceholder('1 Year Free Nitro Giveaway').setRequired(false);

          // name of the song leaking
          const content = new TextInputBuilder()
            .setCustomId('content')
              // The label is the prompt the user sees for this input
            .setLabel("Add content for the announcement")
              // Short means only a single line of text
            .setStyle(TextInputStyle.Short).setPlaceholder(`It's Jarad's Birthday so we are giving away Free Nitro!`).setRequired(false);


          // the date the file was leaked
          const contentHeader = new TextInputBuilder()
            .setCustomId('contentHeader')
              // The label is the prompt the user sees for this input
            .setLabel("Add a header for the content (optional)")
              // Short means only a single line of text
            .setStyle(TextInputStyle.Paragraph).setPlaceholder('Happy Birthday Jarad').setRequired(false);

              // extra notes for user to include in announcement
          		const additionalDetails = new TextInputBuilder()
          			.setCustomId('additionalDetails')
          		    // The label is the prompt the user sees for this input
          			.setLabel("Any additional details? (optional)")
          		    // Long means it is a paragraph of text
          			.setStyle(TextInputStyle.Paragraph).setPlaceholder('Next Year we will give away more, 999').setRequired(false);



  		// An action row only holds one text input,
  		// so you need one action row per text input.
  		const firstActionRow = new ActionRowBuilder().addComponents(title);
  		const secondActionRow = new ActionRowBuilder().addComponents(description);
      const thirdActionRow = new ActionRowBuilder().addComponents(content);
  		const fourthActionRow = new ActionRowBuilder().addComponents(contentHeader);
      const fifthActionRow = new ActionRowBuilder().addComponents(additionalDetails);


  		// Add inputs to the modal
  		newCustomModal.addComponents(firstActionRow, secondActionRow,thirdActionRow,fourthActionRow,fifthActionRow);
  console.log('Modal Configured and about to display');
  		// Show the modal to the user
  		await interaction.showModal(newCustomModal);

  console.log('Modal Displayed');
  }
