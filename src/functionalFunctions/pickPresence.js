const { ActivityType} = require('discord.js');

module.exports = (client) => {
  client.pickPresence = async () => {
    const options = [
      {
        type: ActivityType.Listening,
        text: "to the Abyss",
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

  };
};
