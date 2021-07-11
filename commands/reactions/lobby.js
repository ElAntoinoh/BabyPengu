const { MessageEmbed } = require("discord.js");

module.exports.help = {
    name: 'lobby',
    aliases: ['lobby', 'acceuil'],
    category: 'reactions',
    description: 'Renvoie le message d\'acceuil du serveur',
    cooldown: 0,
    usage: '',
    needUser: false,
    applicableOnModerator: false,
    public: false,
    args: false,
};

module.exports.run = ( client, message, args ) => {
    const blueRole   = message.guild.roles.cache.get("860646890621108275");
    const orangeRole = message.guild.roles.cache.get("860631983573958676");
    const memberRole = message.guild.roles.cache.get("861944147530874920");

    const blueCircle   = "🔵";
    const orangeCircle = "🟠";
    const drapeau      = message.guild.emojis.cache.get("863525869463928862");


    const embed = new MessageEmbed()
        .setTitle("~ ~ ~ ~ ~ ~ ~ ~ Bienvenue sur l'ICEBERG ! ~ ~ ~ ~ ~ ~ ~ ~")
        .setDescription("Ce serveur discord sert d\'outil à la création du bot discord @BabyPengu.\nLe bot est exporté régulièrement sur GitHub. Le lien se situe dans le channel #liens.\nVous pouvez le tester dans le channel #test-bot.\nLes idées d\'ajouts ou de modifications sont les bienvenues dans le channel #to-do-list.")
        .setColor("#ff0000")
        .addField(
            "les rôles disponibles:",
            `
                ${blueCircle  } - ${blueRole  .toString()}
                ${orangeCircle} - ${orangeRole.toString()}
                ${drapeau     } - ${memberRole.toString()}
            `
        )
        .setFooter("Amusez-vous bien ;)");
    
    message.delete();

    try {
        client.channels.cache.get('862047950813003776').send(embed).then( async message => {
            await message.react(blueCircle  );
            await message.react(orangeCircle);
            await message.react(drapeau     );
        });
    } catch(error) {
        console.error(error);
    }
};