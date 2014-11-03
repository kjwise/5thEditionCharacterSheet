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

function loadChar(characterJson) {
    $("#character_name").text(characterJson.name);

    // Compute all classes into a single string
    var charClass = [];
    var totalLevels = 0;
    $.each(characterJson.classes, function (i, item) {
        $.each(item, function (cclass, clvl) {
            charClass.push(cclass + " " + clvl);
            totalLevels += clvl;
        });
    });
    $("#character_class").text(charClass.join(" / "));

    // Proficiency modifier is a function of the total character level
    $("#proficiencyModifier").text("+" + computeProficiencyModifier(totalLevels));

    $("#character_background").text(characterJson.background);
    $("#character_race").text(characterJson.race);
    $("#character_alignment").text(characterJson.alignment);
    $("#player_name").text(characterJson.playername);
    $("#character_xp").html(characterJson.xp || "&nbsp");

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
}

$.getScript(decodeURIComponent(getVars().charURL), function () {
    loadChar(charJson);
});