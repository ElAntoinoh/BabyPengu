const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.ROLES.ADDTO;

module.exports.run = ( client, message, args ) => {
    member = message.guild.member( message.mentions.users.first() );

    if( `<@!${member.id}>` === args[0] ) {
        args.shift();

        args.forEach( roleName => {
            let role = message.guild.roles.cache.find( role => role.name === roleName.toString() );

            if(role) {
                if( member.roles.cache.has( role.id ) )     return message.channel.send(`${member.toString()} a déjà le rôle **${roleName}**.`);

                if( role.permissions.has('ADMINISTRATOR') ) return message.channel.send("Je n'ai pas le droit d'ajouter ce rôle :(");

                member.roles.add(role)
                    .then( m => message.channel.send(`${member.toString()} a maintenant le rôle **${roleName}** !`) )
                    .catch( e => console.log(e) );
            }
            else return message.channel.send("Je ne connais pas ce rôle :(");
        });
    }
    else return message.channel.send("L'utilisateur doit être mentionné avant les rôles.");
};