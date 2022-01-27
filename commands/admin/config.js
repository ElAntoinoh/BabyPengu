const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.ADMIN.CONFIG;

module.exports.run = async ( client, message, args, settings ) => {
    const getSetting = args[0];
    const newSetting = args.slice(1).join(" ");

    let embed = new MessageEmbed()
        .setAuthor( `${message.author.username} ${message.author.id}`, message.author.displayAvatarURL() )
        .setColor("#FFFF00");
    
    const guild = await client.getGuild(message.guild);

    const logChannel = message.guild.channels.cache.find( c => c.id === guild.logChannel );

    switch(getSetting) {
        case "logChannel": {
            if(newSetting) {
                await client.updateGuild( message.guild, { logChannel: newSetting } );
                message.channel.send(`LogChannel mit à jour: \`${settings.logChannel} -> ${newSetting}\``);

                embed.setDescription(`Modification **logChannel**: ${settings.logChannel} -> ${newSetting}`)
                     .setTimestamp();

                return logChannel.send(embed);
            }
            message.channel.send(`LogChannel actuel: \`${settings.logChannel}\``);
            break;
        };

        case "prefix": {
            if(newSetting) {
                await client.updateGuild( message.guild, { prefix: newSetting } );
                message.channel.send(`Prefix mit à jour: \`${settings.prefix} -> ${newSetting}\``);

                embed.setDescription(`Modification **prefix**: ${settings.prefix} -> ${newSetting}`)
                     .setTimestamp();
                
                return logChannel.send(embed);
            }
            message.channel.send(`Prefix actuel: \`${settings.prefix}\``);
            break;
        };

        case "welcomeMessage": {
            if(newSetting) {
                await client.updateGuild( message.guild, { welcomeMessage: newSetting } );
                message.channel.send(`welcomeMessage mit à jour: \`${settings.welcomeMessage} -> ${newSetting}\``);

                embed.setDescription(`Modification **welcomeMessage**: ${settings.welcomeMessage} -> ${newSetting}`)
                     .setTimestamp();
                
                return logChannel.send(embed);
            }
            message.channel.send(`welcomeMessage actuel: \`${settings.welcomeMessage}\``);
            break;
        };

        default: return message.channel.send("Paramètres configurables: **logChannel**, **prefix**, **welcomeMessage**");
    };

    await message.delete();
};