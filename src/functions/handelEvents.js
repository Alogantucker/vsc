const fs = require("fs");
const { connection } = require("mongoose");

module.exports = (client) => {
	console.log("Setting up event listeners");

	const setupEventListeners = (eventTarget, folder) => {
		const events = fs
			.readdirSync(`./src/events/${folder}`)
			.filter(file => file.endsWith(".js"))
			 .map(file => require(`../events/${folder}/${file}`));
            const files= fs
            .readdirSync(`./src/events/${folder}`)
            .filter(file => file.endsWith(".js"))
console.log(files)

		for (const event of events) {
			if (event.once)
				eventTarget.once(event.name, (...args) => event.execute(...args, client));
			else
				eventTarget.on(event.name, (...args) => event.execute(...args, client));
		}
	};

	setupEventListeners(client, "client");
	setupEventListeners(connection, "mongo");
};