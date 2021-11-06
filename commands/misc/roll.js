const { MessageEmbed, MessageAttachment } = require("discord.js");
const deImg = new MessageAttachment("./assets/img/de.png");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MISC.ROLL;

module.exports.run = ( client, message, args ) => {
    message.delete();

    var resultat;

    const embed = new MessageEmbed()
        .setColor("#dc143c")
        .attachFiles(deImg)
        .setThumbnail("attachment://de.png");

    switch( args.length )
    {
        case 0:
            embed.addField( "Lancer de 1 à 6 :", Math.floor( Math.random()*6 + 1 ) );
            break;
        
        case 1:
            embed.addField( `Lancer de 1 à ${args[0]} :`, Math.floor( Math.random()*args[0] + 1 ) );
            break;

        case 2:
            if( Number(args[0]) < Number(args[1]) )
                embed.addField( `Lancer de ${args[0]} à ${args[1]} :`, Math.floor( Math.random()*( args[1] - args[0] + 1 ) + Number(args[0]) ) );
            else
                embed.addField( `Lancer de ${args[1]} à ${args[0]} :`, Math.floor( Math.random()*( args[0] - args[1] + 1 ) + Number(args[1]) ) );
            break;
    };
    
    message.channel.send(embed);
};