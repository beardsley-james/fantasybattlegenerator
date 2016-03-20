var character1 = {};
var character2 = {};

$(document).ready(function() {
	$("#selectionMenu").on("click", "button.classSelect", function(e){
		e.preventDefault();
		var player = $(this).attr("id")[6];
		switch (player) {
			case "1" :
				character1 = CharacterSelection($(this));
				$("#player1Selection").toggle();
				$("#player1Display").html(profileRender(character1));
				break;
			case "2" :
				character2 = CharacterSelection($(this));
				$("#player2Selection").toggle();
				$("#player2Display").html(profileRender(character2));
		};
	});
	
	$("#runFight button").on("click", function(e){
		$("#selectionMenu").toggle();
		$("#charsheetPlayerOne").html(profileRender(character1));
		$("#charsheetPlayerTwo").html(profileRender(character2));
		$("#fightTranscript").html(fight(character1, character2));
		$("#gameOutput").toggle();
	});
	
	$("#gameOutput").toggle();
	for (i=1; i<3; i++) {

		$("#player" + i + "NPCs").html(npcListGenerator(npcs));
		
		$("#player" + i + "FormCharGenCareer").html(createOptionList(careers));
		$("#player" + i + "FormCharGenSpecies").html(createOptionList(races));
		$("#player" + i + "FormCharGenGender").html(createOptionList(genders));
		
		$("#player" + i + "FormAdvancedGender").html(createOptionList(genders));
		$("#player" + i + "FormAdvancedWeapon").html(createOptionList(weapons));
		$("#player" + i + "FormAdvancedArmor").html(createOptionList(armors));
	}
});


var slabGrunt = new Character("Slab Grunt", orc, warrior, male, true);
var robberBaron = new Character("Robber Baron", human, mercenary, male, true);
var lucyFormic = new Character("Lucy Formic", formic, soldier, none, true);
var jamesBeardsley = new Character("James Beardsley", human, arbalest, male, true);
var kellyLoveless = new Character("Kelly Loveless", human, warrior, female, true);