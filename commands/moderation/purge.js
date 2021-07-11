const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MODERATION.PURGE;

module.exports.run = async ( client, message, args ) => {
    if( isNaN(args[0]) || args[0] < 1 ) return message.reply("il faut spécifier un nombre entier.");

    const messages = await message.channel.messages.fetch({
        limit: args[0],
        before: message.id,
    });

    await message.channel.bulkDelete(messages);

    const embed = new MessageEmbed()
        .setAuthor( `${message.author.username} ${message.author.id}`, message.author.displayAvatarURL() )
        .setColor("#0000ff")
        .setDescription(`**Action**: purge\n**Nombre de messages**: ${args[0]}\n**Salon**: ${message.channel}`)
    
    client.channels.cache.get('816784812697714688').send(embed);
};