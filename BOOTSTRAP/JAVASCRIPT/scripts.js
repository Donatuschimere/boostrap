// how to output in js
// 1. document.write()
// 2. alert()
// 3. console.log()
// 1. document.get.......()

// document.write({name: "Henry"})
// alert({name: "Henry"})

// console.log({name: "Henry"})

/*
js data types.
        ==>[string, number, boolean]
        ==>typeof() keybord
        ==> prompt("what is ur name ") keyword
*/

console.log("Data Types in js. (1. strings)");

// variable is js
console.log("js variable")
// how to declare a variable?
// 1. let, 2. const, 3. var

// var myName = "Henry";
// console.log(myName);

/*
   Rules in naming a variables are:
          can contain digits, letters, underscores, $
          1. must start with letters, $
          2. no keywords must be involved
          3. cannot start with numbers 
          4. case sensitive must be fully observed as name != Name 
          5. camelcase or underscore is greatly needed
*/

// prompt
console.log("prompt in js");

// let username = "henry"
// let age = 500
// let is Alive = true 
// console.log(details);


// const username = prompt("enter your username here")
// const lastname = prompt("enter your lastname here")
// const age = prompt("enter your age here")
// const email = prompt("enter your email here")
// const state = prompt("enter your state here")

// // concatination
// let details = username + ' ' + lastname + ' ' + age + ' ' + email + ' ' + state
// console.log(details);

/*
ASSIGNMENT1
        given the existing code below,
         can you write some code so that their values are switched around?
        var a = "3";
        var b = "8";
        so that the variable a holds the value "8".
        And the variable b holds the value "3"
        When the code is run, it should output:
        a is 8
        b is 3
        DO NOT change any of the existing code.
        YOU are NOT allowed to type any numbers.
        YOU should not redeclare the variable a and b 
*/
// SOLUTION: 1

// let a = "3";
// let b = "8";

// temp = a;
// a = b ;
// b = temp;
// console.log("a=", a);
// console.log("b=", b);

// 


// console.log("string properties and method")

// charAt() property
// let text = "Here we go under js code common now"
// console.log(text.charAt(5));

// length
// console.log(text.length);
// picking at the last character 
// console.log(text.charAt(text.length - 7));

// console.log(text.indexOf('q'));

// startsWith property
// console.log(text.startsWith('here'));

// toUpper and lower
// console.log(text.toLowerCase());

// // toUpper and lower
// console.log(text.toUpperCase());

// console.log(text.trim().toLowerCase().startsWith('here'));

//  slice
// console.log(text.slice(1,31));

/*
//  Assignment 2:
        use prompt to request for users name 
        then turn the first character of the user to uppercase
        making sure the rest of the character are under lowercase even if the user enters
         upper at middle

    Assignment 3:
       use website to meet up: http://twitter-character-counter.com/
        using prompt write a program that will tell a user how many character he/she
       has written and how many is left assuming we're to target 50.
*/

// SOLUTION: 3
// let input = prompt("please enter some text(max 50 character limit of 50)")
// let charcount = input.length;

// if (charcount > 50){
//         alert('you have  exceeded the maximum character limit of 50');
// }else{
//         alert('you have written ${charcount}characters.you have ${charsleft} characters left');
// }

// SOLUTON: 2i
//    let username = 'Henry'
//    console.log(text.charAt('q'));

//    console.log(text.startsWith('H'));
//    console.log(text.trim().slice(1,5).toLowerCase('heNry'));

SOLUTION: 2
// const username = prompt("enter your Username here")
// const userName = prompt("Enter your name");
// const formatedName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

// console.log(formatedName);

// SOLUTION 1
// var a = "3"
// var b = "8"

// var c = a;
// a = b
// b = c

// // SOLUTION TWO 
// var user = prompt("what is your full name")
// var capitalize = user.slice(0,1).toUpperCase()
// var resOfName = user.slice(1,user.length).toLowerCase()
// var fullname = capitalize + resOfName
// alert("Hello dear" + fullname)

// // SOLUTION THREE
// var tweet = prompt("compose your tweet!");
// var tweetCount = tweet.length;
// alert("you have written " + " " + tweetCount + 
// " characters, you have " + (50 - tweetCount) + 
// " characters remaining");


// var tweet = prompt("COmpose Your tweet");
// var tweetslice = tweet.slice(0, 50);
// var tweetCount = tweetslice.length;

// alert("You've written " + " " + tweetCount + 
//         " characters, you have " (50 - tweetCount) + 
//         " characters remaining");


// second data type is NUMBERS
// they're loosely type. ie they don't declare type in js
console.log("second data type is NUMBERS ");

const num1 = 90;
var num2 = 3.4566;
// num2 = 'because of let am now replaced the real number'
const num3 = 2.456;
const num4 = '2.456';

const add = num1 + num2
const sub = num1 - num3
const mult = num1 * num4
const div = num1 / num2

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);
// console.log(typeof(num2)); used to determin the variable type

// operators in number this only exist in programming
// +=, -=, *=, --, ++, %
// MODULUS (%) returns the remainder after interger division

let addup = 40
let addup2 = 10
result = addup + addup2
console.log(result);

let marve = 50;
marve *= 40;
console.log(marve);

let henry = 30
henry ++
console.log(henry);

const total = 10;
const given = 3;
const remainder = total % given
console.log(remainder);

// ASSIGNMENT ONE
// using this formular get a user Dogage in human age 
// Dog age to human age formular
// humanAge = (dogAge - 2) * 4 + 21

console.log("Js Function()");





  


     



