module.exports = {
    name: 'userinfo',
    description: 'Renvoie les informations de l\'utilisateur mentionné.',

    execute( client, message, args ) {
        const user_mention = message.mentions.users.first();
        message.channel.send(`Tag: ${user_mention.tag}`);
    }
}