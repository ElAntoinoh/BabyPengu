const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MODERATION.REMOVEFROM;

module.exports.run = ( client, message, args ) => {
    user = message.guild.member( message.mentions.users.first() );

    if( `<@!${user.user.id}>` === args[0] ) {
        args.shift(); 

        args.forEach( roleName => {
            let role = message.guild.roles.cache.find( role => role.name === roleName.toString() );

            if(role) {
                if( !user.roles.cache.has( role.id ) )      return message.channel.send(`${user.toString()} n'a pas le rôle **${roleName}**.`);

                if( role.permissions.has('ADMINISTRATOR') ) return message.channel.send("Je n'ai pas le droit de retirer ce rôle :(");

                user.roles.remove(role)
                    .then( m => message.channel.send(`${user.toString()} n'a plus le rôle **${roleName}** !`) )
                    .catch( e => console.log(e));
            }
            else
                return message.channel.send("Je ne connais pas ce rôle :(");
        });
    }
    else return message.channel.send("L'utilisateur doit être mentionné avant les rôles.");
};