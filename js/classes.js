var careers = [];
var Career = function(career, ws, bs, str, tou, agi, gear, npc) {
    this.name = career;
    this.weaponSkill = ws;
    this.ballisticSkill = bs;
    this.strength = str;
    this.toughness = tou;
    this.agility = agi;
    this.gear = gear;
    if (!npc) {
		careers.push(this.name);
	}
};