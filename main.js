const { readdirSync        } = require("fs");
const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX      } = require("C:\\\Users\\toino\\OneDrive\\Bureau\\config"); // "./config" si config.js est dans le même répertoire

const client    = new Client();
client.commands = new Collection();

const loadCommands = (dir = "./commands/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for( const file of commands ) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            console.log(`Commande ${getFileName.help.name} chargée !`);
        };
    });
};

loadCommands();

client.on('message', message => {
    if( !message.content.startsWith(PREFIX) || message.author.bot ) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if( !client.commands.has(command) ) return;
    client.commands.get(command).run(client, message, args);

    console.log(`${message.author.username} a utilisé la commande ${client.commands.get(command).name}.`);
});

client.on('ready', () => { console.log(`Logged in as ${client.user.tag}!`); });

client.login(TOKEN);