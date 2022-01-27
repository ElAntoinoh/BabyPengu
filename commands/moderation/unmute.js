const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNMUTE;

module.exports.run = async ( client, message, args ) => {
    await message.delete();

    let user = message.guild.member( message.mentions.users.first() );

    let muteRole = message.guild.roles.cache.find( r => r.name === 'muted' );

    if( !user.roles.cache.has( muteRole.id ) )
        return message.channel.send("Cet utilisateur n'est pas mute.").then(msg => {
        setTimeout(() => msg.delete(), 3000)
    });
    
    await user.roles.remove( muteRole.id );

    const embed = new MessageEmbed()
        .setAuthor( `${user.user.username} ${user.user.id}`, user.user.displayAvatarURL() )
        .setColor("#00FF00")
        .setDescription(`**Action**: unmute`)
        .setTimestamp()
        .setFooter( message.author.username, message.author.avatarURL() );
    
    let guild = await client.getGuild(message.guild);

    message.guild.channels.cache.find( c => c.id = guild.logChannel ).send(embed);

    message.channel.send(`**<@${user.id}>** n'est plus mute.`).then(msg => {
        setTimeout(() => msg.delete(), 3000)
    });
};