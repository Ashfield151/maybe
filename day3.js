// let i = 1716
// let x = 22
// let sum = i + x 
// if ((i + x) % 2 == 0) {
//     console.log("this number is even")
//     console.log(sum)
// }
// else {console.log("this number is odd")}

// let coffeeOrder = [
//     "alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];

// console.log(coffeeOrder)

// let myFavWebsites = [
//     "Youtube",
//     "Reddit",
//     "GitHub"
// ];
// myFavWebsites.push('ebay');
// myFavWebsites.push('Amazon')
// myFavWebsites.splice(2, 1,'Feed me') 
// console.log(myFavWebsites)
//SPLICE

// let myFavWebsites = [
//     "Youtube",
//     "Reddit",
//     "GitHub"
// ];  
// myFavWebsites.unshift('DotaBuff')
// console.log(myFavWebsites)
// UNSHIFT


// let favGames= [
//     'apex',
//     'Portal',
//     'Dota'
// ]
// greatGames= favGames.slice(0, 2)
// console.log(greatGames)
// console.log

// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }

// pressGrindBeans();

// FUNCTION
// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// } 
// pressGrindBeans();

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
//    }
   
//    cashWithdrawal(300, 50449921);
//    cashWithdrawal(30, 50449921);
//    cashWithdrawal(200, 50447921);


// const coffeeOrder = (size, type) => {
//     console.log(`You have selected a ${size} ${type}, enjoy`);
// }
// coffeeOrder('small', `latte`);
// coffeeOrder('large', `tea`);

// const takeOrder = (size, drinkType) => {
//     console.log(`Order received: ${size} ${drinkType}`);
//    }
//    takeOrder("Tall","Latte");

// const addUp = (num1, num2) => {
//     return num1 + num2;
//    }
//    addUp(7,3);
//    console.log(addUp(2,5));

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
//    };
//    const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 55;
//    };
   
//    console.log("The temperature is " + getFahrenheit(15) + "°F");
   // Output: The temperature is 59°F
// const number = 5
//    function square(number) {
//     return number * number;
//    };
   
//    square(5);
// //    // Output: 25

// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//     return 1;
//     } else {
//     return (n * factorial(n-1));
//     }
//    }
//    console.log(factorial(4));

// let orderCount = 0;
// const takeOrder = (topping1, topping2, topping3) => {
//  console.log(`Pizza with ${topping1}, ${topping2}, ${topping3}`);
// return (orderCount++);
// }
// takeOrder("pineapple", "ham", "sausage");
// takeOrder("pineapple", "ham", "sausage");
// takeOrder("pineapple", "ham", "sausage");
// console.log(orderCount)







 let balance = 100
 let pin = 1234


const cashMachine = (pinN, amount) => {
     if (pinN == pin && amount <= balance
        
        
        ) {
        console.log('Take your money');
    } else if (pinN != pin){
        console.log(`Please check you have entered your pin corrrectly`);
    }
    else{

        console.log("You do not have enough money")}}


 cashMachine(1234, 100)
 

