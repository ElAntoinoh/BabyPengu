const { readdirSync } = require("fs");

const loadCommands = (client, dir = "./commands/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for( const file of commands ) {
            const getFileName = require(`../${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
        };
    });
};

const loadEvents = (client, dir = "./events/") => {
    readdirSync(dir).forEach(dirs => {
        const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for( const file of events ) {
            const event = require(`../${dir}/${dirs}/${file}`);

            if( file.once ) {
                client.once(event.name, (...args) => event.execute(...args, client));
            }
            else {
                client.on(event.name, (...args) => event.execute(...args, client));
            }
        };
    });
};

module.exports = {
    loadCommands,
    loadEvents,
};