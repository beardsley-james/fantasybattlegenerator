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