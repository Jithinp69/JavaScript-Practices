// const jsonData = '{
//     "name" : "jithin",
//     "age" : 29
// }';

// const jsonData = '{"name" : "jithin", "age":29}'

// const obj = JSON.parse(jsonData);
// console.log(jsonData.name); 

let beans = 'peanut';

function shoutbeans(){
    let beans = 'green';

    return function(){
        let beans = 'red';
        console.log(beans.toUpperCase());
    };
}
 
let loudBeans = shoutbeans();
loudBeans();

let numberOfBagels =5;

function eatBagel(numberOfBagels) {
    numberOfBagels -= 1;
    // console.log(numberOfBagels);
    if(numberOfBagels === 0){
        console.log("oh no out of bagels");
    } else {
        console.log(`yummy, there are ${numberOfBagels} left`);
    }

    console.log(numberOfBagels);
    
}

eatBagel(numberOfBagels);
eatBagel(numberOfBagels);
console.log(numberOfBagels);
