function continueUsage(){
    var nums = [1,2,3,4,5,6,7,8,9,10];

    for(let num of nums){
        console.log('numbers are : ',num);
        if(num % 2 != 0){
            continue;
        }
        console.log(num);
    }
}
continueUsage();