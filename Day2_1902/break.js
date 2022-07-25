function breakUsage(){
    var fruits = ['apple', 'mango', 'banana','kiwi', 'lichy'];

    var foundFruit = false
    for(var eachFruit of fruits){
        if(eachFruit === 'kiwi'){
            foundFruit = true;
            break;
        }
    }
    if(foundFruit){
        console.log('fruit is present');
    }
}
breakUsage();