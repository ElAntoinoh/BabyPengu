const { MessageEmbed } = require("discord.js");

module.exports.help = {
    name: 'prune',
    aliases: ['prune'],
    category: 'moderation',
    description: 'Purge un nombre de messages spécifié sur un utilisateur spécifié',
    cooldown: 5,
    usage: `<@utilisateur> <nombre_de_messages>`,
    needUser: true,
    applicableOnModerator: false,
    public: false,
    args: true,
};

module.exports.run = async ( client, message, args ) => {
    let user = message.guild.member(message.mentions.users.first());

    if( isNaN(args[1]) || args[1] < 1 ) return message.reply("il faut spécifier un nombre de messages à supprimer.");

    const messages = (await message.channel.messages.fetch({
        before: message.id,
    })).filter( a => a.author.id === user.id ).array();

    if( messages.length === 0 || !user ) return message.reply("Pas de messages à supprimer sur cet utilisateur");

    messages.length = args[1];

    if( messages.length === 1 ) await messages[0].delete();
    else await message.channel.bulkDelete(messages);

    const embed = new MessageEmbed()
        .setAuthor( `${message.author.username} ${message.author.id}`, message.author.displayAvatarURL() )
        .setColor("#0000ff")
        .setDescription(`**Action**: prune\n**Utilisateur**: ${args[0]}\n**Nombre de messages**: ${args[1]}\n**Salon**: ${message.channel}`)
    
    client.channels.cache.get('816784812697714688').send(embed);
};