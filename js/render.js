function profileRender (character) {
	var profile = "";
	profile += "<h3>" + character.name;
	profile += " <small>" + character.race + " " + character.career + "</small></h3>";
	profile += "<p>Weapon Skill: " + character.weaponSkill + "</p>";
	profile += "<p>Ballistic Skill: " + character.ballisticSkill + "</p>";
	profile += "<p>Strength: " + character.strength + "</p>";
	profile += "<p>Toughness: " + character.toughness + "</p>";
	profile += "<p>Agility: " + character.agility + "</p>";
	profile += "<p>Weapon: " + capitalizeFirstLetter(character.gear.weapon.name) + "</p>";
	profile += "<p>Armor: " + capitalizeFirstLetter(character.gear.armor.name) + "</p>";
	profile += "<p>Wounds: " + character.wounds + "/" + character.maxWounds + "</p>";
	return profile
	}

/* var profileBuilder = function(adventurer) {
    var profile = "";
    profile += "<div class=profile><img src='" + adventurer.src + "'><h2>" + adventurer.name + "</h2>";
    profile += "<b>" + adventurer.race + " " + adventurer.career + "</b></br>";
    profile += "Weapon Skill: " + adventurer.weaponSkill + "</br>";
    profile += "Ballistic Skill: " + adventurer.ballisticSkill + "</br>";
    profile += "Strength: " + adventurer.strength + "</br>";
    profile += "Toughness: " + adventurer.toughness + "</br>";
    profile += "Agility: " + adventurer.agility + "</br>";
    profile += "Wounds: " + adventurer.wounds + "/" + adventurer.maxWounds + "</br>";
    profile += "Gear: <ul>";
    profile += "<li>Weapon: " + capitalizeFirstLetter(adventurer.gear.weapon.name) + "</li>";
    profile += "<li>Armor: " + capitalizeFirstLetter(adventurer.gear.armor.name) + "</li></ul></div>"
    return profile;
} */

/* var formGen = function() {
    var outputString = "<form id='playerselect'><fieldset>";

    outputString += "<legend><h2>Select First Combatant</h2></legend>";
    // name entry id = "p1 name"
    outputString += "Name: <input type='text' name='p1name' id='p1name'></br>";
    outputString += "Race: <select name='p1race' id='p1race'>";
    for (i = 0; i < races.length; i++) {
        outputString += "<option value ='" + races[i].toLowerCase() + "'>" + races[i] + "</option>";
    }
    outputString += "</select></br>";
    outputString += "Career: <select name='p1career' id='p1career'></br>";
    for (i = 0; i < careers.length; i++) {
        outputString += "<option value ='" + careers[i].toLowerCase() + "'>" + careers[i] + "</option>";
    }
    outputString += "</select></br>";

    outputString += "Gender: <select name='p1gender' id='p1gender'></br>";
    for (i = 0; i < genders.length; i++) {
        outputString += "<option value ='" + genders[i].variableName + "'>" + genders[i].name + "</option>";
    }
    outputString += "</select></br></fieldset>";

    outputString += "<fieldset><legend><h2>Select Second Combatant</h2></legend>";
    // name entry id = "p1 name"
    outputString += "Name: <input type='text' name='p2name' id='p2name'></br>";
    outputString += "Race: <select name='p2race' id='p2race'>";
    for (i = 0; i < races.length; i++) {
        outputString += "<option value ='" + races[i].toLowerCase() + "'>" + races[i] + "</option>";
    }
    outputString += "</select></br>";
    outputString += "Career: <select name='p2career' id='p2career'></br>";
    for (i = 0; i < careers.length; i++) {
        outputString += "<option value ='" + careers[i].toLowerCase() + "'>" + careers[i] + "</option>";
    }
    outputString += "</select></br>";

    outputString += "Gender: <select name='p2gender' id='p2gender'></br>";
    for (i = 0; i < genders.length; i++) {
        outputString += "<option value ='" + genders[i].variableName + "'>" + genders[i].name + "</option>";
    }
    outputString += "</select></br></fieldset>";
    outputString += "<button id='fightitout'>Fight It Out!</button></form>"

    return outputString;
} */ 