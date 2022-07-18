let p = new Promise((resolve,reject) => {
    let a = 3;
    if(a == 2) {
        resolve("Equal")
    } else {
        reject("Not equal")
    }
});

p.then((message) => {
    console.log("This is in then" + " "+ message);
}).catch((message) => {
    console.log("this is in catch" +" "+ message);
});
