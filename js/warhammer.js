$(document).ready(function() {
  $("div#p1").toggle();
  $("div#p2").toggle();
  $("div#fight").toggle();
  $("div#form").html(formGen());
  $("#fightitout").click(function(e) {
    e.preventDefault();
    var p1name = $('input#p1name').val();
    var p1race = $('select#p1race').val();
    var p1career = $('select#p1career').val();
    var p1gender = $('select#p1gender').val();
    var p2name = $('input#p2name').val();
    var p2race = $('select#p2race').val();
    var p2career = $('select#p2career').val();
    var p2gender = $('select#p2gender').val();
    $("div#form").toggle();
    var p1 = new Character(p1name, eval(p1race), eval(p1career), eval(p1gender));
    var p2 = new Character(p2name, eval(p2race), eval(p2career), eval(p2gender));
    console.log(p1);
    console.log(p2);
    $("div#fight").html(fight(p1, p2));
    $("div#p1").html(profileBuilder(p1));
    $("div#p2").html(profileBuilder(p2));
    $("div#p1").toggle();
    $("div#p2").toggle();
    $("div#fight").toggle();
  })
});