module.exports = {
    name: 'guildCreate',

    async execute( guild, client ) {
        const newGuild = {
            guildID: guild.id,
            guildName: guild.name,
        };

        await client.createGuild(newGuild);
    },
};