let turn=0;
let spot1=document.getElementById("1");
let spot2=document.getElementById("2");
let spot3=document.getElementById("3");
let spot4=document.getElementById("4");
let spot5=document.getElementById("5");
let spot6=document.getElementById("6");
let spot7=document.getElementById("7");
let spot8=document.getElementById("8");
let spot9=document.getElementById("9");

function play(spot){
    if (turn%2==0){
        if (document.getElementById(spot).innerHTML==""){
            document.getElementById(spot).innerHTML="X";
            turn++;
            document.getElementById("turn").innerHTML="O";
            check();
        }
    }
    else if (turn%2==1){
        if (document.getElementById(spot).innerHTML==""){
            document.getElementById(spot).innerHTML="O";
            turn++;
            document.getElementById("turn").innerHTML="X";
            check();
        }
    }
}

function check(){
    if (spot1.innerHTML=="X" & spot2.innerHTML=="X" & spot3.innerHTML=="X"){
        spot1.style.backgroundColor="green";
        spot2.style.backgroundColor="green";
        spot3.style.backgroundColor="green";
        console.log("winner X");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="X";
        document.getElementById("x-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }
    else if (spot1.innerHTML=="O" & spot2.innerHTML=="O" & spot3.innerHTML=="O"){
        spot1.style.backgroundColor="green";
        spot2.style.backgroundColor="green";
        spot3.style.backgroundColor="green";
        console.log("winner O");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="O";
        document.getElementById("o-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }
    else if (spot4.innerHTML=="X" & spot5.innerHTML=="X" & spot6.innerHTML=="X"){
        spot4.style.backgroundColor="green";
        spot5.style.backgroundColor="green";
        spot6.style.backgroundColor="green";
        console.log("winner X");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="X";
        document.getElementById("x-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }
    else if (spot4.innerHTML=="O" & spot5.innerHTML=="O" & spot6.innerHTML=="O"){
        spot4.style.backgroundColor="green";
        spot5.style.backgroundColor="green";
        spot6.style.backgroundColor="green";
        console.log("winner O");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="O";
        document.getElementById("o-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }
    else if (spot7.innerHTML=="X" & spot8.innerHTML=="X" & spot9.innerHTML=="X"){
        spot7.style.backgroundColor="green";
        spot8.style.backgroundColor="green";
        spot9.style.backgroundColor="green";
        console.log("winner X");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="X";
        document.getElementById("x-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }
    else if (spot7.innerHTML=="O" & spot8.innerHTML=="O" & spot9.innerHTML=="O"){
        spot7.style.backgroundColor="green";
        spot8.style.backgroundColor="green";
        spot9.style.backgroundColor="green";
        console.log("winner O");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="O";
        document.getElementById("o-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }
    else if (spot1.innerHTML=="X" & spot4.innerHTML=="X" & spot7.innerHTML=="X"){
        spot1.style.backgroundColor="green";
        spot4.style.backgroundColor="green";
        spot7.style.backgroundColor="green";
        console.log("winner X");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="X";
        document.getElementById("x-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }
    else if (spot1.innerHTML=="O" & spot4.innerHTML=="O" & spot7.innerHTML=="O"){
        spot1.style.backgroundColor="green";
        spot4.style.backgroundColor="green";
        spot7.style.backgroundColor="green";
        console.log("winner O");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="O";
        document.getElementById("o-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }
    else if (spot2.innerHTML=="X" & spot5.innerHTML=="X" & spot8.innerHTML=="X"){
        spot2.style.backgroundColor="green";
        spot5.style.backgroundColor="green";
        spot8.style.backgroundColor="green";
        console.log("winner X");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="X";
        document.getElementById("x-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }
    else if (spot2.innerHTML=="O" & spot5.innerHTML=="O" & spot8.innerHTML=="O"){
        spot2.style.backgroundColor="green";
        spot5.style.backgroundColor="green";
        spot8.style.backgroundColor="green";
        console.log("winner O");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="O";
        document.getElementById("o-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }
    else if (spot3.innerHTML=="X" & spot6.innerHTML=="X" & spot9.innerHTML=="X"){
        spot3.style.backgroundColor="green";
        spot6.style.backgroundColor="green";
        spot9.style.backgroundColor="green";
        console.log("winner X");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="X";
        document.getElementById("x-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }
    else if (spot3.innerHTML=="O" & spot6.innerHTML=="O" & spot9.innerHTML=="O"){
        spot3.style.backgroundColor="green";
        spot6.style.backgroundColor="green";
        spot9.style.backgroundColor="green";
        console.log("winner O");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="O";
        document.getElementById("o-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }
    else if (spot1.innerHTML=="X" & spot5.innerHTML=="X" & spot9.innerHTML=="X"){
        spot1.style.backgroundColor="green";
        spot5.style.backgroundColor="green";
        spot9.style.backgroundColor="green";
        console.log("winner X");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="X";
        document.getElementById("x-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }
    else if (spot1.innerHTML=="O" & spot5.innerHTML=="O" & spot9.innerHTML=="O"){
        spot1.style.backgroundColor="green";
        spot5.style.backgroundColor="green";
        spot9.style.backgroundColor="green";
        console.log("winner O");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="O";
        document.getElementById("o-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }
    else if (spot3.innerHTML=="X" & spot5.innerHTML=="X" & spot7.innerHTML=="X"){
        spot3.style.backgroundColor="green";
        spot5.style.backgroundColor="green";
        spot7.style.backgroundColor="green";
        console.log("winner X");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="X";
        document.getElementById("x-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }
    else if (spot3.innerHTML=="O" & spot5.innerHTML=="O" & spot7.innerHTML=="O"){
        spot3.style.backgroundColor="green";
        spot5.style.backgroundColor="green";
        spot7.style.backgroundColor="green";
        console.log("winner O");
        document.getElementById("reset").style.display="inline";
        document.getElementById("winner-h2").style.display="block";
        document.getElementById("winner").innerHTML="O";
        document.getElementById("o-score").innerHTML++;
        document.getElementById("turn-display").style.display="none";
    }   
    else if (spot1.innerHTML!="" & spot2.innerHTML!="" & spot3.innerHTML!="" % spot4.innerHTML!="" & spot5.innerHTML!="" & spot6.innerHTML!="" & spot7.innerHTML!="" & spot8.innerHTML!="" & spot9.innerHTML!=""){
        document.getElementById("reset").style.display="inline";
        document.getElementById("tie").style.display="block";
        let boxes=document.getElementsByClassName("box");
        document.getElementById("turn-display").style.display="none";
        for (let i=0; i<boxes.length; i++){
            boxes[i].style.backgroundColor="red";
    }
    }
}

function reset(){
    let boxes=document.getElementsByClassName("box");
    for (let i=0; i<boxes.length; i++){
        boxes[i].innerHTML="";
        boxes[i].style.backgroundColor="grey";
    }
    document.getElementById("reset").style.display="none";
    document.getElementById("turn").innerHTML="X"
    document.getElementById("winner-h2").style.display="none";
    turn=0;
    document.getElementById("tie").style.display="none";
    document.getElementById("turn-display").style.display="block";
}