const { Collection } = require('discord.js');
const { PREFIX     } = require("../../../config"); // Si config.js est au dessus du dossier principal
//const { TOKEN, PREFIX } = require("../../config"); // Si config.js est dans le dossier principal

module.exports = ( client, message ) => {
    //#region Infos de base
    if( !message.content.startsWith(PREFIX) ) return; // || message.author.bot ) return;

    const args = message.content.slice(PREFIX.length).split(/ +/); // Array contenant les arguments

    const commandName = args.shift().toLowerCase(); // Nom de la commande
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName)); // Objet commande

    const userMentioned = message.mentions.users.first(); // Premier utilisateur mentionné
    //#endregion

    //#region contrôle arguments
    if( !command )
        return message.channel.send(`Cette commande n'existe pas.`);
    
    if( !command.help.public && !message.member.roles.cache.has( message.guild.roles.cache.find( role => role.name === "Modérateur" ).id ) )
        return message.channel.send("Tu n'as pas le droit d'utiliser cette commande.");

    if( command.help.args && !args.length )
        return message.channel.send("Cette commande a besoin d'arguments");

    if( command.help.needUser && !userMentioned )
        return message.channel.send("Cette commande a besoin de la mention d'un utilisateur");

    if( ( userMentioned && !command.help.applicableOnModerator && message.guild.member(userMentioned).roles.cache.has( message.guild.roles.cache.find( role => role.name === "Modérateur" ).id ) ) && !( userMentioned && userMentioned === message.author ) )
        return message.channel.send("Tu n'as pas le droit d'utiliser cette commande sur cet utilisateur.");
    //#endregion

    //#region cooldown
    if( !client.cooldowns.has(command.help.name) )
        client.cooldowns.set( command.help.name, new Collection() );

    const timeNow  = Date.now();
    const tStamps  = client.cooldowns.get(command.help.name);
    const cdAmount = ( command.help.cooldown ) * 1000;

    if( tStamps.has(message.author.id)) {
        const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

        if( timeNow < cdExpirationTime ) {
            timeLeft = ( cdExpirationTime - timeNow ) / 1000;
            return message.reply(`tu dois attendre encore ${timeLeft.toFixed(0)} seconde(s) avant de réutiliser la commande \`${command.help.name}\`.`);
        }
    }

    tStamps.set( message.author.id, timeNow );
    setTimeout( () => tStamps.delete(message.author.id), cdAmount );
    //#endregion

    // Exécution de la commande
    command.run( client, message, args );
}