
let Guest_List: string[ ] =['Shahid Afridi','MS Dhoni','AB Devilliers'];
// for(let i=0;i<Guest_List.length;i++){
   // console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you my dinner party.\n\nThank You!.\n\n');
// }
let absent_Guest: string = 'MS Dhoni';
let new_Guest :string=  'Sachin Tendulkar';
Guest_List[1]=new_Guest;

for(let i=0;i<Guest_List.length;i++){ console.log('Dear Mr. '
 + Guest_List[i] + ',\n\nIt is our pleasure to invite you my dinner party.\n\nThank You!.');
}
console.log(`Mr. ${absent_Guest} is not coming to the party`)
console.log('Good News! We find new big table so we are inviting 3 more guests.')
Guest_List.unshift('Virat Kohli');
Guest_List.splice(2,0,'Misbah_ul_Haq');
Guest_List.push('Kumar Sangakara');
for(let i=0;i<Guest_List.length;i++){
    console.log('Dear Mr.' + Guest_List[i] + ',\n\nIt is our pleasure to invite you my dinner party.\n\nThank You!.')
}
