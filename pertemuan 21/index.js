//Array

//let names = ["John", "Mark", "Jane"];
//let years = new Array(1990, 1991, 1992, 1987, 1992);

//console.log(name);
//console.log(names.length);
//console.log(years);

//console.log(names [1]);
//console.log(years [years.length - 1]);

//names [1] = "Bob";
//console.log(names);

//let john = ["John", "Smith", 32, true];
//console.log(john.toString());
//console.log(john.join("#"));

//john.pop();
//john.shift();
//console.log(john);

//john.push(true);
//john.push("blue");
//console.log(john);
//john.unshift("john");
//console.log(john);

//objek

//let john = {
//    firstName: 'john',
//    lastName: 'smith',
//    birthYear: 1990,
//    isMarried: true,
//    family: ["Jane", "Mark", "Bob"],
//    calcAge: function () {
//       this.age = 2020 - this.birthYear;
//    },
//};

//console.log(john);
//console.log(john.birthYear);
//console.log(john["lastName"]);

//john.job = "driver";
//console.log(john);

//delete john.job;
//john.calcAge();
//console.log(john);

//JavaScrip DOM

let title = document.getElementsByTagName("h1")[0].innerHTML;
console.log(title);

let username = document.getElementById("username").Value;
console.log(username);

let username = document.getElementsByClassName("input-user")[0].value;
console.log(username2)

function helloWorld() {
    alert("Hello World")
}

function getUserName() {
    let username = document.getElementById("username").value;

    document.getElementsByTagName("p") [0].innerHTML;
}

function changePiture() {
    let image = document.getElementById("cat-image");
    console.log(image.src);
    image.src = "https://go.aws/2vT5mXU";
    image.alt = "fish";
    image.width = "400"
}