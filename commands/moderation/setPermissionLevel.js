const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MODERATION.SETPERMISSIONLEVEL;

module.exports.run = async ( client, message, args ) => {
    let members = message.mentions.members;

    let newLevel;
    args.forEach( arg => { if( !isNaN(arg) ) newLevel = parseInt(arg); } );

    if( newLevel == null || newLevel < 0 || newLevel > 10 ) return message.reply("Utilisez un nombre entre 0 et 10.");

    let executor = await client.getUser(message.member);
    
    if( executor.permissionLevel <= newLevel ) return message.reply("Tu n'es pas autorisé à accorder autant de permissions.");

    members.forEach( m => {
        client.setPermissionLevel( m, newLevel );
    });
    
    message.channel.send("Changements effectués !").then(msg => {
        setTimeout(() => msg.delete(), 3000)
    });

    message.delete();
};