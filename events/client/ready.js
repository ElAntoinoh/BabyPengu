const { Manager } = require("erela.js");

module.exports = {
    name: 'ready',
    once: true,

    execute(client) {
        console.log(`Logged in as ${client.user.tag}!`);

        let activities = ['§help', 'JavaScript', "tileman.io"];

        setInterval( () => client.user.setPresence({ activity: { name: `${activities[ Math.floor( Math.random()*activities.length ) ]}`, type: 'PLAYING' }, status: 'dnd' }), 5000 );

        // Musique

        client.manager = new Manager({
            nodes: [ {
                host:     client.config.LAVALINK_HOST,
                port:     client.config.LAVALINK_PORT,
                password: client.config.LAVALINK_PASSWORD,
            } ],

            send( id, payload ) {
                const guild = client.guilds.cache.get(id);
                if( guild ) guild.shard.send(payload);
            },
        })

        client.manager.on("nodeConnect", node => console.log(`Node ${node.options.identifier} connected`));

        client.manager.on("nodeError", (node, error) => console.log(`Node ${node.options.identifier} had an error: ${error.message}`));

        client.manager.on("trackStart", (player, track) => {
            client.channels.cache
                .get(player.textChannel)
                .send(`Now playing: ${track.title}`);
        });

        client.manager.on("queueEnd", (player) => {
            client.channels.cache
                .get(player.textChannel)
                .send("Queue has ended.");
        
            player.destroy();
        });

        client.manager.init(client.user.id);
    },
}