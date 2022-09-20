const { Schema, model } = require("mongoose");
const guildSchema = new Schema({
  _id: Schema.Types.ObjectId,
  guildId: String,
  guildName: String,
  guildIcon: { type: String, required: false }, // pass in a link to an image you want as server icon
});

module.exports = model("Guild", guildSchema, "guilds");
