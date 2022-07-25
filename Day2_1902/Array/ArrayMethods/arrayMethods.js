// Insert and Remove elements from end of array.

function pushAndPop(){
    var names = ['Jithin','Balraj','Shivanshu','Sachin'];
    console.log(names);
    names.push('Prajwal');
    names.push('Vishnu');
    console.log(names);

    names.pop();
    console.log(names);
}

// pushAndPop();

function unshiftAndShift(){
    let name = ['Jithin','Balraj','Shivanshu','Sachin'];
    name.unshift('Prajwal');
    name.unshift('vishnu');
    console.log(name);

    name.shift();
    console.log(name);
}
// unshiftAndShift();

function joinArrayElements(){
    var person = ['Jithin','Balraj','Shivanshu','Sachin'];
    console.log(person.join('-'));
    console.log(person.join('+'));
}
// joinArrayElements();

function mergeTwoArrays(){
    var buddies = ['Jithin','Balraj','Shivanshu','Sachin'];
    var nickName = ['Janu', 'Sonu', 'Minu'];
    var joiningArray = buddies.concat(nickName);
    console.log(joiningArray);
}
// mergeTwoArrays();

function spliceArray(){
    var cities = ['Bangalre', 'gujrat', 'pune', 'kolkata'];

    //1 - position where element needs to remove /add
    //2 - how many position need to remove
    //3 - strings which is need to add in array
    cities.splice(2,1,'delhi','pinjab');
    console.log(cities);
}
spliceArray();


