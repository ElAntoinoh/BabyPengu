const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.ADMIN.RELOAD;

module.exports.run = async ( client, message, args ) => {
    await message.delete();

    await client.channels.cache.get('816784812697714688').send("Redémarrage du bot en cours");
    process.exit();

};