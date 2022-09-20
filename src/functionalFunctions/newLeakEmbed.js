// IMPORTS ...
const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require('discord.js');


module.exports = async function newLeakEmbed(client, interaction, targetChannel, attachment = '', role1 = 'nobody', role2 = '', role3 = '', leakName, dateOfLeak, altLeakNames = '', price = 'FREE', notes = '') {
  if (targetChannel === undefined) {
    const completeEmbed = {
      content: `**Please enter a new \`/\` command as these buttons are from the last request**`,
      ephemeral: true
    }
    console.log(`A button from an old request was clicked!`);
    console.log(`Prompted user to enter a new slash command`);
    return completeEmbed;
  } else {
console.log('Running New Leak Embed');
const sendEmbed = new EmbedBuilder()
  .setTitle(`New Leak! - ${leakName}`)
  .setDescription( altLeakNames.length ? `Alternative Names : ${altLeakNames}` : null)
  .setColor('#EDED00')
  .setThumbnail(`https://c.tenor.com/GmbAUxO4-48AAAAC/juice-wrld.gif`)
  .setFooter({text: `999 Till the WRLD Blows`})
.addFields(
      {
          name: "Date Leaked : ",
          value: `${dateOfLeak}`,
          inline: true
      },
      {
          name: "Price of Leak : ",
          value: `${price}`,
          inline: true
      }, // since variable price is never empty
      {
          name: "Alert",
          value: `${role1} ${role2} ${role3}`
      }
  ).setTimestamp();


console.log(`sendEmbed.fields`, sendEmbed.fields);


const completeEmbed = {
  content: `Are you sure you want to send to channel: ${targetChannel} ?`,
  embeds: [sendEmbed],
  ephemeral: true,
  components: [
    ActionRowBuilder.from({
      components: [
        ButtonBuilder.from({
          customId: 'sendAnnouncement',
          label: 'Send Announcement',
          style: ButtonStyle.Danger
        })
      ]
    })
  ],
  files: [...(attachment.length ? [{ attachment }] : [])] // spread an empty if it's nothing so we end up with an empty array
}
console.log(`completeEmbed.embeds[0].fields`, completeEmbed.embeds[0].fields);
console.log(`completeEmbed.fields`, completeEmbed.fields);
console.log(`completeEmbed.embeds.fields`, completeEmbed.embeds.fields);
if (notes.length) {
  // basically we insert fields here
    sendEmbed.addFields({
    name: "Additional Notes : ",
    value: `${notes}`,
    inline: false
  });
}
console.log(`bout to return completeEmbed line 65 of newLeakEmbed.js`);
// await interaction.followUp(completeEmbed);
return completeEmbed

console.log('after embed');
}
}
