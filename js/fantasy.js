var greataxe = new Weapon("greataxe", 4, "greatWeapon");
var broadsword = new Weapon("broadsword", 4, "greatWeapon")
var longbow = new Weapon("longbow", 4, "bow");
var axe = new Weapon("axe", 3, "handWeapon");
var sword = new Weapon("sword", 3, "handWeapon");
var bow = new Weapon("bow", 3, "bow");
var hatchet = new Weapon("hatchet", 2, "handWeapon");
var shortsword = new Weapon("shortsword", 2, "handWeapon");
var shortbow = new Weapon("shortbow", 2, "bow");

var cloth = new Armor("cloth", 0);
var leather = new Armor("leather", 1);
var chain = new Armor("chain", 2);
var scale = new Armor("scale", 3);
var plate = new Armor("plate", 4);

var human = new Race("Human", 20, 20, 20, 20, 20, 20);
var dwarf = new Race("Dwarf", 20, 20, 20, 30, 10, 20);
var elf = new Race("Elf", 25, 25, 15, 15, 25, 15);
var halfling = new Race("Halfling", 20, 25, 15, 15, 30, 15);
var orc = new Race("Orc", 20, 10, 25, 25, 20, 20);
var goblin = new Race("Goblin", 20, 25, 15, 15, 30, 15);
var formic = new Race("Formic", 15, 15, 25, 25, 20, 20);

var golem = new Race("", 0, 0, 0, 0, 0, 0, true);

var humanNames = ["Steve", "Gregg", "Stann", "Friedrich", "Franz"];
var dwarfNames = ["Ullva", "Skenn", "Advaar", "Noln", "Dem"];
var elfNames = ["Savaa", "Irwin", "Idaa", "Umriel", "Zarr"];
var halflingNames = ["Ives", "Guy", "Zappa", "Savvy", "Dagga"];
var orcNames = ["Akraa", "Grogg", "Dragg", "Tolga", "Narr"];
var goblinNames = ["Stinky", "Slimo", "Togglefoot", "Kelly", "Droop"];

var warrior = new Career("Warrior", 10, 0, 5, 5, 0, {weapon: greataxe, armor: leather});
var archer = new Career("Archer", 0, 10, 0, 0, 10, {weapon: bow, armor: scale});
var soldier = new Career("Soldier", 5, 0, 5, 5, 5, {weapon: shortsword, armor: scale});
var mercenary = new Career("Mercenary", 10, 0, 0, 0, 0, {weapon: broadsword, armor: chain});
var arbalest = new Career("Arbalest", 0, 5, 0, 0, 5, {weapon: shortbow, armor: plate});
var fencer = new Career("Fencer", 10, 0, 5, 0, 10, {weapon: sword, armor: cloth});
var raider = new Career("Raider", 10, 0, 5, 0, 0, {weapon: axe, armor: scale});

var villager = new Career("", 0, 0, 0, 0, 0, {}, true);

var male = new Gender("Male", "he", "his", "himself", "male");
var female = new Gender("Female", "she", "her", "herself", "female");
var none = new Gender("Genderless", "it", "its", "itself", "none");
