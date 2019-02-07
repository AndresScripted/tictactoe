/* global $*/
/* global performLogic*/

var player = "x";
var turnsTaken = 0;
var endGame = false; 




$("#button1").click( function() {
    performLogic("#button1","#tile1");
    placePiece("#button1", "#tile1");
    turnsTaken = turnsTaken + 1;
    draw();
    
});

$("#button2").click( function() {
    performLogic("#button2","#tile2");
    switchPlayers();
    placePiece("#button2", "#tile2");
    turnsTaken = turnsTaken + 1;
    draw();
    
});

$("#button3").click( function() {
    performLogic("#button3","#tile3");
    switchPlayers();
    placePiece("#button3", "#tile3");
    turnsTaken = turnsTaken + 1;
    draw();
    
});

$("#button4").click( function() {
    performLogic("#button4","#tile4");
    switchPlayers();
    placePiece("#button4", "#tile4");
    turnsTaken = turnsTaken + 1;
    draw();
    
});

$("#button5").click( function() {
    performLogic("#button5","#tile5");
    switchPlayers();
    placePiece("#button5", "#tile5");
    turnsTaken = turnsTaken + 1;
    draw();
    
});

$("#button6").click( function() {
    performLogic("#button6","#tile6");
    switchPlayers();
    placePiece("#button6", "#tile6");
    turnsTaken = turnsTaken + 1;
    draw();
   
});

$("#button7").click( function() {
    performLogic("#button7","#tile7");
    switchPlayers();
    placePiece("#button7", "#tile7");
    turnsTaken = turnsTaken + 1;
    draw();
  
});

$("#button8").click( function() {
    performLogic("#button8","#tile8");
    switchPlayers();
    placePiece("#button8", "#tile8");
    turnsTaken = turnsTaken + 1;
    draw();
    
});

$("#button9").click( function() {
    performLogic("#button9","#tile9");
    switchPlayers();
    placePiece("#button9", "#tile9");
    turnsTaken = turnsTaken + 1;
    draw();
    
    
});

function performLogic(buttonId, tileId) {
    verticalWins();
    horizontalWins();
    diagonalWins();
}


function placePiece(buttonId, tileId){
    $(buttonId).hide();
    $(tileId).text(player);
    
    
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

function match(tileId1, tileId2, tileId3){
    if($(tileId1).text() === player
    && $(tileId2).text() === player
    && $(tileId3).text() === player){
        return true;
    }else{
        
    }
    
}




function draw(){
    if(turnsTaken === 9){
        endGame = true;
        alert("draw");
    }
    
}


function verticalWins(){
    if(match("tile1", "tile4", "tile7") ||
        match("tile2", "tile5", "tile8") ||
        match("tile3", "tile6", "tile9")){
        
        endGame = true;
        $("h1").text(player + "won");
    }
    
    
    
}

function horizontalWins(){
    if(match("tile1", "tile2", "tile3") ||
        match("tile4", "tile5", "tile6") ||
        match("tile7", "tile8", "tile9")){
        
        endGame = true;
        $("h1").text(player + "won");
    }
    
}

function diagonalWins(){
    if(match("tile1", "tile5", "tile9") ||
        match("tile3", "tile5", "tile7")){
        
        endGame = true;
        $("h1").text(player + "won");
    }
    
    
}
