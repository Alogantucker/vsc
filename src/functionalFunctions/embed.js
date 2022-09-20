// IMPORTS ...
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');


module.exports = async function embed(client, interaction){
  // the roles the user want to tag in the message
  if (interaction.options.getRole('role')) {
    const role1 = interaction.options.getRole('role');
  }
    // the roles the user want to tag in the message
  if (interaction.options.getRole('role2')) {
    const role2 = interaction.options.getRole('role2');
  }
    // the roles the user want to tag in the message
  if (interaction.options.getRole('role3')) {
    const role3 = interaction.options.getRole('role3');
  }
  // the attachment the user want to attach to the message
if (interaction.options.getAttachment('attachment')) {
  const attachment = interaction.options.getAttachment('attachment');
}
  // the text channel the user would like to send the announcement into
  const targetChannel = interaction.options.getChannel('sendTo');
  console.log('Running New Leak Embed');
      console.log('running embed');
      const embed = new EmbedBuilder()
      .setTitle(`This is a embed title`)
      .setColor(`Burple`)
      .setDescription(`A very cool embed`)
      .setThumbnail(`https://media.discordapp.net/attachments/894418623844737114/1019321100703891456/IMG_0966.png?width=302&height=596`)
      .addFields(
        {name: "Field 1", value: "Field 1 Value", inline: true },
        {name: "Field 2", value: "Field 2 Value", inline: true },
        {name: "Field 3", value: "Field 3 Value", inline: true },
        {name: "Field 4", value: "Field 4 Value"})
      .setFooter({text: `Subscribe... No..`})
      .setTimestamp();
      console.log('embed created');
      interaction.reply({ embeds: [embed]})

     // interaction.reply({ embeds: [embed], components: [new ActionRowBuilder().setComponents(
     // 	new ButtonBuilder().setCustomId('leak').setLabel('New Leak').setStyle(ButtonStyle.Danger),
     // 	new ButtonBuilder().setCustomId('ogfile').setLabel('New OG File Leak').setStyle(ButtonStyle.Danger),
     // 	new ButtonBuilder().setCustomId('studiosession').setLabel('New Studio Sessions').setStyle(ButtonStyle.Danger)
     // )] })

   console.log('after embed');
  }
