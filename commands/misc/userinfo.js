const { MessageEmbed } = require("discord.js");
const moment = require("moment");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MISC.USERINFO;

module.exports.run = ( client, message, args ) => {
    let member = message.member;
    if(args[0]) member = message.guild.member(message.mentions.users.first());

    let user = member.user;

    const embed = new MessageEmbed()
        .setColor("#cce0b4")
        .setThumbnail(user.displayAvatarURL())
        .addField(
            `Plus d'informations à propos de **${user.username}** ${member.nickname === undefined ? '' : `( aka **${member.nickname}** )`}`,
            `▪ Nom: ${user.tag}
            ▪ Bot: ${user.bot ? 'true' : 'false'}
            ▪ Créé le: ${moment(user.createdAt).format('DD/MM/YYYY | hh:mm')}
            ▪ Status: ${user.presence.status}
            `
        )
        .addField(
            `Informations liées au serveur`,
            `▪ A rejoint le: ${moment(member.joinedAt)}
            ▪ Possède les rôles suivants: ${member.roles.cache.map(roles => `\`${roles.name}\``).join(', ')}
            `
        );
    
    message.channel.send(embed);
};