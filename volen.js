var charJson =
{
    "name": "Volen",
    "classes": {
        "Fighter": {
            "level": 1,
            "hitdice": "d10"
        }
    },
    "inspirationpoints": 0,
    "hitpoints": 13, // 13
    "ac": 18, // 16 + 2
    "speed": 30,
    "mainattributes": {
        "background": "Mercenary Veteran",
        "race": "Half-Orc",
        "alignment": "Lawful Neutral",
        "playername": "Haffi",
        "xp": 0 // page 15 in PHB
    },
    "appearance": {
        "age": 17,
        "height": "6\'5\"",
        "weight": "205 lbs.",
        "eyes": "black",
        "skin": "pale grey",
        "hair": "black"
    },
    "abilityscores": {
        "str": 17,
        "dex": 13,
        "con": 16,
        "int": 10,
        "wis": 12,
        "cha": 9
    },
    "savingthrow_proficiencies": [
        "str",
        "con",
        "dex" //temporary until feature to deal with Shield Mastery is added
    ],
    "skill_proficiences": [
        "acrobatics",
        "animal handling",
        "athletics",
        "intimidation",
        "perception"
    ],
    "attacks": {
        "longsword": {
            "ability": "str",
            "extraDmgMod": +2, // Duelist fighting style
            "die": "1d8",
            "proficient": true,
            "type": "slashing"
        },
        "handaxe": {
            "ability": "str",
            "extraDmgMod": +2, // Duelist fighting style
            "die": "1d6",
            "proficient": true,
            "type": "slashing"
        }
    },
    "equipment": {
        "coins": {
            "copper": 0,
            "silver": 0,
            "electrum": 0,
            "gold": 120,
            "platinum": 0
        },
        "other": [
            "backpack",
            "bedroll",
            "mess kit",
            "tinderbox",
            "10 torches",
            "10 days rations",
            "50\' hemp rope",
            "travelers clothes",
            "Seargent\'s insignia", // 
            "bone dice"
        ]
    },
    "personality": {
        "traits": "I keep my back to the wall, an eye out for potential threat and my sword at hand.",
        "ideals": "Ideals aren't worth killing over, or going to war for.",
        "bonds": "I work hard to suppress the mark of Gruumsh.",
        "flaws": "I have little respect for anyone that is not a proven warrior."
    },
    "features": [
        "Menacing: Proficient in Intimidation (p.41)",
        "Relentless Endurance: Once per long rest, drop to 1 instead of 0 hit ponts (p.41)",
        "Savage Attacks: Roll additional damage die on critical hits(p.41)",
        "Fighting Style: Duelist, +2 dmg while using a single one handed weapon (p.72)",
        "Second Wind: Once per long rest, regain hit points equal to d10 + Fighter level (p.72)",
        "Shield Master: Shove as bonus action, shield AC bonus to dex saves, evasion",
        "Mercenary Life: have knowledge of and contacts within mercenary companies (scag p.152)"
    ],
    "proficiencies": [ 
        "Dice games",
        "Vehicles (land)",
        "Light, medium & heavy armor",
        "Simple & martial weapons"
    ],
    "languages": [
        "Common",
        "Orc"
    ],
    "contacts": [
    "Mercenary company"
    ]
};
