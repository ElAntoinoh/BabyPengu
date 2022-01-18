const { MESSAGES } = require("../../util/constants");
const { MessageMentions: {USERS_PATTERN} } = require('discord.js');

module.exports.help = MESSAGES.COMMANDS.ROLES.ADDROLE;

module.exports.run = ( client, message, args, settings ) => {
    let members = [];

    if( message.mentions.length != 0 ) members    = message.mentions.members;
    else                               members[0] = message.guild.member( message.author );

    members.forEach( member => {
        args.forEach( roleName => {
            let role = message.guild.roles.cache.find( role => role.name === roleName );

            if(role) {
                if( member.roles.cache.has( role.id ) )
                    return message.channel.send(`Rôle **${roleName}** déjà possédé.`).then(msg => {
                        setTimeout(() => msg.delete(), 3000)
                    });

                if( role.permissions.has('ADMINISTRATOR') || role.id == settings.moderationRole )
                    return message.channel.send(`Je n'ai pas le droit d'ajouter le rôle **${roleName}** :(`).then(msg => {
                        setTimeout(() => msg.delete(), 3000)
                    });

                member.roles.add(role.id)
                    .catch( e => console.log(e) );
            }
        });
    });

    message.channel.send("Changements effectués !").then(msg => {
        setTimeout(() => msg.delete(), 3000)
    });

    message.delete();
};