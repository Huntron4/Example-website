
// Initialization on start
window.onload = function() {
    let ref = document.getElementsByClassName("Travel");
    for (let i = 0; i < ref.length; i++) {
        ref[i].addEventListener("click", RollUp);
    }
    Comments();
    document.getElementById("Roll").addEventListener("click", RollDown);      //onclick="RollDown()"
    document.querySelector("Hill").addEventListener("click", RollUp);
}

// NSFW left button handling function
function FireMe(){
    let act = document.getElementById("Fired").textContent;

    if (act == "I want to be fired"){
        alert("Really?");
        document.getElementById("Fired").textContent = "Really!";
    }
    else if (act == "Really!"){
        alert("Are you sure?");
        document.getElementById("Fired").textContent = "Absolutelly!";
    }
    else if (act == "Absolutelly!"){
        alert("You shouldn't...");
        document.getElementById("Fired").textContent = "Sh*t up and give it to me";
    }
    else if (act == "Sh*t up and give it to me"){
        alert("You little pervert");
        document.getElementById("NSFW").style.display = "none";
        document.getElementById("is").style.display = "none";
        document.getElementById("Unicorn").style.display = "block";
    }
}

// NSFW right button handling function
function Erase(){
    alert("Good job :) ");
    document.getElementById("NSFW").style.display = "none";
    document.getElementById("is").style.display = "none";
}

// Show navigation 
function RollDown() {
    let exist = document.querySelector(".Menu ul::after");
    document.getElementById("Table").style.display = "block";
    document.getElementById("Roll").style.display = "none";
    if (!exist){
        setTimeout(RollUp, 4000);
    }
    else {
        setTimeout(RollUp, 15000);
    }
  }

// Hide navigation 
function RollUp() {
    document.getElementById("Table").style.display = "none";
    document.getElementById("Roll").style.display = "block";
}

// Recommendations section, quote switcher
setInterval(Comments, 4000)
function Comments(){
    let one = document.getElementById("com1").style.display;
    let two = document.getElementById("com2").style.display;
    let tree = document.getElementById("com3").style.display;
    if (one == "grid"){
        document.getElementById("com1").style.display = "none";
        document.getElementById("com2").style.display = "grid";
    }
    else if (two == "grid"){
        document.getElementById("com2").style.display = "none";
        document.getElementById("com3").style.display = "grid";
    }
    else if (tree == "grid"){
        document.getElementById("com3").style.display = "none";
        document.getElementById("com1").style.display = "grid";
    }
    else {
        document.getElementById("com1").style.display = "grid";
        document.getElementById("com2").style.display = "none";
        document.getElementById("com3").style.display = "none";
    }
}

// "Return function" ;D
function Jump(){
    alert("BINGO!");
    setTimeout(function(){
        document.getElementById("NSFW").style.display = "block";
        document.getElementById("Unicorn").style.display = "none";
    }, 100);
    
}