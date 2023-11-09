const person = {
    firstName: "Sara",
    lastName: "Medhat",
    height: 90,
    age: 90
}

let text = " ";
for(let key in person) {
    text += person[key];
}

console.log(text);