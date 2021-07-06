const { MessageEmbed } = require("discord.js");

module.exports.help = {
    name: 'unban',
    aliases: ['unban'],
    category: 'moderation',
    description: 'Unban un utilisateur',
    cooldown: 0,
    usage: `<id_utilisateur>`,
    isUserAdmin: false,
    permissions: true,
    args: true,
};

module.exports.run = async ( client, message, args ) => {
    let user = await client.users.fetch(args[0]);

    if( !user ) return message.reply("L'utilisateur n'existe pas!");

    message.guild.members.unban(user);

    const embed = new MessageEmbed()
        .setAuthor( `${user.username} ${user.id}`, user.displayAvatarURL() )
        .setColor("#00ff00")
        .setDescription(`**Action**: unban`)
        .setTimestamp()
        .setFooter( message.author.username, message.author.avatarURL() );
    
    client.channels.cache.get('816784812697714688').send(embed);

    message.channel.send(`<@${user.id}> n'est plus ban.`);
};