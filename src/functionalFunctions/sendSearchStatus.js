module.exports = function sendSearchStatus(replyTo, reply, channels) {

    channels.sendTyping();
    console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Success Search Status Sent!`);
    replyTo.reply({
      content: ` **999 999 999 999 999 999 \nā **Search Complete** ā **`,
      ephemeral: true,
    });



}
