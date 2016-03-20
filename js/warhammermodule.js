// Die rolling control

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

// Item management

var Weapon = function(name, damage, type) {
    this.name = name;
    this.damage = damage;
    this.type = type;
};

Weapon.prototype.attack = function(wielder, target) {
    var random = rollDie(7);
    var type = this.type;
    if (type === "greatWeapon") {
        if (random === 1) {
            return wielder.name + " swings " + wielder.gender.his + " " + this.name + " at " + target.name + " with reckless abandon.";
        }
        if (random === 2) {
            return wielder.name + " hurls " + wielder.gender.himself + " at " + target.name + ", bellowing threats.";
        }
        if (random === 3) {
            return wielder.name + " swings " + wielder.gender.his + " " + this.name + " at " + target.name + ".";
        }
        if (random === 4) {
            return wielder.name + " strikes out with a series of brutal swings.";
        }
        if (random === 5) {
            return target.name + " is driven back by the ferocity of " + wielder.name + "'s attack.";
        }
        if (random === 6) {
            return wielder.name + "'s veins bulge as " + wielder.gender.he + " hurls " + wielder.gender.his + " " + this.name + " into a series of ruthless blows.";
        }
        if (random === 7) {
            return wielder.name + " swings the " + this.name + " in wild circles as " + wielder.gender.he + " advances.";
        }
    }
    if (type === "bow") {
        if (random === 1) {
            return wielder.name + " shoots " + wielder.gender.his + " " + this.name + " at " + target.name + ".";
        }
        if (random === 2) {
            return wielder.name + " looses a deadly accurate volley of arrows.";
        }
        if (random === 3) {
            return wielder.name + " takes careful aim with " + wielder.gender.his + " " + this.name + " and fires.";
        }
        if (random === 4) {
            return "A viciously barbed arrow streaks toward " + target.name + ".";
        }
        if (random === 5) {
            return wielder.name + " withdraws cautiously, firing deadly arrows.";
        }
        if (random === 6) {
            return "Arrows flash by " + target.name + " as " + wielder.name + " fires " + wielder.gender.his + " " + this.name + ".";
        }
        if (random === 7) {
            return "Dangerous arrows fly toward " + target.name + "'s head.";
        }
    }
    if (type === "handWeapon") {
        if (random === 1) {
            return wielder.name + " advances cautiously, probing " + target.name + "'s defenses.";
        }
        if (random === 2) {
            return wielder.name + " attacks with " + wielder.gender.his + " " + this.name + ".";
        }
        if (random === 3) {
            return target.name + " withdraws from a flurry of attacks from " + wielder.name + "'s " + this.name + ".";
        }
        if (random === 4) {
            return wielder.name + " rushes forward, swinging " + wielder.gender.his + " " + this.name + " at " + target.name + ".";
        }
        if (random === 5) {
            return wielder.name + " performs a skillful maneuver with " + wielder.gender.his + " " + this.name + ".";
        }
        if (random === 6) {
            return wielder.name + " feints high with " + wielder.gender.his + " " + this.name + " and strikes at " + target.name + ".";
        }
        if (random === 7) {
            return wielder.name + " attacks " + target.name + " with vigor.";
        }
        if (random === 8) {
            return target.name + " is buffetted by blows from " + wielder.name + "'s " + this.name + ".";
        }
        if (random === 9) {
            return target.name + " withdraws from " + wielder.name + "'s furious approach.";
        }
        if (random === 10) {
            return wielder.name + " swings " + wielder.gender.his + " " + this.name + " at " + target.name + " with reckless abandon.";
        }
    }
};

