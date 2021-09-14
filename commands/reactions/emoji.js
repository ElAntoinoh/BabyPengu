const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.REACTIONS.EMOJI;

module.exports.run = async ( client, message, args ) => {
    await message.react('🟥');
    await message.react('🟩');
    await message.react('🟦');
};