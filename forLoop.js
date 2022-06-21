let sum = 0;

for(let i=0; i<10; i++){
    //i=0 -> initialization
    //i<100 -> condition
    //i++ -> increment
    var reminder = i%2;
    if(reminder>0){
        console.log(i);
        sum = sum + i;
        console.log(sum);  
    }
}
