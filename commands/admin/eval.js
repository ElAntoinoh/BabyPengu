const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.ADMIN.EVAL;

module.exports.run = async ( client, message, args ) => {
    if( message.author.bot ) return;

    function clean(text) {
        if( typeof text === "string" )
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        return text;
    };

    const code = args.join(" ");
    try {
        const evaled = eval(code);
        const cleanCode = await clean(evaled);

        if( cleanCode != undefined ) message.channel.send( cleanCode, { code: "js" } );
    } catch(e) {}
};