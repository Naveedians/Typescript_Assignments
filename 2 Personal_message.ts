 //Personal Message: Stoere a person's name in a variable, and print amessage to that person.
 //Your message should be simple, such as,"Hello Naveed, would you like to learn some Python today?"

let personName :string = '';
personName = prompt("What is your name?") || '';
if (personName !== null && personName !== '')
{
    alert(`Hello ${personName}, would you like to learn some python today`)
}
else{
    alert("You have fill your name!")
}