Weapon.prototype.hit = function(wielder, target) {
    var random = rollDie();
    var type = this.type;
    if (type === "handWeapon") {
        if (random <= 5) {
            return wielder.name + " hits " + target.name + " with " + wielder.gender.his + " " + this.name + ".";
        }
        if (random <= 10) {
            return target.name + " is struck with a " + this.name;
        }
    }
    if (type === "greatWeapon") {
        if (random <= 5) {
            return wielder.name + " connects with " + target.name + ".";
        }
        if (random <= 10) {
            return target.name + " catches a blow from " + wielder.name + "'s " + this.name + ".";
        }
    }
    if (type === "bow") {
        if (random <= 2) {
            return wielder.name + "'s aim is true, and " + target.name + " is struck by an arrow.";
        }
        if (random <= 10) {
            return wielder.name + "'s shot with " + wielder.gender.his + " " + this.name + " strikes " + target.name + ".";
        }
    }
};

Weapon.prototype.miss = function(wielder, target) {
    var random = rollDie();
    var type = this.type;
    if (type === "handWeapon") {
        if (random <= 2) {
            return wielder.name + "'s " + this.name + " eats air."
        }
        if (random <= 4) {
            return target.name + " easily dodges " + wielder.name + "'s blow."
        }
        if (random <= 6) {
            return wielder.name + " utters a curse as " + target.name + " deftly moves aside."
        }
        if (random <= 8) {
            return wielder.name + " misses " + wielder.gender.his + " strike."
        }
        if (random <= 10) {
            return wielder.name + " cuts a few inches off a nearby bush."
        }
    }
    if (type === "greatWeapon") {
        if (random <= 2) {
            return wielder.name + " swings and buries " + wielder.gender.his + " " + this.name + " a few inches into the earth."
        }
        if (random <= 4) {
            return wielder.name + " nearly hits " + wielder.gender.himself + " as " + wielder.gender.he + " misses " + target.name + "."
        }
        if (random <= 6) {
            return wielder.name + "'s " + this.name + " whistles past " + target.name + "."
        }
        if (random <= 8) {
            return target.name + " sidesteps " + wielder.name + "'s swing."
        }
        if (random <= 10) {
            return wielder.name + " misses!"
        }
    }
    if (type === "bow") {
        if (random <= 2) {
            return wielder.name + "'s shot barely misses " + target.name + "!"
        }
        if (random <= 4) {
            return target.name + " is nearly hit by the arrow from " + wielder.name + "'s " + this.name + "."
        }
        if (random <= 6) {
            return wielder.name + " misses."
        }
        if (random <= 8) {
            return wielder.name + " misses!"
        }
        if (random <= 10) {
            return wielder.name + " misses the shot."
        }
    }
};

Weapon.prototype.penetrate = function(wielder, target) {
    var random = rollDie();
    var type = this.type;
    if (type === "handWeapon") {
        if (random <= 10) {
            return wielder.name + " finds a gap in " + target.name + "'s " + target.gear.armor.name + " armor."
        }
    }
    if (type === "greatWeapon") {
        if (random <= 10) {
            return wielder.name + "'s " + this.name + " tears through " + target.name + "'s " + target.gear.armor.name + " armor."
        }
    }
    if (type === "bow") {
        if (random <= 10) {
            return wielder.name + "'s arrow strikes true!"
        }
    }
};

Weapon.prototype.deflect = function(wielder, target) {
    var random = rollDie();
    var type = this.type;
    if (type === "handWeapon") {
        if (random <= 10) {
            return wielder.name + "'s blow is absorbed by " + target.name + "'s " + target.gear.armor.name + " armor!"
        }
    }
    if (type === "greatWeapon") {
        if (random <= 10) {
            return wielder.name + "'s blow is deflected by " + target.name + "'s " + target.gear.armor.name + " armor."
        }
    }
    if (type === "bow") {
        if (random <= 10) {
            return wielder.name + "'s arrow fails to penetrate " + target.name + "'s " + target.gear.armor.name + " armor."
        }
    }
};

