// Destructing Array 

// const vehicles = ["BMW" , "Volvo" , "Fiat"];

// const [ car , truck , suv ] = vehicles;

// console.log(car);
// console.log(truck);
// console.log(suv);

// const [ car , , ] = vehicles;

// console.log(car);

//========================================

// array (require order)


function calculate(a , b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add , subtract , multiply , divide];
}

const [add , ...rest] = calculate(4 , 2);

console.log(rest);

// const [add , subtract , multiply , divide] = calculate(4 , 2);

// console.log(add);
// console.log(subtract);
// console.log(multiply);
// console.log(divide);

// const [add ,  ,  , ] = calculate(4 , 2);

// console.log(add);



//==============================================

// Object (do not require order)

// const user = {
//     username: "SaraMedhat",
//     password: "SAMPLEPASSWORD",
//     photo: "https://profilephoto"
// }

// const {username , password , photo} = user;

// console.log(username);

// console.log(user.username);   old way