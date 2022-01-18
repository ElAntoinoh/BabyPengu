const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.GAMES.RPC;

module.exports.run = ( client, message, args ) => {
    tabRep = ["pierre", "feuille", "ciseaux"];

    if( !tabRep.includes(args[0]) ) {
        let msg = "Paramètres possibles:\n";

        tabRep.forEach( r => msg += r + ", " );

        msg.length = msg.length - 2;

        return message.channel.send(msg);
    }

    reponse = tabRep.at( Math.floor(Math.random() * tabRep.length) );
    
    switch( tabRep.indexOf(args[0]) - tabRep.indexOf(reponse) ) {
        case -1                      : return message.reply( reponse + " ! Tu as perdu !"     );
        case (-1)*(tabRep.length - 1): return message.reply( reponse + " ! Bien joué !"     );
        case  1                      : return message.reply( reponse + " ! Bien joué !"       );
        default                      : return message.reply( reponse + " ! Personne n'a gagné");
    }
};