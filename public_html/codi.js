/* 
Tasca 1
 */
var game= new Array(30);

for (var i = 0; i < game.length; i++) {
  game[i] = new Array(30);
}

newTaula();

function newTaula(){
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
}

var fant1= new Array();
fant1["car"]="f";
ubi=ubiRand();
fant1["i"]=ubi[0];
fant1["e"]=ubi[1];
//fant1["direccio"]="right";
direRand(fant1);

var fant2= new Array();
fant2["car"]="f";
ubi=ubiRand();
fant2["i"]=ubi[0];
fant2["e"]=ubi[1];
//fant2["direccio"]="down";
direRand(fant2);

var fant3= new Array();
fant3["car"]="f";
ubi=ubiRand();
fant3["i"]=ubi[0];
fant3["e"]=ubi[1];
//fant3["direccio"]="right";
direRand(fant3);

var jugador= new Array();
jugador["car"]="j";
ubi=ubiRand();
jugador["i"]=ubi[0];
jugador["e"]=ubi[1];
//jugador["direccio"]="up";
direRand(jugador);
jugador["direccioDes"]="up";

//Ubiquem els fantasmes i el jugador al taule
setUbi(fant1);
setUbi(fant2);
setUbi(fant3);
setUbi(jugador);

//Creacio dels fantasmes y jugador
//FUNCIONS
//Funcio per donar les cordenades del tauler de manera aleatoria
function ubiRand(){
    do{
        x = Math.round(Math.random()*29);
        y = Math.round(Math.random()*29);
    }while (game[x][y]!==0);
    
    return [x,y];
}
//Funcio per ubicar la array introduida al tauler
function setUbi(item){
    game[item["i"]][item["e"]]=item["car"];
}

function setUbiRand(item){
    ubi=ubiRand();
    
    item["i"]=ubi[0];
    item["e"]=ubi[1];
    
    setUbi[item];
}
//Funcio per establir la direccio de manera aleatoria
function direRand(item){
    
    var set=false;
    
    do{
        var num = Math.round(Math.random()*3);
        switch (num) {
            case 0:
                if (game[item["i"]-1][item["e"]]===0){
                    set=true;
                }
                else {
                    set=false;
                }
            break;
            case 1:
                if (game[item["i"]+1][item["e"]]===0){
                    set=true;
                }
                else {
                    set=false;
                }
            break;
            case 2:
                if (game[item["i"]][item["e"]+1]===0){
                    set=true;
                }
                else {
                    set=false;
                }
            break;
            case 3:
                if (game[item["i"]][item["e"]-1]===0){
                    set=true;
                }
                else {
                    set=false;
                }
            break;
        }
    }while (set!==true);
    
    switch (num) {
            case 0:
                item["direccio"]="up";
                break;
            case 1:
                item["direccio"]="down";
                break;
            case 2:
                item["direccio"]="right";
                break;
            case 3:
                item["direccio"]="left";
                break;
    }
}

function movItem(item){
    if (game[item["i"]-1][item["e"]]===0 && game[item["i"]+1][item["e"]]===0 && game[item["i"]][item["e"]-1]===0 && game[item["i"]][item["e"]+1]===0 ){
        direRand(item);
    }
    else {
        switch (item["direccio"]) {
                case "up":
                    if (game[item["i"]-1][item["e"]]!==0){
                        direRand(item);
                    }
                    else {
                        item["direccio"]="up";
                    }
                    break;
                case "down":
                    if (game[item["i"]+1][item["e"]]!==0){
                        direRand(item);
                    }
                    else {
                        item["direccio"]="down";
                    }
                    break;
                case "right":
                    if (game[item["i"]][item["e"]+1]!==0){
                        direRand(item);
                    }
                    else {
                        item["direccio"]="right";
                    }
                    break;
                case "left":
                    if (game[item["i"]][item["e"]-1]!==0){
                        direRand(item);
                    }
                    else {
                        item["direccio"]="left";
                    }
                    break;
        }
    }
    
    switch (item["direccio"]){
        case "up":
           item["i"]=item["i"]-1;
           item["e"]=item["e"];
           break;
        case "down":
           item["i"]=item["i"]+1;
           item["e"]=item["e"];
           break;
        case "right":
           item["i"]=item["i"];
           item["e"]=item["e"]+1;
           break;
        case "left":
           item["i"]=item["i"];
           item["e"]=item["e"]-1;
           break;
    }
}

function iniciar(){
    crear=setInterval(createTaula,1000);
}
    
function createTaula(){
    taula="";
    
    newTaula();
    
    movItem(fant1);
    setUbi(fant1);
    movItem(fant2);
    setUbi(fant2);
    movItem(fant3);
    setUbi(fant3);
    movItem(jugador);
    setUbi(jugador);
    
    for (i=0; i<game.length; i++){
        taula=taula+"<br />";
        for (e=0; e<game[i].length; e++){
            if(game[i][e]==="f" || game[i][e]==="j"){
                taula=taula+"<b>"+game[i][e]+"</b> ";
            }
            else {
                taula=taula+game[i][e]+" ";
            }
        }
   }
   
   log="";
   
   /*log=log+"<br />"+fant1["i"]+"|"+fant1["e"]+"<br />"+fant2["i"]+"|"+fant2["e"]+"<br />"+fant3["i"]+"|"+fant3["e"]+"<br />"+jugador["i"]+"|"+jugador["e"];*/
    log=log+print_r(fant1)+"<br />";
    log=log+print_r(fant2)+"<br />";
    log=log+print_r(fant3)+"<br />";
    log=log+print_r(jugador)+"<br />";
   document.getElementById("view").innerHTML =taula;
   document.getElementById("log").innerHTML =log;
}

function print_r(arr,level) {
  var dumped_text = "(";
  if(!level) level = 0;
  var level_padding = "";
  for(var j=0;j<level+1;j++) level_padding += "    ";
    if(typeof(arr) == 'object') { //Array/Hashes/Objects 
      for(var item in arr) {
        var value = arr[item];
        if(typeof(value) == 'object') { //If it is an array,
          dumped_text += level_padding + "'" + item + "' ...\n";
          dumped_text += print_r(value,level+1);
        } else {
          dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
        }
      }
    } else { //Stings/Chars/Numbers etc.
    dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
  }
  dumped_text=dumped_text+")"+arr.length;
  return dumped_text;
}