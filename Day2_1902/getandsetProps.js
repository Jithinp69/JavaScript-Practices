function getProps(){

    var shape ={
        name: 'squre',
        length: 20,
        width: 20,
        get area(){
            return this.length*this.width;
        }
    };
    console.log("Shape of object is: ", shape);
    console.log(shape.area);
}
// getProps();

function setProps(){
    let shape ={
        length:'',
        breadth:10,

        set _length(customLength){
                if(customLength<=0){
                   return;
                   console.log('Negetive integer');
                } 
                this.length = customLength;        
        },
        get area(){
            return this.breadth*this.length
        }
    };
    shape._length = -12;

    console.log(shape.area);
}
// setProps();


function multiply(num1, num2, num3){
    console.log(num1*num2*num3);
}
let num = [1,2,3]
multiply(...num);
console.log(...num);

