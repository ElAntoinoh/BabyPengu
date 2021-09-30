const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNMUTE;

module.exports.run = async ( client, message, args ) => {
    let user = message.guild.member( message.mentions.users.first() );

    let muteRole = message.guild.roles.cache.find( r => r.name === 'muted' );

    if( !user.roles.cache.has( muteRole.id ) ) return message.reply("Cet utilisateur n'est pas mute.");
    
    await user.roles.remove( muteRole.id );

    const embed = new MessageEmbed()
        .setAuthor( `${user.user.username} ${user.user.id}`, user.user.displayAvatarURL() )
        .setColor("#00FF00")
        .setDescription(`**Action**: unmute`)
        .setTimestamp()
        .setFooter( message.author.username, message.author.avatarURL() );
    
    client.channels.cache.get('816784812697714688').send(embed);

    message.channel.send(`<@${user.id}> n'est plus mute.`);
};