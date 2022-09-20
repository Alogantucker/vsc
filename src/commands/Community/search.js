const { SlashCommandBuilder } = require('@discordjs/builders');
const format = require('../../functionalFunctions/format.js');
const sortChoice = require('../../functionalFunctions/sortChoice.js');
const retrieve = require('../../functionalFunctions/retrieve.js');
const control = require('../../functionalFunctions/control.js');
// Variables
let songFile = 'songFile';
let coverArt = 'coverArt';
let snippet = 'snippet';
let session = 'session';
let info = 'info';

// get data from JSON
// const fs = require('fs');
// let data = fs.readFileSync('./Abyss (V 0.0.1)src/information.json');
let data; 
//let songInfo = JSON.parse(data);
let songInfo = "yes";

var infoArray = [];
for (var object of songInfo) {
	infoArray.push(object);
}

let testName = infoArray[0].name[0];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('search')
		.setDescription('Search for 999 SHIT!')
		.addStringOption(option =>
			option
				.setName('choice')
				.setDescription('Search for Cover Art, Song Link, Snippets, Sessions, or General Information')
				.setRequired(true)
				.addChoices(
					{ name: 'Song File', value: 'songFile' },
					{ name: 'General Info', value: 'info' },
					{ name: 'Cover Art', value: 'coverFile' },
					{ name: 'Snippets', value: 'snipFile' },
					{ name: 'Sessions', value: 'sessionFile' },
					{ name: 'Era', value: 'era' }
				))
		.addStringOption(option =>
			option
				.setName('songname')
				.setDescription('Type the Juice WRLD Song Name you would like to search')
				.setRequired(true)),

	async execute(interaction, client) {
		let choice = interaction.options.getString('choice');
		let input = interaction.options.getString('songname');
		let song = format(input);
		let replyTo = interaction;
		let channels = interaction.channel;
		let counter = 0;
		let reply = '';
    let songArray = infoArray;
// sortChoice(choice, input, song, replyTo, channels, counter, reply, songArray);
// retrieve(choice, input, song, replyTo, channels, counter, reply );
 control(choice, input, song, replyTo, channels, counter, reply)
	},
};
