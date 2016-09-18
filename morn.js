var charJson =
{
    "name": "Morn", // this character is retired after completing Hoard of the Dragon Queen and Rise of Tiamat
    "classes": {
        "Ranger": {
            "level": 14,
            "hitdice": "d10"
        }
    },
    "inspirationpoints": 1,
    "hitpoints": 131, // 12, 8, 8, 8, 11, 10, 12, 8, 11, 8, 10, 9, 8, 8
    "ac": 18, // 13 + 5
    "speed": 40,
    "mainattributes": {
        "background": "Outlander",
        "race": "Human",
        "alignment": "Chaotic Neutral",
        "playername": "Haffi",
        "xp": 140000 // page 15 in PHB
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
        "dex": 20, // 8th, 12th level ABI's bumped this from 16
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
        "longsword": {
            "ability": "str",
            "extraAttackMod": 2, // +2 weapon
            "extraDmgMod": 2, // +2 weapon
            "die": "1d8/1d10",
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
            "quiver of 20 arrows",
            "flute",
            "religious icons inlaid with precious gems x 4",
            "pearl worth 375gp",
            "Decanter of Endless Water",
            "Lantern of Revealing",
            "Drift globe", // command to trigger Daylight spell, command to have it follow me
            "Shield +3",
            "Slippers of Spider Climbing (attuned): allows me to walk on walls and ceilings", // requires attunement
            "Longbow + 1 of the Phoenix (attuned): bonus action to activate +2d6 fire damage, grants +10 to movement speed", // requires attunement Enchanted by Phoenix upon release from Arrow of the Phoenix, is now Flamebow. Bonus action to activate +2d6 flame damage on arrows.
            "Longsword +2 of Life Stealing", // requires attunement +10 necrotic damage on hit 3 times per day (recharge d3 per day) & gain 10 temp hitpoints, on crit this is triggered without expending a charge
            "Ring of cold resistance", // requires attunement
            "Ring of shooting stars (attuned)", // requires attunement
            "Girdle of Giant Strength" // requires attunement, grants str 20
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
        "Favored Enemy: Dragons, Humans, Half-Dragons, Fiends (p.91)",
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
        "Multiattack - Volley: Ranged attack against all targets in 10 foot radius area. (p.93)",
        "Bahamut's benefit - Lucky: May re-roll d20 and choose which to use three times per long rest. (p.16x)",
        "Vanish - Bonus action to Hide, can't be tracked by nonmagical means. (p.92)"
    ],
    "spellcasting": {
        "spellcastingAbility": "wis",
        "spellSlots": {
            "spells1": 4,
            "spells2": 3,
            "spells3": 3,
            "spells4": 1
        },
        "spells": {
            "spells0": ["N/A"],
            "spells1": ["Hunter's Mark"],
            "spells2": ["Darkvision", "Locate Animals or Plants", "Pass Without Trace"],
            "spells3": ["Nondetection", "Lightning Arrow", "Protection from Energy"],
            "spells4": ["Locate Creature"]
        }
    },
    "proficiencies": [ // have started learning more about tanning process, focusing on methods of harvesting material from dead dragons
        "Flute",
        "Light & medium armor",
        "Simple & martial weapons"
    ],
    "languages": [
        "Common",
        "Draconic",
        "Halfling",
        "Elvish"
    ],
    "contacts": [
        "Leosyn - Harper agent",
        "Lord Volmer - Waterthonian noble, totally a vampire",
        "Blaggothcus - storm giant, we got rid of a white dragon (Glassiel) for him",
        "Varram - former Dragon Cult member",
        "Tasmikella - former Dragon Cult Member",
        "Maccath - Arcane Brotherhood agent"
    ]
};
