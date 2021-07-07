const { MessageEmbed } = require("discord.js");

module.exports.help = {
    name: 'kick',
    aliases: ['kick'],
    category: 'moderation',
    description: 'Kick un utilisateur',
    cooldown: 0,
    usage: `<@utilisateur> <raison>`,
    needUser: true,
    applicableOnModerator: false,
    public: false,
    args: true,
};

module.exports.run = ( client, message, args ) => {
    const user = message.mentions.users.first();
    const reason = ( args.splice(1).join(' ') || "Pas de raison spécifiée" );

    user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas!");

    const embed = new MessageEmbed()
        .setAuthor( `${user.username} ${user.id}`, user.avatarURL() )
        .setColor("#ffa500")
        .setDescription(`**Action**: kick\n**Raison**: ${reason}`)
        .setTimestamp()
        .setFooter( message.author.username, message.author.avatarURL() );

    client.channels.cache.get('816784812697714688').send(embed);
};