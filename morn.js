var charJson =
{
    "name": "Morn",
    "classes": {
        "Ranger": {
            "level": 11,
            "hitdice": "d10"
        }
    },
    "inspirationpoints": 0,
    "hitpoints": 106, // 12, 8, 8, 8, 11, 10, 12, 8, 11, 8, 10
    "ac": 17, // 13 + 4
    "speed": 30,
    "mainattributes": {
        "background": "Outlander",
        "race": "Human",
        "alignment": "Chaotic Neutral",
        "playername": "Haffi",
        "xp": 85000 // page 15 in PHB
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
        "cha": 11 // Brass Dragon Essence bumped this from 9
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
            "extraAttackMod": 3, // Ranged to hit bonus (+2) from "Fighting Style - Archery" and +1 bow
            "extraDmgMod": +1, // +1 bow
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
            "gold": 140,
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
            "dagger",
            "sickle",
            "scimitar",
            "quiver of 20 arrows",
            "flute",
            "Arrow of the Phoenix",
            "religious icons inlaid with precious gems x 4",
            "Decanter of Endless Water",
            "pearl worth 375gp",
            "Lantern of Revealing",
            "Slippers of Spider Climbing",
            "Longbow + 1",
            "riding horse",
            "Potion of healing"
        ]
    },
    "personality": {
        "traits": "I place no stock in wealthy or well-mannered folk. Money and manners won\'t save you from a hungry owlbear. I feel far more comfortable around animals than people.",
        "ideals": "Life is like the seasons, in constant change, and we must change with it.",
        "bonds": "Dragons destroyed our home and killed my family. Now, with nothing but what I can carry, I seek vengeance.",
        "flaws": "I am obsessed with extinguishing the Dragon Cult, to the point where I go out of my way to murder their members."
    },
    "features": [
        "Wanderer: Don\'t get lost, can find food in the wild (p.136)",
        "Favored Enemy: Dragons, Humans, Half-Dragons (p.91)",
        "Natural Explorer: Mountains, Grassland, Forest (p.91)",
        "Fighting Style: Archery (p.91)",
        "Ranger Spellcasting (p.90-91)",
        "Primeval Awareness: Expend a spell slots to track creatures (p.92)",
        "Hunter\'s Prey - Colossus Slayer: Extra 1d8 on already injured enemy once per turn (p.93)",
        "Sharpshooter: Long range without disadvantage; ignore cover; can choose -5 to hit, +10 to damage (p.170)",
        "Steel Will: Advantage on saving throws against being frightened (p.93)",
        "Land\'s Stride: Unhindered movement (p.92)",
        "Brass Dragon Essence: Ability score improvement (Cha)",
        "Hide in Plain Sight: Take 1 minute to camouflage against natural surface for +10 Dexterity (Stealth) (p.92)",
        "Multiattack - Volley: Ranged attack against all targets in 10 foot radius area. (p.93)"
    ],
    "spellcasting": {
        "spellcastingAbility": "wis",
        "spellSlots": {
            "spells1": 4,
            "spells2": 3,
            "spells3": 3
        },
        "spells": {
            "spells0": ["No cantrips"],
            "spells1": ["Hunter's Mark"],
            "spells2": ["Darkvision", "Locate Animals or Plants", "Pass Without Trace"],
            "spells3": ["Nondetection", "Lightning Arrow", "Protection from Energy"]
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
