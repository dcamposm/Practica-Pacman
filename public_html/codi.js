/* 
Tasca 1
 */
var game= new Array(30);

for (var i = 0; i < game.length; i++) {
  game[i] = new Array(30);
}

//Tauler
//        0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9
game[0]= [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
game[1]= [1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1];
game[2]= [1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1];
game[3]= [1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1];
game[4]= [1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1];
game[5]= [1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1];
game[6]= [1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1];
game[7]= [1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1];
game[8]= [1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1];
game[9]= [1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1];
game[10]=[1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1];
game[11]=[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
game[12]=[1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1];
game[13]=[1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1];
game[14]=[1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1];
game[15]=[1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1];
game[16]=[1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1];
game[17]=[1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1];
game[18]=[1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1];
game[19]=[1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1];
game[20]=[1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1];
game[21]=[1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1];
game[22]=[1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
game[23]=[1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1];
game[24]=[1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1];
game[25]=[1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1];
game[26]=[1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1];
game[27]=[1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1];
game[28]=[1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1];
game[29]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var fant1= new Array();
fant1["car"]="f";
var ubi=ubiRand();
fant1["i"]=ubi[0];
fant2["e"]=ubi[1];
fant1["direccio"]="right";
var fant2= new Array();
fant2["car"]="f";
fant2["i"]=2;
fant2["e"]=1;
fant2["direccio"]="down";
var fant3= new Array();
fant3["car"]="f";
fant3["i"]=5;
fant3["e"]=1;
fant3["direccio"]="right";
var jugador= new Array();
jugador["car"]="f";
jugador["i"]=28;
jugador["e"]=1;
jugador["direccio"]="up";
jugador["direccioDes"]="up";

function ubiRand(){
    do{
        var x = Math.round(Math.random()*29);
        var y = Math.round(Math.random()*29);
    }while (game[x][y]===1);
    
    return [x,y];
}