Weapon.prototype.critical = function(wielder, target) {
    var random = rollDie();
    var type = this.type;
    if (type === "handWeapon") {
        if (random <= 10) {
            return wielder.name + "'s " + this.name + " strikes something vital. " + target.name + " falls to the ground, " + target.gender.his + " fight finished."
        }
    }
    if (type === "greatWeapon") {
        if (random <= 10) {
            return wielder.name + " splits " + target.name + " nearly in two with the ferocity of " + wielder.gender.his + " strike."
        }
    }
    if (type === "bow") {
        if (random <= 10) {
            return wielder.name + "'s arrow pierces " + target.name + "'s heart. " + target.name + " falls to the ground, lifeless."
        }
    }
};

var greataxe = new Weapon("greataxe", 4, "greatWeapon");
var broadsword = new Weapon("broadsword", 4, "greatWeapon")
var longbow = new Weapon("longbow", 4, "bow");
var axe = new Weapon("axe", 3, "handWeapon");
var sword = new Weapon("sword", 3, "handWeapon");
var bow = new Weapon("bow", 3, "bow");
var hatchet = new Weapon("hatchet", 2, "handWeapon");
var shortsword = new Weapon("shortsword", 2, "handWeapon");
var shortbow = new Weapon("shortbow", 2, "bow");

var Armor = function(name, soak) {
    this.name = name;
    this.soak = soak;
}

var cloth = new Armor("cloth", 0);
var leather = new Armor("leather", 1);
var chain = new Armor("chain", 2);
var scale = new Armor("scale", 3);
var plate = new Armor("plate", 4);

// Character options

var races = [];
var Race = function(race, ws, bs, str, tou, agi, w) {
    this.name = race;
    this.weaponSkill = ws;
    this.ballisticSkill = bs;
    this.strength = str;
    this.toughness = tou;
    this.agility = agi;
    this.wounds = w;
    races.push(this.name);
};
//                                ws    bs    st    to    ag    wo
var human = new Race("Human", 20, 20, 20, 20, 20, 20);
var dwarf = new Race("Dwarf", 20, 20, 20, 30, 10, 20);
var elf = new Race("Elf", 25, 25, 15, 15, 25, 15);
var halfling = new Race("Halfling", 20, 25, 15, 15, 30, 15);
var orc = new Race("Orc", 20, 10, 25, 25, 20, 20);
var goblin = new Race("Goblin", 20, 25, 15, 15, 30, 15);
var formic = new Race("Formic", 15, 15, 25, 25, 20, 20);

var humanNames = ["Steve", "Gregg", "Stann", "Friedrich", "Franz"];
var dwarfNames = ["Ullva", "Skenn", "Advaar", "Noln", "Dem"];
var elfNames = ["Savaa", "Irwin", "Idaa", "Umriel", "Zarr"];
var halflingNames = ["Ives", "Guy", "Zappa", "Savvy", "Dagga"];
var orcNames = ["Akraa", "Grogg", "Dragg", "Tolga", "Narr"];
var goblinNames = ["Stinky", "Slimo", "Togglefoot", "Kelly", "Droop"];

var careers = [];
var Career = function(career, ws, bs, str, tou, agi, gear) {
    this.name = career;
    this.weaponSkill = ws;
    this.ballisticSkill = bs;
    this.strength = str;
    this.toughness = tou;
    this.agility = agi;
    this.gear = gear;
    careers.push(this.name);
};

var warrior = new Career("Warrior", 10, 0, 5, 5, 0, {
    weapon: greataxe,
    armor: leather
});

var archer = new Career("Archer", 0, 10, 0, 0, 10, {
    weapon: bow,
    armor: scale
});

var soldier = new Career("Soldier", 5, 0, 5, 5, 5, {
    weapon: shortsword,
    armor: scale
})

var mercenary = new Career("Mercenary", 10, 0, 0, 0, 0, {
    weapon: broadsword,
    armor: chain
})

var arbalest = new Career("Arbalest", 0, 5, 0, 0, 5, {
    weapon: shortbow,
    armor: plate
})

