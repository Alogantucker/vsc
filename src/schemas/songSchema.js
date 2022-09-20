const { Schema, model } = require("mongoose");
const songSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: { type: [String], required: true },
  //songLink: [String],
  songFile: [String],
  //coverLink: [String],
  coverFile: [String],
  //snipLink: [String],
  snipFile: [String],
  //sessionLink: [String],
  sessionFile: [String],
  era: [String],
  status: [String],
  dateReleased: [String],
  dateLeaked: [String],
  dateRecorded: [String],
  producedBy: [String],
  features: [String]
});

module.exports = model("Song", songSchema, "Song");
