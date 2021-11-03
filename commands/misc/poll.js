const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MISC.POLL;

module.exports.run = async ( client, message, args ) => {
    embed = new MessageEmbed()
        .setAuthor( message.author.username, message.author.displayAvatarURL() )
        .setColor("#ad14da")
        .setDescription( args.join(" ") )
        .addField("Répondre à la question ci-dessous à l'aide des réactions",
        `
        ✅ - pour
        ❌ - contre
        `)
        .setTimestamp();
    
    const poll = await message.channel.send(embed);

    await poll.react("✅");
    await poll.react("❌");

    message.delete();
};