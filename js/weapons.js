var weapons = [];

var Weapon = function(name, damage, type) {
    this.name = name;
    this.damage = damage;
    this.type = type;
	weapons.push(this.name)
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