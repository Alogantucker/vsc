// const pickPresence = require('../../functionalFunctions/pickPresence.js');
const { ActivityType} = require('discord.js');
module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
      //setInterval(pickPresence(client), 10 * 1000);
      client.user.setPresence({
        activities: [{
          name: "the Abyss",
          type: ActivityType.Listening,
        }],
        status: "dnd"
      });
      console.log(`${client.user.tag} has logged into Discord!`);


        console.log('Ready!');

        async function pickPresence (client) {
            const options = [
              {
                type: ActivityType.Listening,
                text: "the Abyss",
                status: "dnd"
              },
              {
                type: ActivityType.Streaming,
                text: "Unreleased Juice WRLD",
                status: "idle"
              },
              {
                type: ActivityType.Listening,
                text: "to a Legend",
                status: "dnd"
              },

            ];
            const option = Math.floor(Math.random() * option.length);
            client.user.setPresence({
              activities: [{
                name: options[option].text,
                type: options[option].type,
              }],
              status: options[option].status
            });


        }
    },
};
