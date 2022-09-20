const { SlashCommandBuilder } = require('@discordjs/builders');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType } = require('discord.js');
const format = require('../../functionalFunctions/format.js');
const sortChoice = require('../../functionalFunctions/sortChoice.js');
const retrieve = require('../../functionalFunctions/retrieve.js');
const control = require('../../functionalFunctions/control.js');
const enterFileLinkEmbed = require('../../functionalFunctions/enterFileLinkEmbed.js');



// Variables
let leak = 'leak';
let ogFile = 'ogfile';
let studioSession = 'studiosession';
let stems = 'stems';
let master = 'master';
let magicalEdit = 'magicaledit';
let edit = 'edit';
let custom = 'custom';

// get data from JSON
const fs = require('fs');
let data = fs.readFileSync('./src/information.json');
let songInfo = JSON.parse(data);

var infoArray = [];
for (var object of songInfo) {
	infoArray.push(object);
}

let testName = infoArray[0].name[0];

module.exports = {
	data: new SlashCommandBuilder()
        .setName('new')
        .setDescription('new announcement')
				// slot for user to select which text channel they would like to send the announcement into (Required)
        .addChannelOption(option => option.addChannelTypes(ChannelType.GuildText).setName('sendto').setDescription('The channel you would like to announce in').setRequired(true))
				// slot for the music file non required
				.addAttachmentOption(option => option.setName('attachment').setDescription('The file you would like to attach to the announcement'))
				// slot for user to select which roles they want to tag in the message, Up to 3, non required
				.addRoleOption(opt => opt.setName("role").setDescription('The Roles you would like to tag in your announcement'))
				.addRoleOption(opt => opt.setName("role2").setDescription('Optional Additional roles to tag'))
				.addRoleOption(opt => opt.setName("role3").setDescription('Optional Additional roles to tag')),

    async execute(interaction, client) {
			await interaction.deferReply({ephemeral: true});
			console.log(`running new Slash command`);
			let attachment = interaction.options.getAttachment('attachment');
			console.log(`This is the Attachment -----> ${attachment}`);

			// take this attachment, check if its file size is ok, then return true or false whether in order to determine to send as a file or prompt the user to get an onlyfiles or kraken link for the file
				// make a function to check if file is valid
					let validFile = async (attachment) => {
						if (attachment) {
							const size = attachment.size;
						console.log(`Size : ${size} Vs. ${(8*1024*1024)}`);
						if (size >= (8*1024*1024) ) {
							console.log("Invalid File Size, will send as message instead");
							console.log(attachment + " _--------------_-----_-------__--link is this");
							return -1;

						}  else {
							console.log("Valid File Size");
							return 0;


						}
					} else {
						// No Atatchment present
						return 1;
					}

					}
					let validStatus = await validFile(attachment);
					console.log(`Valid File === ${validStatus}`);

			// if so, send new message with link buttons to both onlyfiles and kraken and maybe wetransfer for big files, then a submit link button
			// then wait until a user presses submit link button or the file size returns as true
			//if file size is GOOD let it continue as before, the buttons asking what kind of announcement
			// otherwise present a SUBMIT LINK MODAL, then when submitModal is pressed the code continues as before, the buttons asking what kind of announcement
			console.log(`the attachment - ------ ---- --- ---- -- ${attachment}`);

			// if no do not send announcement and prompt to start over

			// SWITCH TO CHECK THE OUTCOME OF VALID SIZE AND GO FORWARD ACCORDINGLY

			switch (validStatus) {

				// case : VALID FILE PRESENT
				case 0:
				console.log(`Sending 0 interaction`);
				interaction.followUp({content: 'What kind of Announcement would you like to make?', ephemeral: true, components: [new ActionRowBuilder().setComponents(
					new ButtonBuilder().setCustomId('leak').setLabel('New Leak').setStyle(ButtonStyle.Danger),
					new ButtonBuilder().setCustomId('ogfile').setLabel('New OG File Leak').setStyle(ButtonStyle.Danger),
					new ButtonBuilder().setCustomId('studiosession').setLabel('New Studio Sessions').setStyle(ButtonStyle.Danger),
					 new ButtonBuilder().setCustomId('custom').setLabel(`Custom Announcement`).setStyle(ButtonStyle.Danger)
				)]})


					break;

				// case : INVALID FILE PRESENT
				case -1:
				console.log(`Sending -1 interaction`);
				let replyContent = enterFileLinkEmbed(client, interaction);
					break;



				// case : NO FILE PRESENT
				case 1:
				console.log(`Sending 1 interaction`);
				interaction.editReply({content: 'What kind of Announcement would you like to make?',ephemeral: true, components: [new ActionRowBuilder().setComponents(
					new ButtonBuilder().setCustomId('leak').setLabel('New Leak').setStyle(ButtonStyle.Danger),
					new ButtonBuilder().setCustomId('ogfile').setLabel('New OG File Leak').setStyle(ButtonStyle.Danger),
					new ButtonBuilder().setCustomId('studiosession').setLabel('New Studio Sessions').setStyle(ButtonStyle.Danger),
					 new ButtonBuilder().setCustomId('custom').setLabel(`Custom Announcement`).setStyle(ButtonStyle.Danger)
				)]})


					break;

				default:

			}


	},
	 //announceType(choice, replyTo, channels, reply)
};
