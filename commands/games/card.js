const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.GAMES.CARD;

module.exports.run = ( client, message, args ) => {
    tabVal = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Dame', 'Roi'];
    tabSigne = ['coeur', 'carreau', 'pique', 'trèfle'];

    val   = tabVal  [Math.ceil(Math.random()*tabVal  .length)-1];
    signe = tabSigne[Math.ceil(Math.random()*tabSigne.length)-1];

    message.reply(`tu as pioché la carte: ${val} de ${signe}.`);
};