const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.USEREXPERIENCE;

module.exports.run = ( client, message, args, settings, dbUser ) => {
    message.reply(`Tu possèdes ${dbUser.experience} points d'experience`)
};