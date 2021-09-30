const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.ADMIN.RELOAD;

module.exports.run = async ( client, message, args ) => {
    let guild = await client.getGuild(message.guild);

    message.guild.channels.cache.find( c => c.id = guild.logChannel ).send("Redémarrage du bot");

    await message.delete();

    process.exit();
};