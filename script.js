
// Initialization on start
window.onload = function() {

    //Entry
    document.body.style.overflow = "hidden"; 
    
    //Navigation panel
    let ref = document.getElementsByClassName("Travel");
    for (let i = 0; i < ref.length; i++) {
        ref[i].addEventListener("click", RollUp);
    }

    //Section with comments
    Comments();
    document.getElementById("Roll").addEventListener("click", RollDown);
    document.getElementById("Hill").addEventListener("click", RollUp);
    document.getElementById("Hill").style.display = "none";
    
    //Hide bottom picture ("Thanks" section)
    document.getElementById("World").style.filter= "blur(10px) sepia(1) opacity(0.2)";
    document.getElementById("World").addEventListener("click", Show); 
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
    let exist = document.getElementById("Hill").style;
    document.getElementById("Table").style.display = "block";
    document.getElementById("Roll").style.display = "none";
    if (exist.opacity == 0){
        setTimeout(RollUp, 4000);
    }
    else {
        document.getElementById("Hill").style.display = "block";
        setTimeout(RollUp, 15000);
    }
  }

// Hide navigation 
function RollUp() {
    document.getElementById("Table").style.display = "none";
    document.getElementById("Hill").style.display = "none";
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

function Show(){
    alert("This is my whole World");
    document.getElementById("World").style.filter= "blur(0) opacity(1) sepia(0.3) brightness(0.9)";
    document.getElementById("World").removeEventListener("click", Show);
}

function Open(){
    document.getElementById("Entry").style.display = "none";
    document.body.style.overflow = "auto";
}