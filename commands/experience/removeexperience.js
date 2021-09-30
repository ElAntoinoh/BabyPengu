const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.REMOVEEXPERIENCE;

module.exports.run = ( client, message, args ) => {
    const user = message.guild.member( message.mentions.users.first() );
    const expToRemove = parseInt( args[1] );

    if( isNaN(expToRemove) ) return message.reply("Il faut entrer un nombre.");

    client.removeExp( client, user, expToRemove );

    message.channel.send(`Retrait de ${expToRemove} xp à ${user} !`);
};