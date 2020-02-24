var charJson =
{
    "name": "Eldon 'Cloak' Turen",
    "classes": {
        "Ranger": {
            "level": 5,
            "hitdice": "d10"
        },
        "Rogue": {
            "level": 6,
            "hitdice": "d8"
        }
    },
    "inspirationpoints": 0,
    "hitpoints": 101,
    "initiative": 5, // Dex + Wis because gloom stalker
    "ac": "17",
    "speed": 25,
    "mainattributes": {
        "background": "Outlander",
        "race": "Gnome",
        "alignment": "Chaotic Neutral",
        "playername": "Jói",
        "xp": 0
    },
    "appearance": {
        "age": 40,
        "height": "3\'8\"",
        "weight": "93 lbs.",
        "eyes": "brown",
        "skin": "stoneish",
        "hair": "bald"
    },
    "abilityscores": {
        "str": 8,
        "dex": 20, // +1 Svirfneblin, +2 ability score improvement lvl 4
        "con": 14,
        "int": 16, // +2 gnome
        "wis": 14,
        "cha": 8
    },
    "savingthrow_proficiencies": [
        "str",
        "dex"
    ],
    "skill_proficiences": [
        "investigation",
        "perception",
        "stealth",
        "athletics",
        "survival",
        "sleight of hand"
    ],
    "skill_expertise": [
        "stealth",
        "survival",
        "perception",
        "investigation"
    ],
    "attacks": {
        "Shortbow +1": {
            "ability": "dex",
            "extraDmgMod": +1,
            "extraAttackMod": +3, // Archery fighting style, bow +1
            "die": "1d6",
            "proficient": true,
            "type": "piercing"
        },
        "+2 Shortsword": {
            "ability": "dex",
            "extraDmgMod": +2,
            "extraAttackMod": +2,
            "die": "1d6",
            "proficient": true,
            "type": "slashing"
        },
    },
    "equipment": {
        "coins": {
            "copper": 0,
            "silver": 0,
            "electrum": 0,
            "gold": 0,
            "platinum": 0
        },
        "other": [
          "Gem of seeing: 3 charges of True Sight, regenerates 1d3 carges at dawn",
          "+2 Shortsword",
          "Assassins Brand: Magically summon a dagger into my hand as a bonus action",
    	  "Studded Leather armor",
          "5 potions of healing",
          "Short bow: Range 80/320",
          "Hand-axe",
          "Mace",
          "Wings of flying: cmd word batwings 1 hour 60ft move",
          "Amulet thing: 5000gp",
          "Explorer's pack",
          "Quiver of 20 arrows",
          "Bow +1: Bonus action activate - 1 minutes (10 rounds= extra 1d6 force damage, double against constructs",
          "A staff",
          "A hunting trap",
          "A pouch of 10 gb",
          "A trophy from an animal I killed",
          "A set of traveller's clothes",
          "Kalimba - musical instrument",
          "A living spider - size of tarantula",
          "Five flashbang arrows: 1d6 non magical 10 feet radius DC 10 con save or be blinded"
        ]
    },
    "personality": {
        "traits": "I'm always picking things up, absently fiddling with them and sometimes breaking them...",
        "ideals": "Change - Adapt and change as life goes on",
        "bonds": "What happened to my siblings, Davra Jassur - enemy",
        "flaws": "Don't expect me to save those who can't save themselves."
    },
    "features": [
        "B - Blessing of protection +1 AC and Saves",
        "RO - Expertise (Stealth, Survival): Double proficiency bonus",
        "RO - Sneak Attack: +3d6 once per turn",
        "RO - Uncanny dodge: Use reaction to halve damage when hit with attack",
        "RO - Thieves cant",
        "RO - Cunning action",
        "RO - Ability score increase (lvl4, dex)",
        "ROA - Assassinate", 
        "ROA - Proficiency poison and disguise kit", 
        "G - Gnome cunning: int, wis, cha saving throw advantage against magic",
        "DG - Superior darkvision (150 feet)",
        "DG - Stone Camouflage: Adv on stealth checks in rocky terrain",
        "DG - Undercommon",
        "Background feature: Deep Delver",
        "RA - Extra Attack",
        "RA - Natural Explorer: Underdark - double proficiency bonus on wis and int checks related to terrain, advantage on iniative and on attacks on creatures that have not yet acted",
        "RA - Favorite Enemy Monstrosities",
        "RA - Spellcasting: 4 1st level slots - 2 2nd level - 4 spells known",
        "RA - Archery Fighting Style: +2 bonus to attack rolls",
        "Feat - Sharpshooter: Page 170",
        "GS - Dread ambusher: extra attack first turn on combat with +1d8 dmg, 10 extra move, +wis to initiative",
        "GS - Umbral sight: +30 dark vision, invisible to creatures using darkvision in darkness"
    ],
    "proficiencies": [
        "Light and medium armor, shields",
        "Simple and martial weapons",
    ],
    "languages": [
        "Common",
        "Gnomish",
        "Undercommon",
        "Elvish"
    ],
    "contacts": [
        "Davra Jassur, a Zhentarim 'troubleshooter' recruiting promising new talent for the Black Network. "
    ],
    "spellcasting": {
        "spellcastingAbility": "wis",
        "spellSlots": {
            "spells1": 0,
        },
        "spells": {
            "spells0": ["None at the moment!"],
            "spells1": ["Snare", "Hunters mark", "Disguise self"],
            "spells2": ["Pass without trace", "Spike growth"],
        }
    }
};
