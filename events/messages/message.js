const { Collection } = require('discord.js');

module.exports = {
    name: 'message',

    async execute( message, client ) {
        //#region base de données
        const settings = await client.getGuild( message.guild                 );
        const dbUser   = await client.getUser ( message.member, message.guild );

        if(!dbUser) await client.createUser({
            guildID:   message.member.guild.id,
            guildName: message.member.guild.name,
            userID:    message.member.id,
            userName:  message.member.user.tag
        });

        const expCd = Math.floor( Math.random()*5 ) + 1;
        const expToAdd = Math.floor( Math.random()*20 ) + 1;
        
        if( expCd === 1 && !message.author.bot ) await client.addExp( client, message.guild, message.member.user, expToAdd );

        const userLevel = Math.floor(0.2 * Math.sqrt( dbUser.experience ));

        if( dbUser.level < userLevel )
        {
            message.reply(`bravo à toi, tu viens de monter au niveau ***${userLevel}*** ! Incroyable magueule !`);
            client.updateUser( message.member, message.guild, { level: userLevel } );
        }
        else
        {
            if( dbUser.level > userLevel )
            {
                message.reply(`tu rettrogrades au niveau ***${userLevel}*** ! T'es chelou toi. !`);
                client.updateUser( message.member, message.guild, { level: userLevel } );
            }
        }
        //#endregion

        if( message.channel.type === "dm" ) return client.emit( "directMessage", message );

        //#region Infos de base
        if( !message.content.startsWith( settings.prefix ) ) return;

        const args = message.content.slice( settings.prefix.length ).split(/ +/); // Array contenant les arguments

        const commandName = args.shift().toLowerCase(); // Nom de la commande
        const command = client.commands.get(commandName) || client.commands.find( cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName) ); // Objet commande

        const userMentioned = message.mentions.users.first(); // Premier utilisateur mentionné
        //#endregion

        //#region contrôle arguments
        if( !command ) return message.channel.send(`Cette commande n'existe pas.`);

        if( message.guild.roles.cache.find( role => role.name === settings.moderationRole ) ) { // S'il existe un role de modération
            if( !command.help.public && !message.member.roles.cache.has( message.guild.roles.cache.find( role => role.name === settings.moderationRole ).id ) )
                return message.channel.send("Cette commande est réservée aux modérateurs");

            if( !command.help.modo && !message.member.permissions.has("ADMINISTRATOR") )
                return message.channel.send("Cette commande est réservée aux administrateurs");
        }

        if( command.help.args && !args.length )
            return message.channel.send("Cette commande a besoin d'arguments");

        if( command.help.needUser && !userMentioned )
            return message.channel.send("Cette commande a besoin de la mention d'un utilisateur");

        if( ( userMentioned && !command.help.applicableOnModerator && message.guild.member(userMentioned).roles.cache.has( message.guild.roles.cache.find( role => role.name === settings.moderationRole ).id ) ) && !( userMentioned && userMentioned === message.author ) )
            return message.channel.send("Tu n'as pas le droit d'utiliser cette commande sur cet utilisateur.");
        //#endregion

        //#region cooldown
        if( !client.cooldowns.has( command.help.name ) )
            client.cooldowns.set( command.help.name, new Collection() );

        const timeNow  = Date.now();
        const tStamps  = client.cooldowns.get( command.help.name );
        const cdAmount = ( command.help.cooldown ) * 1000;

        if( tStamps.has( message.author.id ) ) {
            const cdExpirationTime = tStamps.get( message.author.id ) + cdAmount;

            if( timeNow < cdExpirationTime ) {
                timeLeft = ( cdExpirationTime - timeNow ) / 1000;
                return message.reply(`tu dois attendre encore ${timeLeft.toFixed(0)} seconde(s) avant de réutiliser la commande \`${command.help.name}\`.`);
            }
        }

        tStamps.set( message.author.id, timeNow );
        setTimeout( () => tStamps.delete( message.author.id ), cdAmount );
        //#endregion

        // Exécution de la commande
        command.run( client, message, args, settings, dbUser );
    },
};