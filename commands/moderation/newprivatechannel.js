const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MODERATION.NEWPRIVATECHANNEL;

module.exports.run = ( client, message, args ) => {
    const categoryID = args[0];
    let nom = args.slice(1).join(" ");

    if( !message.guild.channels.cache.find( channel => channel.id === categoryID ) && !message.guild.channels.cache.find( channel => channel.type === "GUILD_CATEGORY" ) )
        return message.channel.send("Vous devez indiquer en premier paramètre l'identifiant d'une catégorie");

    if( !nom ) return message.channel.send("Vous devez indiquer un nom");

    message.guild.channels.create( nom, {
        type: 'text',
        parent: categoryID,
        permissionOverwrites: [
            {
                id: message.guild.roles.everyone,
                deny: ['VIEW_CHANNEL'] // channel non visible par everyone
            },
            {
                id: message.author,
                allow: ['VIEW_CHANNEL'] // channel visible par créateur
            },
        ],
    });
};