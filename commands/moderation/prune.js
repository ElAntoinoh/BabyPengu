const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MODERATION.PRUNE;

module.exports.run = async ( client, message, args ) => {
    await message.delete();

    let user = message.guild.member( message.mentions.users.first() );

    if( isNaN( args[1] ) || args[1] < 1 ) return message.reply("syntaxe: <@user> <nombre_entier>");

    const messages = ( await message.channel.messages.fetch({
        before: message.id,
    })).filter( a => a.author.id === user.id ).array();

    if( messages.length === 0 || !user ) return message.reply("Pas de messages à supprimer sur cet utilisateur");

    messages.length = args[1];

    /*if( messages.length === 1 ) await messages[0].delete();
    else await message.channel.bulkDelete(messages);*/
    await message.channel.bulkDelete(messages);

    const embed = new MessageEmbed()
        .setAuthor( `${message.author.username} ${message.author.id}`, message.author.displayAvatarURL() )
        .setColor("#0000FF")
        .setDescription(`**Action**: prune\n**Utilisateur**: ${user}\n**Nombre de messages**: ${args[1]}\n**Salon**: ${message.channel}`)
    
    let guild = await client.getGuild(message.guild);

    message.guild.channels.cache.find( c => c.id = guild.logChannel ).send(embed);

    message.channel.send(`✅ Suppression de ${args[1]} messages de ${user} avec succès !`);

    setTimeout( function(){ message.channel.lastMessage.delete(); }, 3000 )
};