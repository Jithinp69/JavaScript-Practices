
//to find the largest number
function forLoop(){
    nums = [2,3,6,8,10,9,50,40,22];
    largest =0;
    for(let i=0; i<nums.length; i++){
        var currentNum=nums[i];
        if(currentNum>largest){
        largest = currentNum;
        }
    } 
    console.log(largest); 
}
forLoop();

//to find the smallest number

function smallest(){
    num = [2,3,6,8,10,9,50,40,22];
    Smallest = 1000000;
    for(let i=0; i<num.length; i++){
        let tempsmall =num[i];
    
        if(tempsmall<Smallest){
            Smallest=tempsmall;
        }
    }
    console.log(Smallest);    
}
smallest();













