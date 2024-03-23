// Name Cases: Store a person's name in a variable, and then print that person's name in lowercase, UPPERCASE, TitleCase.
let personName: string = '';
personName = prompt('What is your name?') || '';
let lowercase: string = personName.toLowerCase();
let uppercase: string = personName.toUpperCase();
let titlecase: string = personName
  .split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

if (personName !== null && personName !== '') {
  alert(`Assaalam Alikum ${personName}, Here are your name in:
LowerCase: ${lowercase}
UpperCase: ${uppercase}
TitleCase: ${titlecase}`);
} else {
  alert('Please fill your name!');
}