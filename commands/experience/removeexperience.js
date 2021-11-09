const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.REMOVEEXPERIENCE;

module.exports.run = async ( client, message, args ) => {
    const settings = await client.getGuild( message.guild );

    if( message.mentions.users.first() ) {
        member = message.guild.member( message.mentions.users.first() );
        expToRemove = parseInt( args[1] );
    } else {
        member = message.guild.member( message.author );
        expToRemove = parseInt( args[0] );
    }

    if( isNaN(expToRemove) ) return message.reply("Il faut entrer un nombre.");

    client.removeExp( member, expToRemove );

    message.channel.send(`Retrait de ${expToRemove} xp à ${member.nickname ? member.nickname : member.user.username} !`);
    message.guild.channels.cache.find( c => c.id = settings.logChannel ).send(`**${message.author.tag}** a retiré **${expToRemove}** xp à **${member.user.tag}**.`);
};