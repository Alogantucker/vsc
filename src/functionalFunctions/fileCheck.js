//import * as fetch from "https://cdn.skypack.dev/fetch@1.1.0";
//const fetch = require("https://cdn.skypack.dev/fetch@1.1.0");


module.exports = async function fileCheck(link) {
  // need to check lest four char to be either .jpg .png .mp3 .mp4 .m4a or .jpeg to be defined as a file, then check size of only the files
  console.log(`Link  : ${link}`);
  const response = await fetch(link, {method: "HEAD"});
  const size = response.headers.get("content-length");
console.log(`Size : ${size} Vs. ${(8*1024*1024)}`);
if (link.includes(".mov") || size >= (8*1024*1024) ) {
  console.log("Invalid File Size, will send as message instead");
  console.log(link + " _--------------_-----_-------__--link is this");
  return true;

}  else {
  console.log("Valid File Size");
  return false;

  
}

}
