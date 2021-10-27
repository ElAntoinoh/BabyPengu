const { MessageEmbed, MessageAttachment } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MODERATION.CREATEROLE;

module.exports.run = ( client, message, args ) => {
    let nom, couleur;
    let r = g = b = 255; // blanc par défaut

    if( args[args.length-1].startsWith("#") ) { // Rôle coloré
        nom = args.slice(0, args.length-1).join(" ");

        couleur = args[args.length-1].slice(1);

        if( couleur.length == 6 && /^[A-F0-9]+$/i.test(couleur) ) { // Vérification valeur hexadécimale
            r = parseInt(couleur.slice(0, 2), 16);
            g = parseInt(couleur.slice(2, 4), 16);
            b = parseInt(couleur.slice(4)   , 16);
        } else {
            message.channel.send("Format de couleur invalide. Format requis: '#xxxxxx'");
        }
    }
    else nom = args.join(" ");

    // Création du rôle
    message.guild.roles.create({
        data: {
            name: nom,
            color: [r, g, b],
        }
    });
};