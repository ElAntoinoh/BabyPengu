const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MODERATION.REPORT;

const isFirstCharNumeric = c => /\d/.test(c);

module.exports.run = async ( client, message, args ) => {
    const user = message.mentions.users.first();
    let raison = args[1];

    if(!raison) return message.reply("Indiquez une raison");

    const embed = new MessageEmbed()
        .setAuthor( message.author.tag, message.author.displayAvatarURL() )
        .setThumbnail( user.displayAvatarURL() )
        .addFields(
            {
                name: "Reporté",
                value: user.username,
                inline: true
            },

            {
                name: "Lien du message",
                value: isFirstCharNumeric( raison.charAt(0) ) ?
                    `[click me](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${args[1]})` :
                    "Aucun lien précisé",
                inline: true
            },

            {
                name: "Raison",
                value: isFirstCharNumeric( raison.charAt(0) ) ?
                    args.slice( args.indexOf(args[2]) ).join(" ") :
                    args.slice( args.indexOf(args[1]) ).join(" "),
                inline: false
            }
        )
        .setTimestamp();

    let guild = await client.getGuild(message.guild);

    message.guild.channels.cache.find( c => c.id = guild.logChannel ).send(embed);
};