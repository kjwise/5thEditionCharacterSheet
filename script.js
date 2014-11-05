function getVars() {
    var vars = [], hash;
    var q = document.URL.split('?')[1];
    if (q != undefined) {
        q = q.split('&');
        for (var i = 0; i < q.length; i++) {
            hash = q[i].split('=');
            vars.push(hash[1]);
            vars[hash[0]] = hash[1];
        }
    }
    return vars;
}

var skillsToAbility = {
    "Acrobatics": "dex",
    "Animal Handling": "wis",
    "Arcana": "int",
    "Athletics": "str",
    "Deception": "cha",
    "History": "int",
    "Insight": "wis",
    "Intimidation": "cha",
    "Investigation": "int",
    "Medicine": "wis",
    "Nature": "int",
    "Perception": "wis",
    "Performance": "cha",
    "Persuasion": "cha",
    "Religion": "int",
    "Sleight of Hand": "dex",
    "Stealth": "dex",
    "Survival": "wis"
};

// Main stat to modifier mapping
function computeAbilityModifier(abilityScore) {
    return Math.floor((abilityScore - 10) / 2);
}

function formatModifier(modifier) {
    if (modifier >= 0) {
        modifier = "+" + modifier;
    }
    return modifier;
}

function mapStat(ability, characterJson, abilityToModifierStore) {
    var abilityScoreValue = characterJson.abilityscores[ability];
    $("#" + ability).text(abilityScoreValue);

    // Show the modifier that is a function of the ability score
    var modifier = computeAbilityModifier(abilityScoreValue);

    // Save the result in a possibly provided object
    if (abilityToModifierStore !== undefined) {
        abilityToModifierStore[ability] = modifier;
    }

    $("#" + ability + " ~ .mainStatModifier").text(formatModifier(modifier));

    // Deal with the saving throws and proficiencies
    if ($.inArray(ability, characterJson.savingthrow_proficiencies) > -1) {
        modifier += 2;
        $("#save_" + ability).addClass("proficient");
    }
    $("#save_" + ability + " .checkModifier").text(formatModifier(modifier));

}

function computeProficiencyModifier(totalLevels) {
    return (Math.floor((totalLevels - 1) / 4) + 2);
}

function mapSkills(characterJson, abilityToModifierStore) {
    $.each(skillsToAbility, function (skill, ability) {
        var modifier = abilityToModifierStore[ability];
        // This is ugly but it works.
        if ($.inArray(skill.toLowerCase(), characterJson.skill_proficiences) > -1) {
            $("#skills").find("ul").append("<li class='proficient'><span class='checkModifier'>" + formatModifier(modifier + 2) + "</span>" + skill + "<i> (" + ability + ")</i></li>");
        }
        else {
            $("#skills").find("ul").append("<li><span class='checkModifier'>" + formatModifier(modifier) + "</span>" + skill + "<i> (" + ability + ")</i></li>");
        }
    });
}

function mapAttacks(characterJson, abilityToModifierStore, proficiencyModifier) {
    $.each(characterJson.attacks, function (attackName, attackObject) {
        var abilityModifier = abilityToModifierStore[attackObject.ability];
        var attackBonus = abilityModifier;
        if (attackObject.proficient) attackBonus += proficiencyModifier;
        if ($.isNumeric(attackObject.extraAttackMod)) attackBonus += attackObject.extraAttackMod;
        attackBonus = formatModifier(attackBonus);
        var damageBonus = abilityModifier;
        if ($.isNumeric(attackObject.extraDmgMod)) damageBonus += attackObject.extraDmgMod;
        var dmgDieWithModifier = attackObject.die + " " + formatModifier(damageBonus);
        $("#attacksAndSpellcasting").find("table").append(
            "<tr><td>" + attackName + "</td><td>" + attackBonus + "</td><td>" + dmgDieWithModifier + "</td><td>" + attackObject.type + "</td></tr>");
    });
}

function loadChar(characterJson) {

    document.title = characterJson.name + " - Character Sheet";
    $("#character_name").text(characterJson.name);

    // Compute all classes into a single string, deal with hit dice
    var charClass = [];
    var totalLevels = 0;
    var hitdice = [];
    $.each(characterJson.classes, function (className, classObject) {
        charClass.push(className + " " + classObject.level);
        totalLevels += classObject.level;
        hitdice.push(classObject.hitdice);
    });
    $("#character_class").text(charClass.join(" / "));

    // Proficiency modifier is a function of the total character level
    var proficiencyModifier = computeProficiencyModifier(totalLevels);
    $("#proficiencyModifier").text("+" + proficiencyModifier);

    $("#character_background").text(characterJson.mainattributes.background);
    $("#character_race").text(characterJson.mainattributes.race);
    $("#character_alignment").text(characterJson.mainattributes.alignment);
    $("#player_name").text(characterJson.mainattributes.playername);
    $("#character_xp").html(characterJson.mainattributes.xp || "&nbsp");

    $("#inspirationPoints").text(characterJson.inspirationpoints);

    // Plug in ability scores, modifiers and saving throws
    var abilityToModifierStore = {};
    mapStat("str", characterJson, abilityToModifierStore);
    mapStat("dex", characterJson, abilityToModifierStore);
    mapStat("con", characterJson, abilityToModifierStore);
    mapStat("int", characterJson, abilityToModifierStore);
    mapStat("wis", characterJson, abilityToModifierStore);
    mapStat("cha", characterJson, abilityToModifierStore);

    // Handle skills
    mapSkills(characterJson, abilityToModifierStore);

    // Handle combat stats
    $("#armorClass").prepend(characterJson.ac);
    // If initiative is supplied in the json it will be used, otherwise, the dex modifier is used.
    $("#initiative").prepend(
        formatModifier(characterJson.initiative || abilityToModifierStore["dex"]));

    $("#speed").prepend(characterJson.speed);
    $("#hitpoints").prepend(characterJson.hitpoints);
    $("#hitdice").prepend(hitdice.join(" / "));

    // And for the attacks
    mapAttacks(characterJson, abilityToModifierStore, proficiencyModifier);
}

$.getScript(decodeURIComponent(getVars()["charURL"]), function () {
    loadChar(charJson);
});