const { MessageEmbed } = require("discord.js");
const moment = require("moment");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.INFORMATIONS.SERVERINFO;

module.exports.run = ( client, message, args ) => {
    const guild = message.guild;

    message.channel.send( new MessageEmbed()
        .setColor("#C016FF")
        .setThumbnail(guild.iconURL())
        .addField(`Plus d'informations à propos de ${guild.name}`,
            `▪ ID: ${guild.id}
            ▪ Owner: ${guild.owner.user.tag} (${guild.ownerID})
            ▪ Créé le: ${moment(guild.createdAt).format('DD/MM/YYYY')}
            `
        )
        .addField(`Caractèristiques`,
            `▪ Salons textuels: ${guild.channels.cache.filter(ch => ch.type === "text").size}
            ▪ Salons vocaux: ${guild.channels.cache.filter(ch => ch.type === "voice").size}
            ▪ Roles: ${guild.roles.cache.size}
            ▪ Membres: ${guild.memberCount}
            `
        )
    );
};