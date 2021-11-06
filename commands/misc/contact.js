const { MessageEmbed, MessageAttachment } = require("discord.js");
const drapeauImg = new MessageAttachment("./assets/img/drapeau.jpg");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MISC.CONTACT;

module.exports.run = ( client, message, args ) => {
    message.delete();
    
    const embed = new MessageEmbed()
        .setTitle("Suivez l'Île de Chybre !")
        .setColor("#ffffff")
        .addField("Discord", "https://discord.gg/5Ass5f7S5s")
        .addField("Instagram", "@iledechybre")
        .attachFiles(drapeauImg)
        .setThumbnail("attachment://drapeau.jpg");

    message.channel.send(embed);
};