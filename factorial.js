const readline = require ("readline");

const rl = readline.createInterface ({
    input:Process.stdin,
    output:Process.stdout
})

function mainMenu(){
    rl.question("Enter your choice (1-3)", choice => {
    } else if (choice==="2") {
    } else if (choice === "3") {
 } else {

 }
}
console.log("factorial Application");

console.log("1. Say Hello");
console.log("2. Compute Factorial");
console.log("3. Exit");

rl.question("Enter your choice (1-3)", choice => {

    if (choice == "1"){
        console.log("Hello There");
    }else if (choice === "2") {
        console.log("Factorial");

        rl.question("Enter a number for factorial:" , (numStr) ) => {
         if (choice=== "1") {
        }else if (choice === "2") {
            computeFactorial ();
        } else if (choice === "3"){
    } else {
        console.log ("Invalid choice. Please Try Again.")
            
            }
        });
        console.log("Invalid Choice. Please try again.") 
        mainMenu() ;


    } 
  function computeFactorial() {
     console.log("Factorial");

        rl.question("Enter a number for factorial:" , (numStr) ) => {
            let num = parseInt(numStr);

            if (isNaN(num ) || num<0) {
                console.log ("Please enter a non-negative integer");
            }else {

                let fact = 1;

                for (let i = 1; i <= num ; i++) {
                    fact *=i;
                }
                console.log("The factorial of" + num + " is " + fact);
  }

});
backToMenu();
function BackToMenu() {
    console.log("----------");
    console.log("1. Back to menu");
    console.log("2. Exit");

    rl.question("What would you like to do next? (1-2) : " , (backToMenuChoice) =>{
        if(backToMenuChoice === "1") {
            console.clear();
            mainMenu();
        } else if (backToMenuChoice === "2") {
            console.log("Exiting program...Goodbye");
            rl.close();
        } else {
            console.log("Invalid Choice.Please Try Again");
            BackToMenu();
        }
        }
    }
}

mainMenu();