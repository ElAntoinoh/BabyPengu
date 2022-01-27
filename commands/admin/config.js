const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.ADMIN.CONFIG;

module.exports.run = async ( client, message, args, settings ) => {
    const getSetting = args[0];
    const newSetting = args.slice(1).join(" ");

    switch(getSetting) {
        case "logChannel": {
            if(newSetting) {
                await client.updateGuild( message.guild, { logChannel: newSetting } );
                return message.channel.send(`LogChannel mit à jour: \`${settings.logChannel} -> ${newSetting}\``);
            }
            message.channel.send(`LogChannel actuel: \`${settings.logChannel}\``);
            break;
        };

        case "prefix": {
            if(newSetting) {
                await client.updateGuild( message.guild, { prefix: newSetting } );
                return message.channel.send(`Prefix mit à jour: \`${settings.prefix} -> ${newSetting}\``);
            }
            message.channel.send(`Prefix actuel: \`${settings.prefix}\``);
            break;
        };

        case "welcomeMessage": {
            if(newSetting) {
                await client.updateGuild( message.guild, { welcomeMessage: newSetting } );
                return message.channel.send(`welcomeMessage mit à jour: \`${settings.welcomeMessage} -> ${newSetting}\``);
            }
            message.channel.send(`welcomeMessage actuel: \`${settings.welcomeMessage}\``);
            break;
        };

        default: return message.channel.send("Paramètres configurables: **logChannel**, **prefix**, **welcomeMessage**");
    };

    await message.delete();
};