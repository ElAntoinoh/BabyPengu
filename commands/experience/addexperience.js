const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.ADDEXPERIENCE;

module.exports.run = async ( client, message, args ) => {
    const settings = await client.getGuild( message.guild );

    if( message.mentions.users.first() ) {
        member = message.guild.member( message.mentions.users.first() );
        expToAdd = parseInt( args[1] );
    } else {
        member = message.guild.member( message.author );
        expToAdd = parseInt( args[0] );
    }

    if( isNaN(expToAdd) ) return message.reply("Il faut entrer un nombre.");

    client.addExp( client, member, expToAdd );

    message.channel.send(`Ajout de ${expToAdd} xp à ${member.nickname ? member.nickname : member.user.username} !`);
    message.guild.channels.cache.find( c => c.id = settings.logChannel ).send(`**${message.author.tag}** a ajouté **${expToAdd}** xp à **${member.user.tag}**.`);
};