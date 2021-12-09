const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.ROLES.REMOVE;

module.exports.run = ( client, message, args ) => {
    args.forEach(roleName => {
        let role = message.guild.roles.cache.find( role => role.name === roleName.toString() );

        if(role) {
            if( !message.member.roles.cache.has( role.id ) ) return message.channel.send(`Tu n'as pas le rôle **${roleName}**.`);

            if( role.permissions.has('ADMINISTRATOR') )      return message.channel.send("Je n'ai pas le droit de retirer ce rôle :(");

            message.member.roles.remove(role)
                .then( m => message.channel.send(`Tu n'as plus le rôle **${roleName}** !`) )
                .catch( e => console.log(e) );
        }
        else return message.channel.send("Je ne connais pas ce rôle :(");
    });
};