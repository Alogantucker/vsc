const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds]});
const {token, databaseToken} = process.env;
const mongoose = require('mongoose');
const statuses = [{
        name: "𝟡𝟡𝟡 Till WRLD Blows",
        type: "PLAYING"
    },
    {
        name: "Road Rage 🎵 𝟡𝟡𝟡",
        type: "LISTENING"
    },
];
client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");

    client.login(token)
    (async ()=> {
        await connect(databaseToken).catch(console.error);
    })();
    
})();s
