function sayHi(humanName) {
    alert("Hello, " + humanName + "!");
}
sayHi("Bill Bellichek");
;
function greet(person) {
    alert("Hello, " + person.firstName);
}
function greetLouder(person) {
    alert("HELLO, " + person.firstName + "!!!!");
}
var person = { firstName: "Frank", hairColor: "Black" };
greet(person);
greetLouder(person);
