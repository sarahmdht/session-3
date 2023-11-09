function homePage() {
    console.log("Welcome to home page");
}

function loginForm() {
    console.log("Please, login");
}

let loggedIn = false;

// if(loggedIn) {
//     homePage();
// } else {
//     loginForm();
// }

loggedIn ? homePage() : loginForm();