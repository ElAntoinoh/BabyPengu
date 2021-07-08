const { readdirSync        } = require("fs");
const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX      } = require("../config"); // Si config.js n'est pas dans le même répertoire
//const { TOKEN, PREFIX      } = require("./config"); // Si config.js est dans le même répertoire

const client = new Client();
["commands", "cooldowns"].forEach( x => client[x] = new Collection ); // Création de deux Collections en une fois

//#region loadCommands()
const loadCommands = (dir = "./commands/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js")); // Tri par extensions

        for( const file of commands ) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            //console.log(`Commande chargée: ${getFileName.help.name}`);
        };
    });
};
//#endregion

//#region loadEvents()
const loadEvents = (dir = "./events/") => {
    readdirSync(dir).forEach(dirs => {
        const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js")); // Tri par extensions

        for( const event of events ) {
            const evt = require(`${dir}/${dirs}/${event}`);
            const evtName = event.split(".")[0];

            client.on( evtName, evt.bind( null, client ) );
            //console.log(`Evénement chargé: ${evtName}`);
        };
    });
};
//#endregion

loadCommands();
loadEvents();

client.login(TOKEN);