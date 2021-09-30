module.exports = {
    name: 'messageReactionRemove',

    execute( messageReaction, user, client ) {
        const message = messageReaction.message;
        const member  = message.guild.members.cache.get( user.id );
        const channel = message.guild.channels.cache.find( c => c.id === '862047950813003776' );

        const emoji = messageReaction.emoji.name;

        const blueRole   = message.guild.roles.cache.get("860646890621108275");
        const orangeRole = message.guild.roles.cache.get("860631983573958676");
        const memberRole = message.guild.roles.cache.get("861944147530874920");

        if( user.bot ) return;

        if( ["🔵", "🟠", "drapeauChybre"] .includes(emoji) && message.channel.id === channel.id ) {
            switch(emoji) {
                case "🔵":
                    member.roles.remove(blueRole);
                    break;
                case "🟠":
                    member.roles.remove(orangeRole);
                    break;
                case "drapeauChybre":
                    member.roles.remove(memberRole);
                    break;
            };
        };
    },
};