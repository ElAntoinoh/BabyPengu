const { MessageEmbed } = require("discord.js");

module.exports.help = {
    name: 'userinfo',
    aliases: ['userinfo', 'infouser'],
    category: 'informations',
    description: 'Renvoie les informations de l\'utilisateur mentionné.',
    cooldown: 10,
    usage: '<mention_utilisateur>',
    needUser: true,
    applicableOnModerator: true,
    public: true,
    args: true,
};

module.exports.run = ( client, message, args ) => {
    if( args.length === 1 )
    {
        const embed = new MessageEmbed()
            .setColor("#dc143c")
            .setThumbnail(message.mentions.users.first().avatarURL())
            .addFields(
                { name: "Pseudo:", value: `${message.mentions.users.first().username}` },
                { name: "Tag:",    value: `${message.mentions.users.first().tag}`      }
            );
        
        message.channel.send(embed);
    }
    else
        message.channel.send("La commande §userinfo requiert un utilisateur en paramètre.");
};