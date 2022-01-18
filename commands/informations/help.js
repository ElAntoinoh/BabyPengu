const { MessageEmbed } = require("discord.js");
const { readdirSync  } = require("fs");

const categoryList = readdirSync('./commands');

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.INFORMATIONS.HELP;

module.exports.run = ( client, message, args, settings ) => {
    if( !args.length ) {
        const embed = new MessageEmbed()
            .setColor("#36393f")
            .addField("Liste des commandes", `Pour plus d'informations sur une commande, tapez\n\`${settings.prefix}help <command_name>\`\n`)
            .setThumbnail(client.user.avatarURL());
        
        for( const category of categoryList ) {
            embed.addField(
                `${category}`,
                `${client.commands.filter( cat => cat.help.category === category.toLowerCase() ).map( cmd => cmd.help.name ).join(', ')}`
            );
        };

        return message.channel.send(embed);
    }
    else {
        const command = client.commands.get( args[0] ) || client.commands.find( cmd => cmd.help.aliases && cmd.help.aliases.includes( args[0] ) );
        if( !command ) return message.channel.send("Cette commande n'existe pas.");

        const embed = new MessageEmbed()
            .setColor("#36393f")
            .setTitle(`--- ${command.help.name} ---`)
            .addField("Description", `${command.help.description}`, true);
        
        if( command.help.aliases.length > 1 )
            embed.addField("Alias", `${command.help.aliases.join(', ')}`, true);

        embed.addField("Utilisation", command.help.usage ? `${settings.prefix}${command.help.name} ${command.help.usage}` : `${settings.prefix}${command.help.name}`)
             .addField(
                "Autorisations",
                command.help.public ? "publique" : command.help.modo ? "réservée aux modérateurs" : "réservée aux admins",
        );

        return message.channel.send(embed);
    }
};