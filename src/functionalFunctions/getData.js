// RETRIEVE

// IMPORTS ...
const Song = require("../schemas/songSchema");
const mongoose = require("mongoose");
const regExpress = require('../functionalFunctions/regExpress.js');

// -----------------------------------------------If RETRIEVE

// function to get data from database based on song request
// takes the songName as input in order to search
module.exports = async function getData(songName){
  const $regex = new RegExp(regExpress(songName.toString()));
  // search for song in database
  let results = await Song.find({ title: { $regex } }).exec();
  // return song results
  console.log(results);
  return results;

}
