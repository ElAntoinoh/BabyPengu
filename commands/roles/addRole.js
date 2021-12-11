const { MESSAGES } = require("../../util/constants");
const { MessageMentions: {USERS_PATTERN} } = require('discord.js');

module.exports.help = MESSAGES.COMMANDS.ROLES.ADDROLE;

module.exports.run = ( client, message, args ) => {
    if( args[0].match(USERS_PATTERN) ) {
        member = message.mentions.members.first();
        args.shift();
    }
    else member = message.guild.member( message.author );

    args.forEach( roleName => {
        let role = message.guild.roles.cache.find( role => role.name === roleName.toString() );

        if(role) {
            if( member.roles.cache.has( role.id ) )     return message.channel.send(`Rôle **${roleName}** déjà possédé.`);

            if( role.permissions.has('ADMINISTRATOR') ) return message.channel.send("Je n'ai pas le droit d'ajouter ce rôle :(");

            member.roles.add(role)
                .then( m => message.channel.send(`Rôle **${roleName}** ajouté avec succès !`) )
                .catch( e => console.log(e) );
        }
        else return message.channel.send("Je ne connais pas ce rôle :(");
    });
};