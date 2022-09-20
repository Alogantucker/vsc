// IMPORTS ...
const getData = require('./getData.js');
const searchData = require('./searchData.js');
const searchInfo = require('../functionalFunctions/searchInfo.js');
const sendSearchStatus = require('./sendSearchStatus.js');
const sendResultCount = require('./sendResultCount.js');
const findEra = require('./findEra.js');
const { EmbedBuilder } = require('discord.js');

// function to bridge the main file to all other function commands

module.exports = async function embedTemplate(client, replyTo, channels) {
  console.log('Running New Leak Function');
  let sendToChannel = replyTo.options.getChannel("new");

  	if (!replyTo.isChatInputCommand()) return;

  	if (replyTo.commandName === 'button') {
  		const row = new ActionRowBuilder()
  			.addComponents(
  				// ...
  			);

  		const embed = new EmbedBuilder()
  			.setColor(0x0099FF)
  			.setTitle('Some title')
  			.setURL('https://discord.js.org')
  			.setDescription('Some description here');

  		await replyTo.reply({ content: 'I think you should,', ephemeral: true, embeds: [embed], components: [new ActionRowBuilder().setComponents(
      	new ButtonBuilder().setCustomId('leak').setLabel('New Leak').setStyle(ButtonStyle.Danger),
      	new ButtonBuilder().setCustomId('ogfile').setLabel('New OG File Leak').setStyle(ButtonStyle.Danger),
      	new ButtonBuilder().setCustomId('studiosession').setLabel('New Studio Sessions').setStyle(ButtonStyle.Danger)
      )] });
  	}

    }
