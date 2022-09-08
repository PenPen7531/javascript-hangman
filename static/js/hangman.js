
const words=[
    "cpp",
    "python", 
    "javascript",
    "c sharp", 
    "html", 
    "css",
    "ruby",
    "mysql",
    "java", 
    "sql"
]

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function get_random_word(){
    answer=words[Math.floor(Math.random()*words.length)];
    return answer;
};

function return_blank(answer){
    let blank="";
    for (let i=0; i<answer.length; i++){
        if (answer[i]==" "){
            blank +=" ";
            
        }
        else {
            blank += "_";
            
        }
    }
    return blank;
}


function check_answer(){
    let word=document.getElementById("word");
    let body= document.getElementsByTagName("BODY")[0];
    if (word.innerHTML==answer){
        let buttons=document.getElementsByClassName("button");
        for (let i=0; i<buttons.length; i++){

            buttons[i].style.backgroundColor="black";
            
            
            buttons[i].onclick="null";
        }
        console.log("Winner");
        word.style.backgroundColor="green";
        body.style.background="linear-gradient(green, white)";
        document.getElementById("display").innerHTML="Winner";
        document.getElementById("reset").style.display="inline";
        document.getElementById("guess-display").style.display="none";
       
    }
}

function display_figure(guesses){
    if (guesses==1){
        document.getElementById("head").style.display="inline";
    }
    if (guesses==2){
        document.getElementById("human-body").style.display="inline";
    }
    if (guesses==3){
        document.getElementById("left-arm").style.display="inline";
    }
    if (guesses==4){
        document.getElementById("right-arm").style.display="inline";
    }
    if (guesses==5){
        document.getElementById("left-leg").style.display="inline";
    };
    if (guesses==6){
        document.getElementById("right-leg").style.display="inline";
        game_over();
    };
};

function game_over(){
    let body= document.getElementsByTagName("BODY")[0];
    let buttons=document.getElementsByClassName("button");
    for (let i=0; i<buttons.length; i++){
        buttons[i].style.backgroundColor="black";
        buttons[i].onclick="null";
    }
    body.style.backgroundColor="red";
    document.getElementById("display").innerHTML=`Game Over\nCorrect Word: ${answer}`;
    document.getElementById("reset").style.display="inline";

};

function reset_game(){
    location.reload();
};

function guess(letter){
    
    let new_word="";
    let button=document.getElementById(letter);
    button.style.backgroundColor="black";
    button.onclick="null";
    let correct=false;
    guessed_letters.push(letter);
    for (let i=0; i<answer.length; i++){
        if (answer[i]==letter){
            new_word+=letter;
            correct=true;
        }
        else if (guessed_letters.includes(answer[i])){
            new_word+=answer[i];
        }
        else if (answer[i]==" "){
            new_word+=" ";
        }
        else{
            new_word+="_";
            
        }
    }
    
    if (!(correct)){
        guesses++;
        document.getElementById("guesses").innerHTML=guesses;
        display_figure(guesses);
    }
    document.getElementById("word").innerHTML=new_word;

    check_answer();

};



let guesses=0;
let guessed_letters=[]
let guesses_div=document.getElementById("guesses");
guesses_div.innerHTML=guesses;
answer=get_random_word();
blank=return_blank(answer);
const guess_function=document.getElementsByClassName("button")

console.log(answer);
document.getElementById("word").innerHTML=blank;

let clicked_buttons=[]

document.addEventListener("keydown", (event)=>{
    let key_char = event.key;
    let valid=true;
    console.log(event.keyCode);
    if (65<=event.keyCode && event.keyCode<=90){
        for (key in clicked_buttons){
        
            if (clicked_buttons[key]==key_char){
                valid=false;
            }
            
        }
        if (valid){
            guess(key_char);
            clicked_buttons.push(key_char);
        }
    }
  
    

     
}
)