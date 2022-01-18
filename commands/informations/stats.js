const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.INFORMATIONS.STATS;

module.exports.run = ( client, message, args ) => {
    message.guild.members.fetch().then(fetchAll => {
        const online  = fetchAll.filter( m => m.presence.status === 'online'  );
        const idle    = fetchAll.filter( m => m.presence.status === 'idle'    );
        const offline = fetchAll.filter( m => m.presence.status === 'offline' );
        const dnd     = fetchAll.filter( m => m.presence.status === 'dnd'     );

        message.channel.send( new MessageEmbed()
            .setColor("#dc143c")
            .setTitle(`Statistiques de ${message.guild.name}`)
            .addFields(
                { name: "membres"        , value: fetchAll.size },
                { name: "en ligne"       , value: online  .size },
                { name: "innactif"       , value: idle    .size },
                { name: "ne pas déranger", value: dnd     .size },
                { name: "hors ligne"     , value: offline .size },
            )
        );
    });
};