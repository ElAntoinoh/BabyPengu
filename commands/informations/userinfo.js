const { MessageEmbed } = require("discord.js");
const moment = require("moment");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.INFORMATIONS.USERINFO;

module.exports.run = ( client, message, args ) => {
    if(args[0]) member = message.guild.member(message.mentions.users.first());
    else        member = message.member;

    let user = member.user;

    message.channel.send( new MessageEmbed()
        .setColor("#cce0b4")
        .setThumbnail(user.displayAvatarURL())
        .addField(
            `Plus d'informations à propos de **${user.username}** ${member.nickname === undefined ? '' : `( aka **${member.nickname}** )`}`,
            `▪ Nom: ${user.tag}
            ▪ Bot: ${user.bot ? 'oui' : 'non'}
            ▪ Créé le: ${moment(user.createdAt).format('DD/MM/YYYY | hh:mm a')}
            ▪ Status: ${user.presence.status}
            `
        )
        .addField(
            `Informations liées au serveur`,
            `▪ A rejoint le: ${moment(member.joinedAt)}
            ▪ Possède les rôles suivants:\n${member.roles.cache.map(roles => `\`${roles.name}\``).join('\n')}
            `
        )
    );
};