// IMPORTS ...
const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require('discord.js');


module.exports = async function newCustomEmbed(client, interaction, targetChannel, attachment = '', role1 = 'nobody', role2 = '', role3 = '', title, description, content, contentHeader = '', additionalDetails) {
  if (targetChannel === undefined) {
    const completeEmbed = {
      content: `**Please enter a new \`/\` command as these buttons are from the last request**`,
      ephemeral: true
    }
    console.log(`A button from an old request was clicked!`);
    console.log(`Prompted user to enter a new slash command`);
    return completeEmbed;
  } else {
    console.log('Running CUSTOM Embed');
    const sendEmbed = new EmbedBuilder()
      .setTitle(`${title}`)
      .setDescription(description.length ? `${description}` : null)
      .setColor('#EDED00')
      .setThumbnail(interaction.guild.iconURL())
      .setFooter({
        text: `${interaction.guild.name}`
      })
      .addFields({
          name: "To : ",
          value: `${role1} ${role2} ${role3}`
        }, {
          name: "From : ",
          value: `<@${interaction.user.id}>`
        }, {
          name: `${contentHeader}`,
          value: `${content}`,
          inline: true
        }

      ).setTimestamp();

    if (additionalDetails.length) {
      // basically we insert fields here
      sendEmbed.addFields({
        name: "🗣️",
        value: `${additionalDetails}`,
        inline: true
      });
    }

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
      files: [...(attachment.length ? [{
        attachment
      }] : [])] // spread an empty if it's nothing so we end up with an empty array
    }

    // await interaction.followUp(completeEmbed);
    return completeEmbed

    console.log('after embed');
  }
}
