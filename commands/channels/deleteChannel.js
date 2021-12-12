const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.CHANNELS.DELETECHANNEL;

module.exports.run = ( client, message, args ) => {
    const channel = message.channel;
    const voiceChannels = channel.parent.children.filter( c => c.type === "voice" ).filter( c => c.name === channel.name );

    if( voiceChannels.length != 0 ) {
        voiceChannels.forEach( c => {
            c.delete();
        });
    }

    channel.delete();
};