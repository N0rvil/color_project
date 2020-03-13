var bluehtml = document.getElementById("blue"); //propojil jsem id blue a uložil do proměné bluehtml
var greenhtml = document.getElementById("green"); //propojil jsem id green a uložil do proměné greenhtml
var redhtml = document.getElementById("red"); //propojil jsem id red a uložil do proměné redhtml
var bodyhtml = document.getElementById("body"); //propojil jsem id body a uložil do proměné bodyhtml
var red = 230;
var green = 20;
var blue = 250;
var add = true; //pokud je add true tak se hodnota červené bude zvyšovat a pokud je false tak se bude snižovat 
var add2 = true;
var add3 = true;
function redchange(){
    if (red === 255){
        add = false;
    }else if(red === 0){
        add = true;
    }
    if (add === false){
        bodyhtml.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"; //propojení proměnné bodyhtml se stylem a změní nám barvu
        redhtml.innerHTML = red; //propojení proměnné redhtml a vypisuje ji na staránce
        red--;
    }
    if (add === true){
        bodyhtml.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
        redhtml.innerHTML = red;
        red++;
    }
}
setInterval(redchange, 100);

function greenchange(){
    if (green === 255){
        add2 = false;
    }else if(green === 0){
        add2 = true;
    }
    if (add2 === false){
        bodyhtml.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"; //propojení proměnné bodyhtml se stylem a změní nám barvu
        greenhtml.innerHTML = green; //propojení proměnné redhtml a vypisuje ji na staránce
        green--;
    }
    if (add2 === true){
        bodyhtml.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
        greenhtml.innerHTML = green;
        green++;
    }
}
setInterval(greenchange, 200);

function bluechange(){
    if (blue === 255){
        add3 = false;
    }else if(blue === 0){
        add3 = true;
    }
    if (add3 === false){
        bodyhtml.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"; //propojení proměnné bodyhtml se stylem a změní nám barvu
        bluehtml.innerHTML = blue; //propojení proměnné redhtml a vypisuje ji na staránce
        blue--;
    }
    if (add3 === true){
        bodyhtml.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
        bluehtml.innerHTML = blue;
        blue++;
    }
}
setInterval(bluechange, 300);



