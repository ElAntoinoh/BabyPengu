module.exports = {
    name: 'ready',
    once: true,

    execute(client) {
        console.log(`Logged in as ${client.user.tag}!`);
        client.channels.cache.get('816784812697714688').send("Bot opérationnel");
        client.channels.cache.get('816784742972260393').send("Bot opérationnel");

        client.user.setPresence({ activity: { name: 'JavaScript', type: 'PLAYING' }, status: 'dnd'});
    },
}