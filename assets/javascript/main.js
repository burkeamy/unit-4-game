var randNum ;
var wins = 0;
var losses = 0;
var counter = 0;
var numOptions = []
var images = ["blueCrystal.png", "greenCrystal.png", "colorCrystals.png", "purple.png"]

$(document).ready(function() {
    
var randNum = Math.floor(Math.random() * (120-19) + 19);
        $("#target").html(randNum);

for (var a = 0; a < 4; a ++) {
    numOptions[a] = Math.floor(Math.random() * (12-1) + 1);
}

$("#youWin").html("Wins = " + wins);
$("#youLose").html("Losses = " + losses);
$("#howManyNow").html(0);

for (var i = 0; i < 4; i++ ){
    var img = $("<img>");
    img.attr("src", "assets/images/" + images[i]);   
    img.attr("data-value", numOptions[i]);
    img.addClass("crystal-image");
    $("#crystals").append(img);
}

$(".crystal-image").on("click", function() {
    counter += parseInt($(this).data("value"));
    $(counter).addClass("howManyNow");
    $("#howManyNow").html(counter);
    console.log(counter);

if (counter === randNum) {
    alert("Congrats, you win!");
    $(wins ++ ).append("#youWin");
    $("#youWin").html("Wins = " + wins);
}
else if (counter > randNum) {
    alert("Sorry, you lose");
    $(losses ++ ).append("#youLose");
    $("#youLose").html("Losses = " + losses);
}
});   

$("#replay").click(function() {
    
    counter = 0;
    $("#howManyNow").html(0);
    var randNum = Math.floor(Math.random() * (120-19) + 19);
   $("#target").html(randNum);
   for (var a = 0; a < 4; a ++) {
    numOptions[a] = Math.floor(Math.random() * (12-1) + 1);
    }
});

});

























