
let Guest_List: string[] = ['Shahid Afridi', 'MS Dhoni', 'AB Devilliers'];

let absent_Guest: string = 'MS Dhoni';
let new_Guest: string = 'Sachin Tendulkar';
Guest_List[1] = new_Guest;

//for(let i=0;i<Guest_List.length;i++){ console.log('Dear Mr. '
//+ Guest_List[i] + ',\n\nIt is our pleasure to invite you my dinner party.\n\nThank You!.');
//}
// console.log(`Mr. ${absent_Guest} is not coming to the party`)
//console.log('Good News! We find new big table so we are inviting 3 more guests.')
//is code me 3 guest ko add kiya hai.
Guest_List.unshift('Virat Kohli');
Guest_List.splice(2, 0, 'Misbah_ul_Haq');
Guest_List.push('Kumar Sangakara');

//is code me hum ne six guest k array ko print karaya hai.
//for (let i = 0; i < Guest_List.length; i++) {
   // console.log('Dear Mr.' + Guest_List[i] + ',\n\nIt is our pleasure to invite you my dinner party.\n\nThank You!.')
//}

//Sorry Message to gest for inviting.
// console.log('\nSorry we can not arrange big table,Only two people will be invited.');
//is code me hum ne guest ko remove kia hai.

 while (Guest_List.length > 2) {
   let removed_Guest: string = Guest_List.pop()!;
   // console.log(`Sorry Mr. ${removed_Guest} you are not invited for dinner.`)
 }

// for (let i = 0; i < Guest_List.length; i++) { // console.log('Dear Mr.' + Guest_List[i] + ',\n\n You are still invited.\n\nThank You!.')
// }

//is code me hum ne sary guest remove kardiye..
Guest_List.splice(0,2);
console.log(Guest_List);

//Exercise 19
//Print a message indicating the number of people you are inviting to dinner..
console.log(`Total number of Guest are: ${Guest_List.length}`)