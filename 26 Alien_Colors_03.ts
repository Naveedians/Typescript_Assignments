//Alien Coolors 03:Turn your if-else chain from Exercise 5-4 into an if-else chain.
//Write three versions of this program,making sure each message is printed for the appropriate color alien.


//Version 1
let alienColors: string ="green";
//If the alien is green, print a message that the player earned 5 points.
if(alienColors === 'green'){
    console.log("player earned 5 points.");
}
//If the alien is yellow,print a message that the player earned 10 points.
else if(alienColors === "yellow"){
    console.log("player earned 10 points.");
}
//If the alien is red,print a message that the player earned 15 points.
else if(alienColors === "red"){
    console.log("player earned 15 points");
}
else{
    console.log("Please select right color")
}


//Version 02
alienColors ="yellow"
//If the alien is green, print a message that the player earned 5 points.
if(alienColors === 'green'){
    console.log("player earned 5 points.");
}
//If the alien is yellow,print a message that the player earned 10 points.
else if(alienColors === "yellow"){
    console.log("player earned 10 points.");
}
//If the alien is red,print a message that the player earned 15 points.
else if(alienColors === "red"){
    console.log("player earned 15 points");
}
else{
    console.log("Please select right color")
}

//Version 03
alienColors ="red"
//If the alien is green, print a message that the player earned 5 points.
if(alienColors === 'green'){
    console.log("player earned 5 points.");
}
//If the alien is yellow,print a message that the player earned 10 points.
else if(alienColors === "yellow"){
    console.log("player earned 10 points.");
}
//If the alien is red,print a message that the player earned 15 points.
else if(alienColors === "red"){
    console.log("player earned 15 points");
}
else{
    console.log("Please select right color")
}