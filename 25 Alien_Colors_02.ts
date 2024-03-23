// Alien Colors 02:Choose a color for an alien as you did in exercise 25, 
let alienColors:string="green";

//write an if-else chain
//If the alien's color is green.
//print a statement that the player just earned 5 points for the alien.
if(alienColors === "green"){
console.log('Player just earned 5 points for shooting the alien.');
}else{
    console.log('Player just earned 10 points.')
}
//If the alien's colors isnot green,print a statement that the player just earned 10 points.
alienColors = "Black";
if(alienColors === "green"){
    console.log('Player just earned 5 points for shooting the alien.');
    }else{
        console.log('Player just earned 10 points.')
    }