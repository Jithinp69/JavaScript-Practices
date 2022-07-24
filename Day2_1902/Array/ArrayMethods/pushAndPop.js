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
unshiftAndShift();