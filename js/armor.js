var armors = [];

var Armor = function(name, soak) {
    this.name = name;
    this.soak = soak;
	armors.push(this.name)
}