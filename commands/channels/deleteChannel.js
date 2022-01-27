const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.CHANNELS.DELETECHANNEL;

module.exports.run = async( client, message, args ) => {
    const channel = message.channel;
    const voiceChannels = channel.parent.children.filter( c => c.type === "voice" ).filter( c => c.name === channel.name );

    let nbVoiceChannels = 0;

    if( voiceChannels.length != 0 ) {
        voiceChannels.forEach( c => {
            c.delete();
            nbVoiceChannels++;
        });
    }

    const embed = new MessageEmbed()
        .setAuthor("Suppression d'un salon textuels")
        .setColor("#0000FF")
        .setDescription(`**Catégorie**: ${channel.parent.name}\n**Nom**: ${channel.name}\n**Salons vocaux associés**: ${nbVoiceChannels}`)
        .setTimestamp()
        .setFooter( message.author.username , message.author.displayAvatarURL() );
    
    let guild = await client.getGuild(channel.guild);

    channel.guild.channels.cache.find( c => c.id = guild.logChannel ).send(embed);

    channel.delete();
};