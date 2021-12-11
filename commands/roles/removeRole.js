const { MESSAGES } = require("../../util/constants");
const { MessageMentions: {USERS_PATTERN} } = require('discord.js');

module.exports.help = MESSAGES.COMMANDS.ROLES.REMOVEROLE;

module.exports.run = ( client, message, args ) => {
    if( args[0].match(USERS_PATTERN) ) {
        member = message.mentions.members.first();
        args.shift();
    }
    else member = message.guild.member( message.author );

    args.forEach(roleName => {
        let role = message.guild.roles.cache.find( role => role.name === roleName.toString() );

        if(role) {
            if( !member.roles.cache.has( role.id ) )    return message.channel.send(`Rôle **${roleName}** non possédé.`);

            if( role.permissions.has('ADMINISTRATOR') ) return message.channel.send("Je n'ai pas le droit de retirer ce rôle :(");

            member.roles.remove(role)
                .then( m => message.channel.send(`Retrait du rôle **${roleName}** avec succès !`) )
                .catch( e => console.log(e) );
        }
        else return message.channel.send("Je ne connais pas ce rôle :(");
    });
};