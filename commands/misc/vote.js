const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MISC.VOTE;

module.exports.run = async ( client, message, args ) => {
    embed = new MessageEmbed()
        .setAuthor( message.author.username, message.author.displayAvatarURL() )
        .setColor("#ad14da")
        .setDescription( args.join(" ") )
        .addField("Répondre à la question ci-dessous à l'aide des réactions",
        `
        ✅ - Oui
        ❌ - Non
        `)
        .setTimestamp();
    
    const vote = await message.channel.send(embed);

    await vote.react("✅");
    await vote.react("❌");

    message.delete();
};