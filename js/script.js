/* global $*/
/* global performLogic*/

var player = "x";
var turnsTaken = 0;
var endGame = 0; 




$("#button1").click( function() {
    performLogic("#button1","#tile1");
    $("#button1").hide();
    $("#tile1").html("<p></p>");
    $("#tile1").append(player);
    turnsTaken = turnsTaken + 1;
    turns();
});

$("#button2").click( function() {
    performLogic("#button2","#tile2");
    switchPlayers();
    $("#button2").hide();
    $("#tile2").html("<p></p>");
    $("#tile2").append(player);
    turnsTaken = turnsTaken + 1;
    turns();
});

$("#button3").click( function() {
    performLogic("#button3","#tile3");
    switchPlayers();
    $("#button3").hide();
    $("#tile3").html("<p></p>");
    $("#tile3").append(player);
    turnsTaken = turnsTaken + 1;
    turns();
});

$("#button4").click( function() {
    performLogic("#button4","#tile4");
    switchPlayers();
    $("#button4").hide();
    $("#tile4").html("<p></p>");
    $("#tile4").append(player);
    turnsTaken = turnsTaken + 1;
});

$("#button5").click( function() {
    performLogic("#button5","#tile5");
    switchPlayers();
    $("#button5").hide();
    $("#tile5").html("<p></p>");
    $("#tile5").append(player);
    turnsTaken = turnsTaken + 1;
});

$("#button6").click( function() {
    performLogic("#button6","#tile6");
    switchPlayers();
    $("#button6").hide();
    $("#tile6").html("<p></p>");
    $("#tile6").append(player);
    turnsTaken = turnsTaken + 1;
});

$("#button7").click( function() {
    performLogic("#button7","#tile7");
    switchPlayers();
    $("#button7").hide();
    $("#button7").text(player);
    $("#tile7").append(player);
    turnsTaken = turnsTaken + 1;
});

$("#button8").click( function() {
    performLogic("#button8","#tile8");
    switchPlayers();
    $("#button8").hide();
    $("#tile8").html("<p></p>");
    $("#tile8").append(player);
    turnsTaken = turnsTaken + 1;
});

$("#button9").click( function() {
    performLogic("#button9","#tile9");
    switchPlayers();
    $("#button9").hide();
    $("#tile9").html("<p></p>");
    $("#tile9").append(player);
    turnsTaken = turnsTaken + 1;
    console.log(turnsTaken);
    
});

function performLogic(buttonId, tileId) {
    
}


function switchPlayers(){
    if(player === "x" && turnsTaken === 0){
        player = "x";
    }else if(player === "x"){
        player = "o";
    }else if(player === "o"){
        player = "x";
    }
    
}
function draw(){
    if(turnsTaken === 9){
        endGame = true;
        alert("DRAW");
    }
    
}

function turns(){
    if("#tile1", "#tile2", "#tile3" === "x"){
        alert("X Wins");
    }
    
}

