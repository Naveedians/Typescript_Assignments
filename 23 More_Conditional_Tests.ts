// Equality and Inequality Test 1
console.log("Equality test with strings: ", "Apple" === "Apple");

// Equality and Inequality Test 2
console.log("Inequality test with strings:", ("Apple" as string) != "Grapes");

//Tests using the lower case function
console.log("Lower Case function test:" ,"HELLO".toLowerCase() === "hello") ; 

//Numerical tests involving equality and inequlity, greater than and less than,
console.log("Equality test with numbers:", (26 as number)===35);

//greater than test
console.log("Greater than test", 10>5);

// less than test
console.log("less than test",5<10);

//Numerical tests involving in equality
console.log("Equality test with numbers:", 10>=10)
//greater than and less than 
console.log("Greater than tests", 10 >5);

//greater than or equal to
console.log("Greater than and equal to test:", 10>=10);

//less than or equal to
console.log("less than or equal to test:", 5<=10);

//tests using "and" operator.
console.log("And operator tests: ", 5 === 5 && 10>5);
//tests using "or" operators
console.log("or operator test: " , 5 === 5 || false);

//tests whether an item is in a array
const fruits :string[]=["Mango", "Banana", "Orange"]
console.log('Test "Mango" in the array:', fruits.includes("Mango"));

//test wheter an item is not a array
console.log('Testing "Apple" is not in array:', !fruits.includes("Apple"));







