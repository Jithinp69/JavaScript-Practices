
function forInForObject(){
    const person = {
        fname : 'Jithin',
        lname : 'Kotyan',
        age : 29,
        email : 'jithinp69@gmail.com'
    }

    for(var key in person){
        let value = person[key];
        console.log("Key :", key , "Value :",value);
    }
}
forInForObject();