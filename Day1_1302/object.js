// function objectDemo(){

// var person = {
//     fName : 'Jithin',
//     lName : 'Kotyan',
//     age : 29,
//     married : false,
//     getFullName : function() {
//         return this.fName+' '+this.lName
//     }
// };

// }
// objectDemo();

function objectsDemo() {
    var person = {
      firstName: "James",
      lastName: "Patt",
      age: 35,
      email: "james@gmail.com",
      getFullName: function () {
        console.log( this.firstName + " "+ this.lastName);
        return this.firstName + " " + this.lastName;
      },
    };
    console.log(person.getFullName());
  }
  objectsDemo();