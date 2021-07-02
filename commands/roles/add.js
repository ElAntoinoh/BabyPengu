module.exports.help = {
    name: 'add',
    description: 'Ajoute un ou plusieurs rôles.',
};

module.exports.run = ( client, message, args ) => {
    args.forEach(roleName => {
        let role = message.guild.roles.cache.find( role => role.name === roleName.toString() );

        if( role ) {
            if( message.member.roles.cache.has(role.id) ) return message.channel.send(`Tu as déjà le rôle ${role}.`);

            if( role.permissions.has('ADMINISTRATOR') )   return message.channel.send("Je n'ai pas le droit d'ajouter ce rôle :(");

            message.member.roles.add(role)
                .then( m => message.channel.send(`Tu as maintenant le rôle ${role} !`) )
                .catch( e => console.log(e));
        }
        else
            return message.channel.send("Je ne connais pas ce rôle :(");
    });
};