const { readdirSync        } = require("fs");
const { Client, Collection } = require("discord.js");
const { TOKEN              } = require("../config"); // Si config.js n'est pas dans le même répertoire
//const { TOKEN              } = require("./config"); // Si config.js est dans le même répertoire

const client = new Client();
["commands", "cooldowns"].forEach( x => client[x] = new Collection ); // Création de deux Collections en une fois

//#region loadCommands()
const loadCommands = (dir = "./commands/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js")); // Tri par extensions

        for( const file of commands ) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
        };
    });
};
//#endregion

//#region events
const eventFiles = readdirSync('./events').filter( file => file.endsWith('.js') );

for( const file of eventFiles ) {
	const event = require(`./events/${file}`);

    if( event.once ) {
        client.once(event.name, (...args) => event.execute(...args, client));
    }
    else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}
//#endregion

loadCommands();

client.login(TOKEN);