var fencer = new Career("Fencer", 10, 0, 5, 0, 10, {
    weapon: sword,
    armor: cloth
})
var raider = new Career("Raider", 10, 0, 5, 0, 0, {
    weapon: axe,
    armor: scale
})

// Character generator

var genders = [];
var Gender = function(name, pronoun, possessive, referential, variableName) {
    this.name = name;
    this.he = pronoun;
    this.his = possessive;
    this.himself = referential;
    this.variableName = variableName;
    genders.push(this);
}

var male = new Gender("Male", "he", "his", "himself", "male");
var female = new Gender("Female", "she", "her", "herself", "female");
var none = new Gender("Genderless", "it", "its", "itself", "none");

var Character = function(name, race, career, gender) {
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
    if (this.race === "Human") {
        this.src = "http://i.imgsafe.org/bd2af8d.gif"
    } else if (this.race === "Dwarf") {
        this.src = "http://i.imgsafe.org/c20a89e.gif"
    } else if (this.race === "Elf") {
        this.src = "http://i.imgsafe.org/c31b869.gif"
    } else if (this.race === "Halfling") {
        this.src = "http://i.imgsafe.org/be0d5d5.gif"
    } else if (this.race === "Orc") {
        this.src = "http://i.imgsafe.org/bce0106.gif"
    } else if (this.race === "Goblin") {
        this.src = "http://i.imgsafe.org/beebe79.gif"
    } else if (this.race === "Formic") {
        this.src = "http://i.imgsafe.org/bfe64e0.gif"
    }
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
}

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

var combat = function(attacker, defender) {
    var returnString = "<p>";
    if (attacker.gear.weapon.type === "bow") {
        var targetVal = attacker.ballisticSkill
    } else {
        var targetVal = attacker.weaponSkill
    }
    returnString += attacker.gear.weapon.attack(attacker, defender) + "</br>";
    if (rollDie(100) < targetVal) {
        var damageRoll = (attacker.gear.weapon.damage + rollDie());
        if (attacker.gear.weapon.type === "handWeapon" || attacker.gear.weapon.type === "greatWeapon") {
            damageRoll += attacker.strengthBonus;
        }
        if (rollDie(100) < defender.agility) {
            returnString += attacker.gear.weapon.miss(attacker, defender) + "</br>"
        } else if (damageRoll > (defender.gear.armor.soak + defender.toughnessBonus)) {
            returnString += attacker.gear.weapon.hit(attacker, defender) + "</br>";
            returnString += attacker.gear.weapon.penetrate(attacker, defender) + "</br>";
            defender.wounds -= (damageRoll - (defender.gear.armor.soak + defender.toughnessBonus))
        } else {
            returnString += attacker.gear.weapon.hit(attacker, defender) + "</br>";
            returnString += attacker.gear.weapon.deflect(attacker, defender) + "</br>";
        }
    } else {
        returnString += attacker.gear.weapon.miss(attacker, defender) + "</br>"
    };
    if (defender.wounds > 0) {
        returnString += defender.damage() + "</p>"
    };
    return returnString;
};

var fight = function(player1, player2) {
    var fightScene = "";
    fightScene += "<h1>" + player1.name + " vs " + player2.name + "!</h1>";
    var round = 1;
    while (player1.wounds > 0 && player2.wounds > 0) {
        fightScene += "<h2>Round " + round + "</h2>";
        fightScene += combat(player1, player2);
        if (player2.wounds <= 0) {
            fightScene += player1.gear.weapon.critical(player1, player2);
            fightScene += "<h2>" + player1.name + " Wins!</h2>";
            return fightScene;
        }
        fightScene += combat(player2, player1);
        if (player1.wounds <= 0) {
            fightScene += player2.gear.weapon.critical(player2, player1);
            fightScene += "<h2>" + player2.name + " Wins!</h2>";
            return fightScene;
        }
        round++;
    }
}

var profileBuilder = function(adventurer) {
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
}

var formGen = function() {
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
}

