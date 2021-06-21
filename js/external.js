"use strict";
//... rest of javascript code


alert("Hello World!");

let userInput = prompt('Please type something:');
console.log('The user entered: ' + userInput);
alert("Welcome to my Website");

let favoriteColor = prompt ("What is your favorite color?");
alert("Great, " + favoriteColor + " is my favorite color too!");

let googleRateHourly = 400;
let amazonRateHourly = 380
let faceBookRateHourly = 350;
let googleHrWorked = 6;
let faceBookHrWorked = 10;
let amazonHrWorked = 4;
let googlePay = googleRateHourly * googleHrWorked;
let faceBookPay = faceBookRateHourly * faceBookHrWorked;
let amazonPay = amazonRateHourly * amazonHrWorked;

let totalPay = googlePay + faceBookPay + amazonPay

    alert("You have earned: " + "$ " + totalPay + " this week!");

let fullClass = prompt("Is the class full? yes or no");
let currentSchedule = prompt ("Is your schedule full? yes or no");

if (fullClass === "no" && currentSchedule === "no") {
    alert("Great! Student is now enrolled!");
    }
else {
    alert("Student is not enrolled!");
    }
let userResponse = prompt ("Are you a premium member? yes or no");
let items = Number (prompt("How many items would you like to purchase"));
let expiredOffer = true;
let productOffer = true;

if (userResponse === "yes"  || items > 2 && productOffer === !expiredOffer) {
    alert("Awesome you have an offer!");
    }
else {
    alert("Purchase more items or become a premium member to get an offer!");

}


