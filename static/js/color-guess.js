const colors=[
    [255,255,255], 
    [0,255,255],
    [255,0,255],
    [255,255,0]
];

let guesses=0;
let red_hint=document.getElementById("red-hint");
let green_hint=document.getElementById("green-hint");
let blue_hint = document.getElementById("blue-hint");

function getRandomColor(){
    let color=colors[Math.floor(Math.random()*colors.length)];
    return color;
}

function displayColor(color){
    console.log(color);
    let body= document.getElementsByTagName("BODY")[0];
    body.style.backgroundColor=`rgb(${color[0]},${color[1]}, ${color[2]})`;
}


function reset(){
    color=getRandomColor();
    displayColor(color);
    document.getElementById("display").style.display="none";
    document.getElementById("submit-btn").style.display="inline";
    document.getElementById("reset-btn").style.display="none";  
}

function submit(){
    let red=document.getElementById("red").value;
    red=parseInt(red);
    let green=document.getElementById("green").value;
    green=parseInt(green);
    let blue=document.getElementById("blue").value;
    blue=parseInt(blue)


    if ( red == color[0] & green == color[1] & blue == color[2] ){
        console.log("Winner");
        document.getElementById("display").innerHTML="Winner";
        document.getElementById("display").style.display="inline"
        document.getElementById("submit-btn").style.display="none";
        document.getElementById("reset-btn").style.display="inline";  
        red_hint.style.display="none";
        green_hint.style.display="none";
        blue_hint.style.display="none";  
    }

    else{
        red_hint.style.display="inline";
        green_hint.style.display="inline";
        blue_hint.style.display="inline";
        guesses++; 

        if ( Number.isNaN(red) ){
            red_hint.innerHTML="Red no input";
        }
        else if ( red > color[0] ){
            red_hint.innerHTML="Red guess too high";
        }
        else if ( red < color[0] ){
            red_hint.innerHTML="Red guess too low";
        }
        else if ( red == color[0] ){
            red_hint.innerHTML="Red is correct!";
        }
    
    
    
        if ( Number.isNaN(green) ){
            green_hint.innerHTML="Greed no input";
        }
        else if ( green > color[1] ){
            green_hint.innerHTML="Green guess too high";
        }
        else if ( green < color[1] ){
            green_hint.innerHTML="Green guess too low";
        }
        else if ( green == color[1] ){
            green_hint.innerHTML="Green is correct!";
        }
    
    
        if ( Number.isNaN(blue) ){
            blue_hint.innerHTML="Blue no input";
        }
        else if ( blue > color[2] ){
            blue_hint.innerHTML="Blue guess too high";
        }
        else if ( blue < color[2] ){
            blue_hint.innerHTML="Blue guess too low";
        }
        else if ( blue == color[2] ){
            blue_hint.innerHTML="Blue is correct!";
        }
    }

    


}

let color=getRandomColor();
displayColor(color);
