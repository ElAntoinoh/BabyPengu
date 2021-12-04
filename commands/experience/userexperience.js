const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.USEREXPERIENCE;

module.exports.run = async ( client, message, args, settings, dbUser ) => {
    const member = message.guild.member( message.mentions.users.first() );

    const embed = new MessageEmbed();

    if(args[0]) {
        const mentionnedUser = await client.getUser( member );

        embed.setTitle(member.nickname ? member.nickname : member.user.username)
             .setThumbnail(member.user.displayAvatarURL())
             .addField(`Niveau ${mentionnedUser.level}`, `${mentionnedUser.experience} xp`);
    }
    else embed.setTitle(message.author.username)
              .setThumbnail(message.author.displayAvatarURL())
              .addField(`Niveau ${dbUser.level}`, `${dbUser.experience} xp`);

    message.channel.send(embed);
};