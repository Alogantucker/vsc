// IMPORTS ...
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');


module.exports = async function enterFileLinkEmbed(client, interaction){
  console.log('Running enterFileLinkEmbed.js');
  let enterFileLinkEmbedMessage;

      let embed;
        embed = new EmbedBuilder()
        .setTitle(`Convert & Share File !`)
        .setColor(`Blue`)
        .setDescription(`Convert the file(s) via one of the options below`).setThumbnail(`https://media.giphy.com/media/VJY3zeoK87CLBKnqqm/giphy.gif`)
        .addFields(
          {name: "OnlyFiles", value: `***Most Popular***\nused for most audio files`, inline: true },
          {name: "Kraken", value: `used for most audio files`, inline: true },
          {name: "WeTranser", value: `used for folders or large files to share with others \n*valid for 7 days*)`})
        .setFooter({text: `Share up to 3 links`})
        .setTimestamp();
        console.log('embed configured');

        enterFileLinkEmbedMessage = { content: `| __The Attached File Size was Too Big__\n**|  Please convert the file into an online shareable link**\n|   Then *__Click Submit Below__* and Paste the Link to the File`,embeds: [embed], ephemeral: true, components: [new ActionRowBuilder().setComponents(
        	new ButtonBuilder().setURL('https://onlyfiles.io/').setLabel('🎶 OnlyFiles').setStyle(ButtonStyle.Link),
        	new ButtonBuilder().setURL('https://krakenfiles.com/').setLabel('🎵 Kraken Files').setStyle(ButtonStyle.Link),
          new ButtonBuilder().setURL('https://wetransfer.com/').setLabel('‼️ WeTransfer').setStyle(ButtonStyle.Link),
        	new ButtonBuilder().setCustomId('enterlink').setLabel('📨 Enter File Link').setStyle(ButtonStyle.Success)
        )]};

      await interaction.editReply(enterFileLinkEmbedMessage)
      return enterFileLinkEmbedMessage;

     // interaction.reply({ embeds: [embed], components: [new ActionRowBuilder().setComponents(
     // 	new ButtonBuilder().setCustomId('leak').setLabel('New Leak').setStyle(ButtonStyle.Danger),
     // 	new ButtonBuilder().setCustomId('ogfile').setLabel('New OG File Leak').setStyle(ButtonStyle.Danger),
     // 	new ButtonBuilder().setCustomId('studiosession').setLabel('New Studio Sessions').setStyle(ButtonStyle.Danger)
     // )] })

   console.log('after embed');
  }
