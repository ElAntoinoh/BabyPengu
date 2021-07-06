const { readdirSync        } = require("fs");
const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX      } = require("C:/Users/toino/OneDrive/Bureau/config"); // Si config.js n'est pas dans le même répertoire
//const { TOKEN, PREFIX      } = require("./config"); // Si config.js est dans le même répertoire

const client = new Client();
["commands", "cooldowns"].forEach(x => client[x] = new Collection); // Création de deux Collections en une fois

//#region Chargement commandes
const loadCommands = (dir = "./commands/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js")); // Tri par extensions

        for( const file of commands ) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            console.log(`Commande chargée: ${getFileName.help.name}`);
        };
    });
};

loadCommands(); // Appel de la fonction
//#endregion

// event message
client.on('message', message => {
    //#region Contrôle existance commande + création de command et args
    if( !message.content.startsWith(PREFIX) || message.author.bot ) return; // Fin si message ne commence pas par le PREFIX ou si le message est écrit par un bot.

    const args = message.content.slice(PREFIX.length).split(/ +/); // Création d'un array contenant tous les arguments ( séparés par des espaces )
    const commandName = args.shift().toLowerCase(); // Récupération du premier argument du message ( nom de la commande )

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName)); // Atribution de la commande en fonction de son nom ( ou d'un de ses aliases )
    if( !command ) return;
    console.log(client.commands);
    //#endregion

    //#region contrôle arguments
    if( command.help.args && !args.length ) {
        let noArgsReply = `J'ai besoin d'arguments pour cette commande, ${message.author}..`;

        if( command.help.usage ) noArgsReply += `\nVoici comment l'utiliser: \n\`${PREFIX}${command.help.name} ${command.help.usage}\``;

        return message.channel.send(noArgsReply);
    }
    //#endregion

    //#region cooldown
    if( !client.cooldowns.has(command.help.name) ) {
        client.cooldowns.set( command.help.name, new Collection() );
    }

    const timeNow = Date.now();
    const tStamps = client.cooldowns.get(command.help.name);
    const cdAmount = ( command.help.cooldown || 5 ) * 1000;

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
});

// event ready
client.on('ready', () => { console.log(`Logged in as ${client.user.tag}!`); });

client.login(TOKEN);