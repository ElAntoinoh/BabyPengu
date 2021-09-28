module.exports = {
    name: 'ready',
    once: true,

    execute(client) {
        console.log(`Logged in as ${client.user.tag}!`);
        client.channels.cache.get('816784812697714688').send("Bot opérationnel", {tts:true});

        let activities = ['§help', 'JavaScript', "avec le chef de l'état(nol)"];

        setInterval( () => client.user.setPresence({ activity: { name: `${activities[ Math.floor( Math.random()*activities.length ) ]}`, type: 'PLAYING' }, status: 'dnd' }), 5000 );
    },
}