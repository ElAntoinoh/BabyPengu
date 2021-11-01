const { MessageEmbed } = require("discord.js");
const { evaluate     } = require("mathjs");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MISC.MATH;

module.exports.run = async (client, message, args) => {
    let calcul;

    try {
        calcul = evaluate(args.join(" "));
    } catch (e) {
        return message.channel.send('Entrez des chiffres valides !');
    }

    const embed = new MessageEmbed()
        .setColor('#dc143c')
        .addField('Chiffres', args.join(' '))
        .addField('Résutlat', calcul);
    
    message.channel.send(embed);
};