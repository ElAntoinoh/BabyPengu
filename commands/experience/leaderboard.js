const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.LEADERBOARD;

module.exports.run = async ( client, message ) => {
    const embed = new MessageEmbed()
        .setTitle("Top 10 des utilisateurs sur le serveur")
        .setColor("#a41f14")
        .setTimestamp()
        .setFooter("Experience");
    
    await client.getUsers(message.guild).then(p => {
        p.sort((a, b) => (a.experience < b.experience) ? 1 : -1).splice(0, 10).
            forEach(e => {
                console.log(e);
                embed.addField(e.userName, `niveau ${e.level}`);
            });
    });
    
    message.channel.send(embed);
};