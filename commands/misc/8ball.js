const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MISC.ASK;

module.exports.run = ( client, message, args ) => {
    const replies = ["Oui", "Non", "Peut-être"];
    const question = args.join(" ");
    const response = Math.floor(Math.random() * replies.length );

    embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor("#cb4e41")
        .addField(question, replies[response]);
    
    message.channel.send(embed);
};