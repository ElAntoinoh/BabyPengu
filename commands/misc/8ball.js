const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MISC.ASK;

module.exports.run = ( client, message, args ) => {
    message.delete();

    const replies = [
        "Oui", "Certainement", "Absolument", "Ba oui", "Bien évidemment",
        "Non", "Certainement pas", "Clairement pas", "Ba non", "J'espère que tu te moques de moi",
        "Peut-être", "Je suis pas sûr..", "Je ne sais pas", "Mmmh.. bonne question", "Alors là ! Tu me poses une colle !"
    ];
    const question = args.join(" ");
    const response = Math.floor( Math.random() * replies.length );

    embed = new MessageEmbed()
        .setAuthor( message.author.username, message.author.displayAvatarURL() )
        .setColor("#cb4e41")
        .addField( question, replies[response] );

    message.channel.send(embed);
};