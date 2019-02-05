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

function mapStats(characterJson, abilityToModifierStore, proficiencyModifier) {
    var mainStats = ["str", "dex", "con", "int", "wis", "cha"];
    $.each(mainStats, function (i, ability) {
        var abilityScoreValue = characterJson.abilityscores[ability];
        // Set text and add fancy hover interaction
        var abilityTarget = $("#" + ability);
        abilityTarget.text(abilityScoreValue).hover(
            function () {
                $("." + ability).css("color", "red")
            },
            function () {
                $("." + ability).css("color", "")
            });

        // Show the modifier that is a function of the ability score
        var modifier = computeAbilityModifier(abilityScoreValue);

        // Save the result in a possibly provided object
        if (abilityToModifierStore !== undefined) {
            abilityToModifierStore[ability] = modifier;
        }

        abilityTarget.parent().find(".mainStatModifier").first().text(formatModifier(modifier));

        // Deal with the saving throws and proficiencies
        if ($.inArray(ability, characterJson.savingthrow_proficiencies) > -1) {
            modifier += proficiencyModifier;
            $("#save_" + ability).addClass("proficient");
        }
        $("#save_" + ability + " .checkModifier").text(formatModifier(modifier));
    });
}

function computeProficiencyModifier(totalLevels) {
    return (Math.floor((totalLevels - 1) / 4) + 2);
}

function mapSkills(characterJson, abilityToModifierStore, proficiencyModifier) {
    var targetContainer = $("#skills").find("div").first();
    $.each(skillsToAbility, function (skill, ability) {
        var modifier = abilityToModifierStore[ability];
        var proficiencyTag = '';
        if ($.inArray(skill.toLowerCase(), characterJson.skill_proficiences) > -1) {
            proficiencyTag = ' proficient';
            modifier += proficiencyModifier;
        }
        targetContainer.append('<div class="center-block col-xs-6 col-sm-3 col-md-6 ' + ability + proficiencyTag + '">' +
            '<span class="checkModifier">' + formatModifier(modifier) + "</span> " + skill + '<i class="hidden-sm hidden-xs"> (' + ability + ')</i></div>');
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

function renderListItem(target, item) {
    if (item.indexOf(":") > -1) {
        var arr = item.split(":");
        target.append('<span class="fieldHeader">' + arr[0] +
            '</span><br/><span class="fieldFooter">' + arr[1] + '</span><br/>');
    }
    else {
        target.append(item + "<br/>");
    }
}

function mapEquipment(equipment) {
    $.each(equipment.coins, function (coinType, amount) {
        $("#" + coinType).text(amount);
    });
    var target = $("#equipmentList");
    var sortedEquipment = equipment.other.sort();
    var attuned = $.grep(sortedEquipment, function (item) {
        return item.toLowerCase().indexOf("attuned") > -1;
    });

    $.each(attuned, function (i, item) {
        renderListItem(target, item);
    });

    sortedEquipment = $.grep(sortedEquipment, function (item) {
        return attuned.indexOf(item) < 0;
    });

    $.each(sortedEquipment, function (i, item) {
        renderListItem(target, item);
    });
}

function mapPersonality(personality) {
    $("#personalityTraits").prepend(personality.traits);
    $("#ideals").prepend(personality.ideals);
    $("#bonds").prepend(personality.bonds);
    $("#flaws").prepend(personality.flaws);
}

function mapFeatures(features) {
    var target = $("#featuresandtraits");
    $.each(features.sort(), function (i, feature) {
        renderListItem(target, feature);
    });
}

function mapProficiencesAndLanguages(characterJson) {
    $.each(characterJson.languages.sort().reverse(), function (i, language) {
        $("#otherProficienciesAndLanguages").prepend(language + "<br/>");
    });
    $.each(characterJson.proficiencies.sort().reverse(), function (i, proficiency) {
        $("#otherProficienciesAndLanguages").prepend(proficiency + "<br/>");
    });
}

function mapAppearance(characterJson) {
    $.each(characterJson.appearance, function (attrKey, attrValue) {
        $("#" + attrKey).append(attrValue)
    });
}

function mapContacts(characterJson) {
    $.each(characterJson.contacts, function (i, contact) {
        $("#contactlist").append(contact + "<br/>");
    });
}

function mapSpells(characterJson, abilityToModifierStore, proficiencyModifier) {
    if ("spellcastingAbility" in characterJson.spellcasting) {
        var spellCastingAttackModifier = abilityToModifierStore[characterJson.spellcasting.spellcastingAbility] + proficiencyModifier;
        $("#spellAttackBonus").append("+" + spellCastingAttackModifier);
        $("#spellSaveDC").append("+" + (spellCastingAttackModifier + 8));
        $("#spellcastingAbility").append(characterJson.spellcasting.spellcastingAbility);
    }
    if ("spells" in characterJson.spellcasting) {
        $.each(characterJson.spellcasting.spells, function (attrKey, attrValue) {
            $.each(attrValue, function (spellKey, spellName) {
                $("#" + attrKey).append("<div>" + spellName + "</div>")
            });
        });
        // Remove empty spell slots
        for (var n = 110; n < 10; ++n) {
            var spell = "spells" + n;
            if (!(spell in characterJson.spellcasting.spells)) {
                $("#" + spell).remove();
            }
        }
    }
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

    $("#character_background").html(characterJson.mainattributes.background || "&nbsp");
    $("#character_race").html(characterJson.mainattributes.race || "&nbsp");
    $("#character_alignment").html(characterJson.mainattributes.alignment || "&nbsp");
    $("#player_name").html(characterJson.mainattributes.playername || "&nbsp");
    $("#character_xp").html(characterJson.mainattributes.xp || "&nbsp");

    // Map inspiration
    if ((characterJson.hasinspirationpoint || $.isNumeric(characterJson.inspirationpoints) && characterJson.inspirationpoints > 0)) {
        $('#inspiration').prop("checked", true)
    }

    // Map exhaustion
    if (characterJson.exhaustionlevel > 0) {
        $("#exhaustion").find("input[name=exhaustionLevel][value=" + characterJson.exhaustionlevel + "]").prop('checked', true);
    }

    // Plug in ability scores, modifiers and saving throws
    var abilityToModifierStore = {};
    mapStats(characterJson, abilityToModifierStore, proficiencyModifier);

    // Handle skills
    mapSkills(characterJson, abilityToModifierStore, proficiencyModifier);

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

    // Coins & other equipment
    mapEquipment(characterJson.equipment);

    mapPersonality(characterJson.personality);
    mapFeatures(characterJson.features);
    mapProficiencesAndLanguages(characterJson);
    mapAppearance(characterJson);
    if ("contacts" in characterJson) {
        mapContacts(characterJson);
    }
    if ("spellcasting" in characterJson) {
        mapSpells(characterJson, abilityToModifierStore, proficiencyModifier);
    }
    else {
        $("#spellsContainer").remove();
        $("#spellAbilitiesContainer").remove();
    }
}

// Inject the JSONp "script" from the location defined in the URL.
var charURL = decodeURIComponent(getVars()["charURL"]);
if (charURL === 'undefined') charURL = 'fireaxe.js';
$.ajax({
    url: charURL,
    dataType: 'script',
    timeout: 5000,
    success: function () {
        loadChar(charJson);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert("Failed loading data from charURL " + charURL + "  - " + textStatus + " - " + errorThrown);
    }
});
