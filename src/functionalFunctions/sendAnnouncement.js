// IMPORTS ...
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');


module.exports = async function embed(client, interaction, embed){

  const targetChannel = interaction.options.getChannel('sendTo');
      console.log('embed approved');
      interaction.reply({ embeds: [embed]})

     // interaction.reply({ embeds: [embed], components: [new ActionRowBuilder().setComponents(
     // 	new ButtonBuilder().setCustomId('leak').setLabel('New Leak').setStyle(ButtonStyle.Danger),
     // 	new ButtonBuilder().setCustomId('ogfile').setLabel('New OG File Leak').setStyle(ButtonStyle.Danger),
     // 	new ButtonBuilder().setCustomId('studiosession').setLabel('New Studio Sessions').setStyle(ButtonStyle.Danger)
     // )] })

   console.log('after embed');
  }
