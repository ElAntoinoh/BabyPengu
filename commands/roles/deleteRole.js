const { MessageEmbed, MessageAttachment } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.ROLES.DELETEROLE;

module.exports.run = async ( client, message, args ) => {
    let nom = args.join("-");

    await message.guild.roles.cache.filter( role => role.name === nom ).forEach( role => role.delete() );
 
    message.channel.send(`Rôle **${nom}** supprimé !`).then( msg => {
        setTimeout(() => msg.delete(), 3000)
    });
};
