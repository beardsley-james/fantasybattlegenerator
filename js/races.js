var races = [];
var Race = function(race, ws, bs, str, tou, agi, w, npc) {
    this.name = race;
    this.weaponSkill = ws;
    this.ballisticSkill = bs;
    this.strength = str;
    this.toughness = tou;
    this.agility = agi;
    this.wounds = w;
	if (!npc) {
		races.push(this.name);
	}
};