"use strict";
//... rest of javascript code


alert("Hello World!");

var userInput = prompt('Please type something:');
console.log('The user entered: ' + userInput);
alert("Welcome to my Website");

var favoriteColor = prompt ("What is your favorite color?");
alert("Great, " + favoriteColor + " is my favorite color too!");

var googleRateHourly = 400;
var amazonRateHourly = 380
var faceBookRateHourly = 350;
var googleHrWorked = 6;
var faceBookHrWorked = 10;
var amazonHrWorked = 4:
var googlePay = googleRateHourly * googleHrWorked;
var faceBookpay = faceBookRateHourly * faceBookHrWorked;
var amazonPay = amazonRateHourly * amazonHrWorked;

var totalPay = alert("You have earned: " + (googlePay + faceBookpay + amazonPay) + "this week!");

var fullClass = prompt("Is the class full? yes or no");
var currentSchedule = prompt ("Is your schedule full? yes or no");

if (fullClass === "no" && currentSchedule === "no") {
    alert("Great! Student is now enrolled!");
    }
else {
    alert("Student is not enrolled!");
    }
var userResponse = prompt ("Are you a premium member? yes or no");
var items = Number (prompt("How many items would you like to purchase"));
var expiredOffer = true;
var productOffer = true;

if (userResponse === "yes"  || items > 2 && productOffer === !expiredOffer) {
    alert("Awesome you have an offer!");
    }
else {
    alert("Purchase more items or become a premium member to get an offer!");

}


