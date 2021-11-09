const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MISC.BIRTHDAY;

module.exports.run = async ( client, message, args ) => {
    const param = args[0];

    const member = message.guild.member( message.mentions.users.first() );

    switch(param) {
        case "set":
            if( !member ) return message.channel.send("Erreur de syntaxe. <@user> <ddmm>");

            const date = args[2];

            const day   = date.slice(0, 2);
            const month = date.slice(3);

            if( !date.length === 4 || Number(day) > 31 || Number(day) < 1 || Number(month) > 12 || Number(month) < 1 ) return message.channel.send("Erreur de syntaxe. <@user> <ddmm>");

            await client.updateUser( member, { birthday: date } );
            break;

        case "del":
            if( !member ) return message.channel.send("Erreur de syntaxe. <@user> <ddmm>");

            await client.updateUser( member, { birthday: "0000" } );
            break;
        
        case "of":
            const user = await client.getUser(member);

            if( user.birthday === "0000" ) return message.channel.send( "Je ne connais pas la date de naissance de cet utilisateur" );
            else                           return message.channel.send( user.birthday.slice(0, 2) + "/" + user.birthday.slice(2) );

        default:
            return message.reply("Erreur dans les paramètres. Utilisez 'set', 'del' ou 'of'.");
    };
};