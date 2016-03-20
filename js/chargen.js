function CharacterSelection(element) {
	switch (element.attr("id").slice(0, -6).slice(11)) {
		case "CharGen" : 
			return CharacterGenerator(element); 
			break;
		case "NPCs" :
			return eval($("input:radio[name=" + element.attr("id").slice(0, 7) + "NPCsMenu]:checked").val());
			break;
		case "Advanced" :
			return AdvancedCharacterGenerator(element);
	};
	console.log(character);
}

//$('input:radio[name=theme]:checked').val()

function CharacterGenerator(element) {
	var form = "#" + $(element).attr("id").slice(0, -6);
	var name = $(form + "Name").val();
	var career = eval($(form + "Career").val().toLowerCase());
	var species = eval($(form + "Species").val().toLowerCase());
	var gender = eval($(form + "Gender").val().toLowerCase());
	return new Character(name, species, career, gender);
}

function AdvancedCharacterGenerator(element) {
	var form = "#" + $(element).attr("id").slice(0, -6);
	var template = new Character("", golem, villager, none);
	template.race = $(form + "Race").val();
	template.name = $(form + "Name").val();
	if (template.name === "") {
        template.defaultName();
    };
	template.career = $(form + "Career").val();
	template.gender = eval($(form + "Gender").val().toLowerCase());
	template.weaponSkill = $(form + "WS").val();
	template.ballisticSkill = $(form + "BS").val();
	template.strength = $(form + "Strength").val();
	template.toughness = $(form + "Toughness").val();
	template.agility = $(form + "Agility").val();
	template.wounds = $(form + "Wounds").val();
	template.strengthBonus = Math.floor(template.strength / 10);
	template.toughnessBonus = Math.floor(template.toughness / 10);
	template.maxWounds = template.wounds;
	template.gear = {
		weapon: eval($(form + "Weapon").val().toLowerCase()),
		armor: eval($(form + "Armor").val().toLowerCase())
	};
	return template;
}


var npcs = [];

var Character = function(name, race, career, gender, npc) {
    this.name = name;
    this.race = race.name;
    if (this.name === "") {
        this.defaultName();
    }
    this.career = career.name;
    this.weaponSkill = race.weaponSkill + career.weaponSkill + rollDie();
    this.ballisticSkill = race.ballisticSkill + career.ballisticSkill + rollDie();
    this.strength = race.strength + career.strength + rollDie();
    this.toughness = race.toughness + career.toughness + rollDie();
    this.agility = race.agility + career.agility + rollDie();
    this.strengthBonus = Math.floor(this.strength / 10);
    this.toughnessBonus = Math.floor(this.toughness / 10);
    this.wounds = race.wounds + rollDie(6) + this.toughnessBonus;
    this.maxWounds = this.wounds;
    this.gear = career.gear;
    this.gender = gender;
	if (npc) {
		npcs.push(this.name);
	}
//    if (this.race === "Human") {
//        this.src = "http://i.imgsafe.org/bd2af8d.gif"
//    } else if (this.race === "Dwarf") {
//        this.src = "http://i.imgsafe.org/c20a89e.gif"
//    } else if (this.race === "Elf") {
//        this.src = "http://i.imgsafe.org/c31b869.gif"
//    } else if (this.race === "Halfling") {
//        this.src = "http://i.imgsafe.org/be0d5d5.gif"
//    } else if (this.race === "Orc") {
//        this.src = "http://i.imgsafe.org/bce0106.gif"
//    } else if (this.race === "Goblin") {
//        this.src = "http://i.imgsafe.org/beebe79.gif"
//    } else if (this.race === "Formic") {
//        this.src = "http://i.imgsafe.org/bfe64e0.gif"
//    }
};

Character.prototype.defaultName = function() {
    var random = rollDie(5) - 1;
    if (this.race === "Human") {
        this.name = humanNames[random]
    } else if (this.race === "Dwarf") {
        this.name = dwarfNames[random]
    } else if (this.race === "Elf") {
        this.name = elfNames[random]
    } else if (this.race === "Halfling") {
        this.name = halflingNames[random]
    } else if (this.race === "Orc") {
        this.name = orcNames[random]
    } else if (this.race === "Goblin") {
        this.name = goblinNames[random]
    } else {
        this.name = "Bob"
    }
};

Character.prototype.threaten = function() {
    console.log("I'm the mighty " + this.name + ", a grim " + this.race + " " + this.career + "!");
};

Character.prototype.damage = function() {
    if (this.wounds === this.maxWounds) {
        return this.name + " is unharmed."
    } else if (this.wounds > (this.maxWounds / 2)) {
        return this.name + " is bloodied."
    } else if (this.wounds > 0) {
        return this.name + " is in rough shape."
    } else {
        return this.name + " is near death."
    }
};