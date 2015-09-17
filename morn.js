var charJson =
{
    "name": "Morn",
    "classes": {
        "Ranger": {
            "level": 8,
            "hitdice": "d10"
        }
    },
    "inspirationpoints": 0,
    "hitpoints": 77, // 12, 8, 8, 8, 11, 10, 12, 8
    "ac": 16, // 12 + 4
    "speed": 30,
    "mainattributes": {
        "background": "Outlander",
        "race": "Human",
        "alignment": "Chaotic Neutral",
        "playername": "Haffi",
        "xp": 34000
    },
    "appearance": {
        "age": 27,
        "height": "5\'9\"",
        "weight": "138 lbs",
        "eyes": "brown",
        "skin": "tan",
        "hair": "brown"
    },
    "abilityscores": {
        "str": 14,
        "dex": 18, // 8th level ability score increase bumped this from 16
        "con": 14,
        "int": 11,
        "wis": 16,
        "cha": 11 // Brass Dragon Essence bumped this from 9 - special twist by DM
    },
    "savingthrow_proficiencies": [
        "str", "dex"
    ],
    "skill_proficiences": [
        "athletics",
        "insight",
        "perception",
        "stealth",
        "survival"
    ],
    "attacks": {
        "longbow": {
            "ability": "dex",
            "extraAttackMod": 2, // Ranged to hit bonus from "Fighting Style - Archery"
            "extraDmgMod": 0,
            "die": "1d8",
            "proficient": true,
            "type": "piercing"
        },
        "scimitar": {
            "ability": "dex",
            "die": "1d6",
            "proficient": true,
            "type": "slashing"
        },
        "dagger": {
            "ability": "dex",
            "die": "1d4",
            "proficient": true,
            "type": "piercing"
        }
    },
    "equipment": {
        "coins": {
            "copper": 10,
            "silver": 0,
            "electrum": 0,
            "gold": 18,
            "platinum": 0
        },
        "other": [
            "backpack",
            "bedroll",
            "mess kit",
            "tinderbox",
            "3 torches",
            "3 days rations",
            "50\' hemp rope",
            "rabbits foot keepsake",
            "travelers clothes",
            "small blanket",
            "studded leather armour",
            "dagger",
            "sickle",
            "scimitar",
            "longbow",
            "quiver of 20 arrows",
            "flute",
            "Arrow of the Phoenix",
            "religious icons inlaid with precious gems x 5",
            "Decanter of endless water",
            "pearl worth 375gp",
            "Lantern of Revealing"
        ]
    },
    "personality": {
        "traits": "I place no stock in wealthy or well-mannered folk. Money and manners won\'t save you from a hungry owlbear. I feel far more comfortable around animals than people.",
        "ideals": "Life is like the seasons, in constant change, and we must change with it.",
        "bonds": "Dragons destroyed our home and killed my family. Now, with nothing but what I can carry, I seek vengeance.",
        "flaws": "I am too enamored of ale, wine, and other intoxicants."
    },
    "features": [
        "Wanderer: Don\'t get lost, can find food in the wild (p.136)",
        "Favored Enemy: Dragons, Humans, Half-Dragons (p.91)",
        "Natural Explorer: Mountains, Grassland (p.91)",
        "Fighting Style: Archery (p.91)",
        "Ranger Spellcasting (p.90-91)",
        "Hunter\'s Prey - Colossus Slayer: Extra 1d8 on already injured enemy once per turn (p.93)",
        "Sharpshooter: Long range without disadvantage; ignore cover; can choose -5 to hit, +10 to damage (p.170)",
        "Steel Will: Advantage on saving throws against being frightened (p.93)",
        "Land\'s Stride: Unhindered movement (p.92)",
        "Brass Dragon Essence: Ability score improvement (Cha)"
    ],
    "spellcasting": {
        "spellcastingAbility": "Wisdom",
        "spellSlots": {
            "spells1": 4,
            "spells2": 3
        },
        "spells": {
            "spells1": ["Alarm (R)", "Hunter's Mark", "Jump"],
            "spells2": ["Darkvision", "Silence (R)"]
        }
    },
    "proficiencies": [
        "Flute",
        "Light & medium armor",
        "Simple & martial weapons"
    ],
    "languages": [
        "Common",
        "Draconic",
        "Halfling",
        "Elvish"
    ]
};
