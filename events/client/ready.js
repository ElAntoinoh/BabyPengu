module.exports = {
    name: 'ready',
    once: true,

    execute(client) {
        let activities = ['§help', 'JavaScript', "tileman.io"];

        setInterval( () => client.user.setPresence({ activity: { name: `${activities[ Math.floor( Math.random()*activities.length ) ]}`, type: 'PLAYING' }, status: 'dnd' }), 5000 );

        console.log(`Logged in as ${client.user.tag}!`);
    },
}