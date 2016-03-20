var rollDie = function(sides) {
    if (!sides) {
        sides = 10;
    }
    return Math.floor(Math.random() * sides) + 1;
};

var rollDice = function(quantity, sides) {
    var total = 0;
    for (i = 0; i < quantity; i++) {
        total += rollDie(sides);
    }
    return total;
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function idGenerator(characterNameString) {
	characterNameString = characterNameString.split(" ");
	characterNameString[0] = characterNameString[0].toLowerCase();
	characterNameString = characterNameString.join("");
	return characterNameString;
}

function radioButtonGenerator(npc) {
	var npcID = idGenerator(npc);
	var formName = "player" + i + "NPCsMenu";
	var menuItem = "<div class='radio'>"
	menuItem += "<label>"
	menuItem += "<input type='radio' name='" + formName + "'";
	menuItem += "id='" + npcID + "' value = '" + npcID + "'>";
	menuItem += npc + ", a";
	if (isVowel(eval(npcID).race[0])){
		menuItem += "n";
	};
	menuItem += " " + eval(npcID).race + " " + eval(npcID).career;
	menuItem += "</label></div>";
	return menuItem;
}

function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

function createOptionList(arrayOfItems) {
	var optionList = "";
	arrayOfItems.forEach(function(item){
		optionList += "<option>" + capitalizeFirstLetter(item) + "</option>";
	});
	return optionList
}

function npcListGenerator(npcs) {
		var npcList = "";
		npcs.forEach(function(npc){
			npcList += radioButtonGenerator(npc);
		});
		npcList += "<button type='submit' class='btn btn-default form-control classSelect'";
		npcList += "id='player"+i+"FormNPCsSubmit'>Submit</button>"
		return npcList;
}