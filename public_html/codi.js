/* 
Tasca 1
 */
/* global e */

var game= new Array(30);

for (var i = 0; i < game.length; i++) {
  game[i] = new Array(30);
}
//Funcio per crear la taula
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

//Arrays dels fantasmes i el jugador amb les seves caracteristiques
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
jugador["direccioDes"]="";

//Ubiquem els fantasmes i el jugador al taule
setUbi(fant1);
setUbi(fant2);
setUbi(fant3);
setUbi(jugador);

//Variables per la puntuacio i la cookie on se guardara la ountuacio final
punts=0;
maxActP=0;

if (getCookie("maxP")===""){
   document.cookie = "maxP=0"; 
}

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

//Funcio per indicar a quina direccio es moura els fantasmes i el jugador
function movItem(item){
    //Primer es comprova si estan en una difurcacio
    creu=0;
    
    if(game[item["i"]-1][item["e"]]===0){
        creu++;
    }
    if(game[item["i"]+1][item["e"]]===0){
        creu++;
    }
    if(game[item["i"]][item["e"]+1]===0){
        creu++;
    }
    if(game[item["i"]-1][item["e"]-1]===0){
        creu++;
    }
    //En cas que estan en una, s'eligira una direccio aleatoria. Menys el jugador si te assignat una direccio donada per el teclat.
    if (creu>2){
        if (item["car"]==="j" && item["direccioDes"]!==""){
            item["direccio"]=item["direccioDes"];
        }
        else{
            direRand(item); 
        }
    }
    //En cas que no, es comprovara si en la direccio on van hi ha una paret o no, o en el cas del jugador si te assignat una direccio donada per el teclat.
    else {
        switch (item["direccio"]) {
                case "up":
                    if (item["car"]==="j"){
                        if (game[item["i"]][item["e"]]==="f"){
                            lose();
                        }
                        else {
                            if (game[item["i"]-1][item["e"]]===1){
                                if (item["direccioDes"]!==""){
                                    item["direccio"]=item["direccioDes"];
                                    item["direccioDes"]="";
                                }
                                else{
                                    direRand(item);
                                }
                            }
                            else {
                                if (item["direccioDes"]!=="" && item["direccioDes"]!=="up"){
                                    if (provMovDes()==="true"){
                                        item["direccio"]=item["direccioDes"];
                                        item["direccioDes"]="";
                                    }
                                    else {
                                       item["direccio"]="up"; 
                                    }
                                }
                                else{
                                    item["direccio"]="up";
                                }
                            }
                        }
                    }
                    else {
                        if (game[item["i"]][item["e"]]==="j"){
                            lose();
                        }
                        else{
                            if (game[item["i"]-1][item["e"]]!==0 && game[item["i"]-1][item["e"]]!=="j"){
                                direRand(item);
                            }
                            else {
                                item["direccio"]="up";
                            }
                        }
                    }
                    break;
                case "down":
                    if (item["car"]==="j"){
                        if (game[item["i"]][item["e"]]==="f"){
                            lose();
                        }
                        else {
                            if (game[item["i"]+1][item["e"]]===1){
                                if (item["direccioDes"]!==""){
                                    item["direccio"]=item["direccioDes"];
                                    item["direccioDes"]="";
                                }
                                else{
                                    direRand(item);
                                }
                            }
                            else {
                                if (item["direccioDes"]!=="" && item["direccioDes"]!=="down"){
                                    if (provMovDes()==="true"){
                                        item["direccio"]=item["direccioDes"];
                                        item["direccioDes"]="";
                                    }
                                    else {
                                       item["direccio"]="down"; 
                                    }
                                }
                                else{
                                    item["direccio"]="down";
                                }
                            }
                        }
                    }
                    else {
                        if (game[item["i"]][item["e"]]==="j"){
                            lose();
                        }
                        else{
                            if (game[item["i"]+1][item["e"]]!==0 && game[item["i"]+1][item["e"]]!=="j"){
                                direRand(item);
                            }
                            else {
                                item["direccio"]="down";
                            }
                        }
                    }
                    break;
                case "right":
                    if (item["car"]==="j"){
                        if (game[item["i"]][item["e"]]==="f"){
                            lose();
                        }
                        else {
                            if (game[item["i"]][item["e"]+1]===1){
                                if (item["direccioDes"]!==""){
                                    item["direccio"]=item["direccioDes"];
                                    item["direccioDes"]="";
                                }
                                else{
                                    direRand(item);
                                }
                            }
                            else {
                                if (item["direccioDes"]!=="" && item["direccioDes"]!=="right"){
                                    if (provMovDes()==="true"){
                                        item["direccio"]=item["direccioDes"];
                                        item["direccioDes"]="";
                                    }
                                    else {
                                       item["direccio"]="right"; 
                                    }
                                }
                                else{
                                    item["direccio"]="right";
                                }                         
                            }
                        }
                    }
                    else {
                        if (game[item["i"]][item["e"]]==="j"){
                            lose();
                        }
                        else{
                            if (game[item["i"]][item["e"]+1]!==0 && game[item["i"]][item["e"]+1]!=="j"){
                                direRand(item);
                            }
                            else {
                                item["direccio"]="right";
                            }
                        }
                    }
                    break;
                case "left":
                    if (item["car"]==="j"){
                        if (game[item["i"]][item["e"]]==="f"){
                            lose();
                        }
                        else {
                            if (game[item["i"]][item["e"]-1]===1){
                                if (item["direccioDes"]!==""){
                                    item["direccio"]=item["direccioDes"];
                                    item["direccioDes"]="";
                                }
                                else{
                                    direRand(item);
                                }
                            }
                            else {
                                if (item["direccioDes"]!=="" && item["direccioDes"]!=="left"){
                                    if (provMovDes()==="true"){
                                        item["direccio"]=item["direccioDes"];
                                        item["direccioDes"]="";
                                    }
                                    else {
                                       item["direccio"]="left"; 
                                    }
                                }
                                else{
                                    item["direccio"]="left";
                                }                         
                            }
                        }
                    }
                    else {
                        if (game[item["i"]][item["e"]]==="j"){
                            lose();
                        }
                        else{
                            if (game[item["i"]][item["e"]-1]!==0 && game[item["i"]][item["e"]-1]!=="j"){
                                direRand(item);
                            }
                            else {
                                item["direccio"]="left";
                            }
                        }
                    }
                    break;
        }
    }
    //Una vegada ja te assignat la direccio on es mouran, canviara la seva cordenada en la array i posant en la posicio on estavan un espai vuit.
    switch (item["direccio"]){
        case "up":
           game[item["i"]][item["e"]]=0;
           item["i"]=item["i"]-1;
           break;
        case "down":
           game[item["i"]][item["e"]]=0;
           item["i"]=item["i"]+1;
           break;
        case "right":
           game[item["i"]][item["e"]]=0;
           item["e"]=item["e"]+1;
           break;
        case "left":
           game[item["i"]][item["e"]]=0;
           item["e"]=item["e"]-1;
           break;
    }
}
//Funcio per saber quina direccio vol el jugador, donada per teclat
function movJugador(e){
    if (e.key==="ArrowUp") {
        jugador["direccioDes"]="up";
    }
    else if (e.key==="ArrowDown") {
        jugador["direccioDes"]="down";
    }
    else if (e.key==="ArrowRight") {
        jugador["direccioDes"]="right";
    }
    else if (e.key==="ArrowLeft") {
        jugador["direccioDes"]="left";
    }
}
//Funcio que comprova si la direccio que vol anar el jugador hi ha una paret o no.
function provMovDes(){
    switch (jugador["direccioDes"]){
        case "up":
           if (game[jugador["i"]-1][jugador["e"]]===0){
               return "true";
           }
           else {
               return "false";
           }
           break;
        case "down":
           if (game[jugador["i"]+1][jugador["e"]]===0){
               return "true";
           }
           else {
               return "false";
           }
           break;
        case "right":
           if (game[jugador["i"]][jugador["e"]+1]===0){
               return "true";
           }
           else {
               return "false";
           }
           break;
        case "left":
           if (game[jugador["i"]][jugador["e"]-1]===0){
               return "true";
           }
           else {
               return "false";
           }
           break;
    }
}
//Funcio que s'executa quan guanyas
function win(){
    alert("HAS GUANYAT");
    
    maxActP=maxActP+punts;
    
    if (getCookie("maxP")<maxActP){
        document.cookie="maxP="+maxActP;
    }
    reset();
}
//Funcio que s'executa quan perds
function lose(){
    alert("HAS MUERTO");
    
    maxActP=maxActP+punts;
    
    if (getCookie("maxP")<maxActP){
        document.cookie="maxP="+maxActP;
    }
    maxActP=0;
    reset();
}
//Funciones per els botons del html
function iniciar(){
    crear=setInterval(createTaula,1000);
}
function stop(){
    clearInterval(crear);
}
function reset(){
    stop();
    
    newTaula();
    
    ubi=ubiRand();
    fant1["i"]=ubi[0];
    fant1["e"]=ubi[1];
    direRand(fant1);
    setUbi(fant1);
    
    ubi=ubiRand();
    fant2["i"]=ubi[0];
    fant2["e"]=ubi[1];
    direRand(fant2);
    setUbi(fant2);
    
    ubi=ubiRand();
    fant3["i"]=ubi[0];
    fant3["e"]=ubi[1];
    direRand(fant3);
    setUbi(fant3);
    
    ubi=ubiRand();
    jugador["i"]=ubi[0];
    jugador["e"]=ubi[1];
    direRand(jugador);
    setUbi(jugador);
    
    punts=0;
    
    iniciar();
}
//Funcion que imprimeix la taula en el html
function createTaula(){
    if (punts<50){
        var taula = document.getElementById("view");
        var ctx = taula.getContext("2d");
        var img;

        //newTaula();

        movItem(fant1);
        setUbi(fant1);
        movItem(fant2);
        setUbi(fant2);
        movItem(fant3);
        setUbi(fant3);
        movItem(jugador);
        setUbi(jugador);

        punts++;

        for (i=0; i<game.length; i++){
            for (e=0; e<game[i].length; e++){
                if(game[i][e]==="f"){
                    img = document.getElementById("fant");
                }
                else if (game[i][e]==="j") {
                    img = document.getElementById("pacman");
                }
                else if (game[i][e]===1) {
                    img = document.getElementById("pared");
                }
                else {
                    img = document.getElementById("res");
                }

                ctx.drawImage(img, e*23, i*23, 20, 20);
            }
       }

       log="Log<br>";

       logPunts="<b>PuntsMax:</b> "+getCookie("maxP")+" <b>PuntsActuals: </b>"+punts;

       log=log+print_r(fant1)+"<br />";
        log=log+print_r(fant2)+"<br />";
        log=log+print_r(fant3)+"<br />";
        log=log+print_r(jugador)+"<br />";
       document.getElementById("log").innerHTML =log;
       document.getElementById("punt").innerHTML =logPunts;
   }
   
   else{
       win();
   }
}
//Funcio per imprimir una array
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
//Funcio per donar el valor d'una cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}