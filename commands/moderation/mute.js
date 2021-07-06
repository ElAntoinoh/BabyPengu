const ms = require("ms");
const { MessageEmbed, VoiceBroadcast } = require("discord.js");

module.exports.help = {
    name: 'mute',
    aliases: ['mute'],
    description: 'Mute un utilisateur',
    cooldown: 0,
    usage: `<@utilisateur> <temps>`,
    isUserAdmin: true,
    permissions: true,
    args: true,
};

module.exports.run = async ( client, message, args ) => {
    let user = message.guild.member(message.mentions.users.first());

    let muteTime = (args[1] || '60s');
    let muteRole = message.guild.roles.cache.find( r => r.name === 'muted' );

    if( !muteRole ) {
        muteRole = await message.guild.roles.create({
            data: {
                name: 'muted',
                color: '#000',
                permissions: [],
            }
        });
    
        message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.updateOverwrite(muteRole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                CONNECT: false,
            });
        });
    }

    await user.roles.add(muteRole.id);
    await user.voice.kick();

    message.channel.send(`<@${user.id}> est mute pour ${ms(ms(muteTime))}.`);

    setTimeout( () => {
        user.roles.remove(muteRole.id);
    }, ms(muteTime) );
};