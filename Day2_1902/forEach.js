function forEachLoop(){
    
    num = [2,3,6,8,10,9];

    num.forEach(function(val,i,arr){
        console.log(i, val, arr);
    });
}

forEachLoop();