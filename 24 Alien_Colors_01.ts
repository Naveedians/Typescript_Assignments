//Alien colors #01:Imagine an alien was just shot down in a game.Create a variable called alien _color 
//and assign it a value of 'green', 'yellow', or 'red'...

//create a variable called alien_color
let alien_color:string = "green";

//Write an if statement to test whether the aliens's color is green .If it is,
//print a message that the player just earned 5 points.
if(alien_color === "green") {
    console.log("Player just earned 5 points")
};
//Write one version of this program that passes the if test and another that fails.
alien_color = "yellow";

 //(The version that fails will have no output)
 if(alien_color === "green"){
    console.log("Player just earned 5 points")
 };