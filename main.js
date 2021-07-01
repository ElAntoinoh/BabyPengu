const fs = require("fs");
const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require("C:\\\Users\\toino\\OneDrive\\Bureau\\config"); // "./config" si config.js est dans le même répertoire

const client = new Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for( const file of commandFiles ) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`Commande ${command.name} chargée !`);
}

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if( !message.content.startsWith(PREFIX) || message.author.bot ) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if( !client.commands.has(command) ) return;
    client.commands.get(command).execute(client, message, args);

    console.log(`${message.author.username} a utilisé la commande ${client.commands.get(command).name}.`);
});

client.login(TOKEN);