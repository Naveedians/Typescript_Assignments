//Hello admin:Make a array of five or more usernames, including the name 'admin'.
//Imagine you are writting code that will print a greeting to each user after they login into a website.
//Loop through the array , and print a greeting to each other :
//If the username is 'admin', print a special greeting,such as Assalam Alikum admin,would you like to see astatus report?
//Otherwise,print a generic greeting , such as Hello Naveed,thank you for login.


const userNames : string[] =['Admin', 'Bugs Bunny', 'Nomita','Chota Bheem','Mighty Raju'];
for(let  i=0; i < userNames.length; i++){
    if(userNames[i] ==='admin')
    {
        console.log('Assalam Alikum admin,Would you like to see a status report');
    }

else{
    console.log(`Assalam Alikum ${userNames[i]}, Thank you for logging in again.`);
}
}