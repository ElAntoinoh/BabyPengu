const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.REACTIONS.ALLROLES;

module.exports.run = ( client, message, args ) => {
    const blueRole   = message.guild.roles.cache.get("860646890621108275");
    const orangeRole = message.guild.roles.cache.get("860631983573958676");
    const memberRole = message.guild.roles.cache.get("861944147530874920");

    const blueCircle   = "🔵";
    const orangeCircle = "🟠";
    const drapeau      = message.guild.emojis.cache.get("863525869463928862");


    const embed = new MessageEmbed()
        .setTitle("Bienvenue")
        .setDescription("Choisis ta team !")
        .setColor("#ff0000")
        .addField(
            "les rôles disponibles:",
            `
                ${blueCircle}   - ${blueRole  .toString()}
                ${orangeCircle} - ${orangeRole.toString()}
                ${drapeau}      - ${memberRole.toString()}
            `
        );

    try {
        client.channels.cache.get('862047950813003776').send(embed).then( async message => {
            await message.react(blueCircle  );
            await message.react(orangeCircle);
            await message.react(drapeau     );
        });
    } catch(error) {
        console.error(error);
    }
};