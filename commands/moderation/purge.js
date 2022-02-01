const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MODERATION.PURGE;

module.exports.run = async ( client, message, args ) => {
    const guild = await client.getGuild(message.guild);

    if( message.channel.id.localeCompare(guild.logChannel) == 0 ) {
        message.delete();

        return message.channel.send(`Suppression des logs non autorisée.`)
            .then(msg => {
                setTimeout(() => msg.delete(), 3000)
            });
    }

    if( isNaN( args[0] ) || args[0] < 1 ) return message.reply("il faut spécifier un nombre entier.");

    const messages = await message.channel.messages.fetch({
        limit: args[0],
        before: message.id,
    });

    try {
        await message.channel.bulkDelete(messages)
    } catch {
        return message.channel.send("Je n'ai plus accès à ces messages. Les messages datant de plus de deux semaines me sont innaccessible :(")
            .then(msg => { setTimeout(() => msg.delete(), 5000) });
    }

    const embed = new MessageEmbed()
        .setAuthor( `${message.author.username} ${message.author.id}`, message.author.displayAvatarURL() )
        .setColor("#0000FF")
        .setDescription(`**Action**: purge\n**Nombre de messages**: ${args[0]}\n**Salon**: ${message.channel}`)
    
    message.guild.channels.cache.find( c => c.id = guild.logChannel ).send(embed);

    message.channel.send(`✅ Suppression de ${args[0]} messages avec succès !`)
        .then(msg => {
            setTimeout(() => msg.delete(), 3000)
    });

    message.delete();
};