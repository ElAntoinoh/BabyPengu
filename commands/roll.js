module.exports = {
    name: 'roll',
    description: 'Lance des dés',

    execute( message, args ) {
        var resultat;

        switch ( args.length )
        {
            case 0:
                resultat = Math.floor( Math.random()*6 + 1 );
                break;
            
            case 1:
                resultat = Math.floor( Math.random()*args[0] + 1 );
                break;

            case 2:
                if( args[0] < args[1] )
                    resultat = Math.floor( Math.random()*( args[1] - args[0] + 1 ) + Number( args[0] ) );
                resultat     = Math.floor( Math.random()*( args[0] - args[1] + 1 ) + Number( args[1] ) );
                break;
        }

        message.channel.send(resultat);
    }
}