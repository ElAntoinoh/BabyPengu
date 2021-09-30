const MESSAGES = {
    COMMANDS: {
        ADMIN: {
            CONFIG: {
                name: 'config',
                aliases: ['config'],
                category: 'admin',
                description: 'Modifie la base de données.',
                cooldown: 0,
                usage: '<key> : affiche la valeur de <key>\n<key> <value> : change la valeur de <key>',
                needUser: false,
                applicableOnModerator: false,
                public: false,
                args: true,
            },

            EVAL: {
                name: 'eval',
                aliases: ['eval'],
                category: 'admin',
                description: 'Renvoie un code javascript testé.',
                cooldown: 0,
                usage: '<code_to_test> : teste <code_to_test>',
                needUser: false,
                applicableOnModerator: false,
                public: false,
                args: true,
            },

            RELOAD: {
                name: 'reload',
                aliases: ['reload'],
                category: 'admin',
                description: 'Relance le bot.',
                cooldown: 0,
                usage: '',
                needUser: false,
                applicableOnModerator: false,
                public: false,
                args: false,
            },
        },

        COLLECTORS: {
            MSGCOLLECTOR: {
                name: 'msgcollector',
                aliases: ['msgcollector', 'msgcol', 'mcol'],
                category: 'collectors',
                description: 'Collecte un messages.',
                cooldown: 10,
                usage: '<msg_to_collect> : compte les occurences de <msg_to_collect>',
                needUser: false,
                applicableOnModerator: false,
                public: false,
                args: true,
            },

            REACTCOLLECTOR: {
                name: 'reactcollector',
                aliases: ['reactcollector', 'reactcol', 'rcol'],
                category: 'collectors',
                description: 'Compte les réactions.',
                cooldown: 10,
                usage: '',
                needUser: false,
                applicableOnModerator: false,
                public: false,
                args: false,
            },
        },

        EXPERIENCE: {
            ADDEXPERIENCE: {
                name: 'addexperience',
                aliases: ['addexperience', 'addexp', 'addxp'],
                category: 'experience',
                description: "Ajoute de l'experience à l'utilisateur.",
                cooldown: 5,
                usage: '<@user> <exp_to_add> : ajoute <exp_to_add> à <@user>',
                needUser: true,
                applicableOnModerator: true,
                public: false,
                args: true,
            },

            LEADERBOARD: {
                name: 'leaderboard',
                aliases: ['leaderboard', 'xpboard', 'expboard', 'board'],
                category: 'experience',
                description: "Affiche le classement des joueurs.",
                cooldown: 5,
                usage: '',
                needUser: false,
                applicableOnModerator: false,
                public: true,
                args: false,
            },

            REMOVEEXPERIENCE: {
                name: 'removeexperience',
                aliases: ['removeexperience', 'removeexp', 'removexp'],
                category: 'experience',
                description: "Retire de l'experience à l'utilisateur.",
                cooldown: 5,
                usage: '<@user> <exp_to_remove> : retire <exp_to_add> à <@user>',
                needUser: true,
                applicableOnModerator: false,
                public: false,
                args: true,
            },

            USEREXPERIENCE: {
                name: 'userexperience',
                aliases: ['userexperience', 'userexp', 'userxp'],
                category: 'experience',
                description: "Renvoie l'experience de l'utilisateur.",
                cooldown: 0,
                usage: '',
                needUser: false,
                applicableOnModerator: false,
                public: true,
                args: false,
            },
        },

        GAMES: {
            CARD: {
                name: 'card',
                aliases: ['card'],
                category: 'games',
                description: 'Renvoie une carte.',
                cooldown: 0,
                usage: '',
                needUser: false,
                applicableOnModerator: false,
                public: true,
                args: false,
            },
        },

        INFORMATIONS: {
            BOTINFO: {
                name: 'botinfo',
                aliases: ['botinfo', 'infobot'],
                category: 'informations',
                description: 'Renvoie des informations sur le bot',
                cooldown: 5,
                usage: ``,
                needUser: false,
                applicableOnModerator: false,
                public: true,
                args: false,
            },

            HELP: {
                name: 'help',
                aliases: ['help', 'h', 'aide'],
                category: 'informations',
                description: 'Renvoie une liste de commandes avec leurs informations.',
                cooldown: 0,
                usage: '<command_name> : renvoie des informations sur <command_name>',
                needUser: false,
                applicableOnModerator: false,
                public: true,
                args: false,
            },

            SERVERINFO: {
                name: 'serverinfo',
                aliases: ['serverinfo', 'infoserver', 'infoserv', 'servinfo'],
                category: 'informations',
                description: 'Renvoie des informations sur le serveur.',
                cooldown: 5,
                usage: ``,
                needUser: false,
                applicableOnModerator: false,
                public: true,
                args: false,
            },

            STATS: {
                name: 'stats',
                aliases: ['stats'],
                category: 'informations',
                description: 'Renvoie des statistiques sur le serveur.',
                cooldown: 5,
                usage: ``,
                needUser: false,
                applicableOnModerator: false,
                public: true,
                args: false,
            },

            USERINFO: {
                name: 'userinfo',
                aliases: ['userinfo', 'infouser', 'uinfo', 'infou'],
                category: 'informations',
                description: "Renvoie des informations sur l'utilisateur.",
                cooldown: 5,
                usage: ``,
                needUser: true,
                applicableOnModerator: true,
                public: true,
                args: true,
            },
        },

        MISC: {
            ASK: {
                name: 'ask',
                aliases: ['ask', 'question', 'dispengu'],
                category: 'misc',
                description: 'Répond à une question.',
                cooldown: 5,
                usage: ``,
                needUser: false,
                applicableOnModerator: true,
                public: true,
                args: true,
            },

            PING: {
                name: 'ping',
                aliases: ['ping'],
                category: 'misc',
                description: 'Renvoie pong !',
                cooldown: 5,
                usage: '',
                needUser: false,
                applicableOnModerator: false,
                public: true,
                args: false,
            },

            POLL: {
                name: 'poll',
                aliases: ['poll', 'sondage'],
                category: 'misc',
                description: 'Crée un sondage.',
                cooldown: 5,
                usage: '<question> : demande <question>',
                needUser: false,
                applicableOnModerator: true,
                public: true,
                args: true,
            },
            
            ROLL: {
                name: 'roll',
                aliases: ['roll', 'de'],
                category: 'misc',
                description: 'Lance des dés.',
                cooldown: 0,
                usage: ` : nombre aléatoire entre 1 et 6\n roll <int> : nombre aléatoire entre 1 et <int>\n roll <int1> <int2> : nombre aléatoire entre <int1> et <int2>`,
                needUser: false,
                applicableOnModerator: true,
                public: true,
                args: false,
            },

            SAY: {
                name: 'say',
                aliases: ['say', 'repeat', 'rep'],
                category: 'misc',
                description: 'Fait parler BabyPengu.',
                cooldown: 0,
                usage: `<message>`,
                needUser: false,
                applicableOnModerator: true,
                public: true,
                args: true,
            },
        },

        MODERATION: {
            ADD: {
                name: 'add',
                aliases: ['add', 'addrole'],
                category: 'moderation',
                description: 'Ajoute un ou plusieurs rôles.',
                cooldown: 5,
                usage: `<role> : ajoute un rôle\n add <role> ... <role> : ajoute tous les rôles passés en paramètre`,
                needUser: false,
                applicableOnModerator: true,
                public: true,
                args: true,
            },

            ADDTO: {
                name: 'addto',
                aliases: ['addto', 'addroleto'],
                category: 'moderation',
                description: 'Ajoute un ou plusieurs rôles à un utilisateur mentionné.',
                cooldown: 5,
                usage: `<@utilisateur> <role> : ajoute un rôle à l\'utilisateur\n addTo <@utilisateur> <role> ... <role> : ajoute tous les rôles passés en paramètre à l\'utilisateur`,
                needUser: true,
                applicableOnModerator: false,
                public: false,
                args: true,
            },

            BAN: {
                name: 'ban',
                aliases: ['ban'],
                category: 'moderation',
                description: 'Ban un utilisateur.',
                cooldown: 5,
                usage: `<@utilisateur> <raison> : ban <@utilisateur> pour <raison>`,
                needUser: true,
                applicableOnModerator: false,
                public: false,
                args: true,
            },

            KICK: {
                name: 'kick',
                aliases: ['kick'],
                category: 'moderation',
                description: 'Kick un utilisateur.',
                cooldown: 5,
                usage: `<@utilisateur> <raison> : kick <@utilisateur> pour <raison>`,
                needUser: true,
                applicableOnModerator: false,
                public: false,
                args: true,
            },

            MUTE: {
                name: 'mute',
                aliases: ['mute', 'ftg'],
                category: 'moderation',
                description: 'Mute un utilisateur.',
                cooldown: 5,
                usage: `<@utilisateur> <temps> : mute <@utilisateur> pour une durée de <temps>`,
                needUser: true,
                applicableOnModerator: false,
                public: false,
                args: true,
            },

            PRUNE: {
                name: 'prune',
                aliases: ['prune'],
                category: 'moderation',
                description: 'Purge un nombre de messages spécifié sur un utilisateur spécifié.',
                cooldown: 5,
                usage: `<@utilisateur> <nombre_de_messages> : supprime <nombre_de_messages> de <@utilisateur>`,
                needUser: true,
                applicableOnModerator: false,
                public: false,
                args: true,
            },

            PURGE: {
                name: 'purge',
                aliases: ['purge'],
                category: 'moderation',
                description: 'Purge un nombre de messages spécifié.',
                cooldown: 5,
                usage: `<nombre_de_messages> : supprime <nombre_de_messages> messages`,
                needUser: false,
                applicableOnModerator: true,
                public: false,
                args: true,
            },
            
            REMOVE: {
                name: 'remove',
                aliases: ['remove', 'removerole'],
                category: 'moderation',
                description: 'Retire un ou plusieurs rôles.',
                cooldown: 5,
                usage: `<role> : retire le rôle\n remove <role> ... <role> : retire tous les rôles passés en paramètre`,
                needUser: false,
                applicableOnModerator: true,
                public: true,
                args: true,
            },

            REMOVEFROM: {
                name: 'removefrom',
                aliases: ['removefrom', 'removerolefrom'],
                category: 'moderation',
                description: 'Retire un ou plusieurs rôles à un utilisateur mentionné.',
                cooldown: 5,
                usage: `<@utilisateur> <role> : retire le rôle à l\'utilisateur\n removefrom <@utilisateur> <role> ... <role> : retire tous les rôles passés en paramètre à l\'utilisateur`,
                needUser: true,
                applicableOnModerator: false,
                public: false,
                args: true,
            },

            REPORT: {
                name: 'report',
                aliases: ['report'],
                category: 'moderation',
                description: 'Report un utilisateur.',
                cooldown: 5,
                usage: `<@utilisateur> [id_message] [raison]`,
                needUser: true,
                applicableOnModerator: true,
                public: true,
                args: true,
            },

            UNBAN: {
                name: 'unban',
                aliases: ['unban', 'deban'],
                category: 'moderation',
                description: 'Unban un utilisateur.',
                cooldown: 5,
                usage: `<id_utilisateur>`,
                needUser: true,
                applicableOnModerator: false,
                public: false,
                args: true,
            },

            UNMUTE: {
                name: 'unmute',
                aliases: ['unmute', 'demute'],
                category: 'moderation',
                description: 'Unmute un utilisateur.',
                cooldown: 5,
                usage: `<@utilisateur>`,
                needUser: true,
                applicableOnModerator: false,
                public: false,
                args: true,
            },
        },

        REACTIONS: {
            ALLROLES: {
                name: 'allroles',
                aliases: ['allroles'],
                category: 'reactions',
                description: 'Renvoie un message avec des reactions.',
                cooldown: 10,
                usage: '',
                needUser: false,
                applicableOnModerator: false,
                public: false,
                args: false,
            },

            EMOJI: {
                name: 'emoji',
                aliases: ['emoji'],
                category: 'reactions',
                description: 'Renvoie des emojis sur notre message.',
                cooldown: 10,
                usage: '',
                needUser: false,
                applicableOnModerator: false,
                public: false,
                args: false,
            },

            LOBBY: {
                name: 'lobby',
                aliases: ['lobby', 'acceuil'],
                category: 'reactions',
                description: 'Renvoie le message d\'acceuil du serveur',
                cooldown: 10,
                usage: '',
                needUser: false,
                applicableOnModerator: false,
                public: false,
                args: false,
            },
        },
    },
};

exports.MESSAGES = MESSAGES;