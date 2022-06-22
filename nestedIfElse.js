// nested if statement.

var age = 25;

if (age>18 && age<=21) {
    console.log("allowed to drive Scooty");
}else if(age>21 && age<=24){
    console.log("aloowed to drive bike");
}else if(age>24 ){
    console.log("allowed to drive car");
} else {
    console.log("Not eligible");
}