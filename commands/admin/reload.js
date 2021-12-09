const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.ADMIN.RELOAD;

module.exports.run = async ( client, message, args ) => {
    let guild = await client.getGuild(message.guild);

    message.guild.channels.cache.find( c => c.id = guild.logChannel ).send("https://tenor.com/view/penguin-working-hat-suitcase-cute-gif-14667480");

    await message.delete();

    process.exit();
};