const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.USEREXPERIENCE;

module.exports.run = async ( client, message, args, settings, dbUser ) => {
    const member = message.guild.member( message.mentions.users.first() );

    if( args[0] ) {
        const mentionnedUser = await client.getUser( member, message.guild );
        message.channel.send(`${member.nickname ? member.nickname : member.user.username} possède ${mentionnedUser.experience} points d'expérience.`);
    }
    else message.reply(`tu possèdes ${dbUser.experience} points d'expérience.`);
};