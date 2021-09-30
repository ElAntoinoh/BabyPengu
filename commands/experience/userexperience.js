const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.USEREXPERIENCE;

module.exports.run = async ( client, message, args, settings, dbUser ) => {
    const user = message.guild.member( message.mentions.users.first() );

    if( args[0] )
    {
        const mentionnedUser = await client.getUser(user);
        message.channel.send(`${user} possède ${mentionnedUser.experience} points d'experience.`);
    }
    else message.reply(`Tu possèdes ${dbUser.experience} points d'experience.`);
};