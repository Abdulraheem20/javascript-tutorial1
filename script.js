// let a = 5;
// let b = 10;
// let c = a * b;
// console.log(c)

// let xyz = 'Samuel';
// console.log(xyz)
// console.log(a)


// var tre = 78;
// console.log(tre)

// let daf = 675;
// console.log(daf)


// const g = 9.8
// console.log(g)

// let d = 2022;
// let e = 1994;
// let f = a - b;
// console.log(c)

// let ae = 28
// console.log(ae)

// let na = 'abdulraheem';
// console.log(na)
// let ma = 'raimi';
// console.log(ma)

// //let age = 10;
// let firstname = 'John';
// let othername = `Humble`;
// let lastname = "Smith";
// let arraydata =[1, 'victor', 56];
// let emptyvalue;
// let empty = null;


// console.log(typeof(age))
// console.log(typeof(firstname))
// console.log(typeof(arraydata))
// console.log(typeof(emptyvalue))
// console.log(typeof(empty))


//number data types


let age = 45
const gravity = 9.41
let mass = 72
const pi = 3.14
const waterBoilingpoint = 100
let fart = 6.235678

console.log(age, gravity, mass, pi, waterBoilingpoint)

// math object

//Math.round()
console.log(Math.round(gravity))
 //math.floor
 console.log(Math.floor(pi))
 //Math.ceil
 console.log(Math.ceil(pi))
 //Math.max
 console.log(Math.max(5,3,6,8,9,10))
 //Math.min
 console.log(Math.sqrt(100))
 console.log(Math.pow(3,2))
 console.log(Math.abs(-30.98))
 console.log(Math.random())


 
//  console.log(Math.ceil(t))
//  console.log(Math.floor(t))

let randonNumber = Math.random()
console.log(Math.ceil(randonNumber))
console.log(Math.floor(randonNumber))

console.log(Math.floor(Math.random() * 7))

// alert()
// prompt()
//  let userMessage = prompt("what is on your mind?")
//  alert(userMessage)
// console.log(userMessage)

let fn = 'Victor';
let on =`Paul`;
let ln = `omotaje`;

console.log(fn +  on + " " + ln)
console.log ( fn + " " + on + " " + ln  + " "  + 'is a good man')


// template literals
console.log(`${fn} ${on} ${ln} is a good man `)


let message = 'it\'s a good morning in africa'
console.log(message)
let message2 = "it's a good morning in africa"
console.log(message2)


let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam pariatur optio repudiandae, eligendi \n\tnisi veniam saepe neque et quis. Doloremque iure odit laborum, illum minima et earum quibusdam esse ad vero, \ndicta quod adipisci perferendis nam error aut porro voluptas! Vel iste dolorem iure expedita voluptates natus, voluptate id."
console.log(lorem)

let js = 'javascript'
// .lenght
console.log(js.length)
console.log(js[0])
console.log(js[1])
console.log(js[2])
console.log(js[3])
console.log(js[4])
console.log(js[5])
console.log(js[6])
console.log(js[7])
console.log(js[8])
console.log(js[9])

// uppercase() and lowercase()
console.log(js.toUpperCase())
let py = 'PYTHON'
console.log(py.toLowerCase())

// split()
console.log(message.split())
console.log(message.split(''))
console.log(message.split(' '))
console.log(message.split(" "))

//slice()
console.log(js.slice(0,4))

// let myFirstName = prompt("what is your first name?")
// alert(myFirstName.toUpperCase([0]))
// console.log(myFirstName)

// let FirstName = prompt("what is your first name?")
// let fletter = FirstName.slice(0,1) 
// fletter = fletter.toUpperCase()
// let otherletter = FirstName.slice(1,FirstName.length)
// otherletter = otherletter.toLowerCase()
// let output = fletter + otherletter
// alert(output)


// .includes
console.log(js.includes('v'))
console.log(js.includes('e'))


// .replace
console.log(js.replace('java','Bible'))

// .repeat
console.log(js.repeat(3))

// substrings
console.log(js.substring(0,4))
console.log(js.substring())

//.concat
console.log(js.concat(py))

// .search
console.log(js.search('p'))


// OPERATORS

let x = 2;
x += 1;          // x = x + 1;
x += 1;          // x = x + 1;
console.log(x)

let y = 9
y -= 1            // y = y - 1;
y -= 1            // y = y - 1;
console.log(y)

let z = 2;
z *= 2;          //z = z * 2;
z *= 2;
z *= 2;
console.log(z)


let j = 10;
j/= 2;           //j = j/2
console.log(j)

let k = 11;
k %= 2;           //k = k/2
console.log(k)


let i = 2;
i **= 3;           //i = i ** 2
console.log(i)

let challenge = "Lagos School of Programming"
let socials = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,1))
console.log(challenge.slice(0,5))
console.log(challenge.includes('School'))
console.log(challenge.includes(''))
console.log(challenge.split(' '))
console.log(challenge.split(''))
console.log(challenge.charAt(15))
console.log(socials.split(' '))
console.log(challenge.replace("Lagos School of Programming", "learn to code Lagos School of Programming"))
console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))
console.log(challenge.startsWith("Lagos"))
console.log(challenge.endsWith("Programming"))
console.log(challenge.endsWith("Programming"))
console.log(challenge.match(/o/g))
console.log(challenge.repeat(2 ))
let quote = ('"The quote \'There is no exercise better for the heart than reaching down and lifting down people up.\' by John Holmes teaches us to help one another." ')
console.log(quote)
let p = 'python'
let ja = 'jargon'
console.log(p.includes('on'))
console.log(ja.includes('on'))
console.log(Math.floor(Math.random() * 100)) + 1;
let theRandomNumber = Math.floor(Math.random() * 50) + 50;
console.log(theRandomNumber)
console.log(Math.floor(Math.random() * 250)) + 1;
let loveQuote = "\'Love is the best thing in this world. Some found their love and some are still looking for their love.\'"
console.log(loveQuote.match(/love/g))

// comparism operator
// >, <, ==/===, >=, <=
console.log(3 > 2)
console.log(3 < 2)
console.log(3 == 2)
console.log(3 === 2)
console.log('3'== 3) //check for either datatye value
console.log('3'=== 3) // comopare both datatypse and values
console.log('3'>= 2)
console.log('3'<= 2)


//logical operators
// ampersand operator AND (&&)
let checkValue = 4 > 3 && 5 < 2
console.log(checkValue)

checkValue = 4 > 3 && 5 > 2
console.log(checkValue)

// pipe operator OR || 
checkValue = 4 > 3 || 5 < 2
console.log(checkValue)
checkValue = 4 < 3 || 5 < 2
console.log(checkValue)

//  not equal is "!"
let frt = !(4 > 3)
console.log(frt)
let rt = !(4 < 3)
console.log(frt)
let me = true
console.log(!me)

// increment operators and decrement operators
let countValue = 0
countValue++
countValue++
countValue++
countValue++ 
console.log(countValue)


let countValue1 = 09
countValue1--
countValue1--
countValue1--
countValue1-- 
console.log(countValue1)

// let say = prompt('pls type in your message')
// let saylenght = say.length
// let textlenght = 255
// alert (`you just typed in ${say.length} characters and you have ${ textlenght - saylenght} characters left`) 


// DATE
let raimi = new Date();
document.getElementById('lasop0').innerHTML= raimi


document.getElementById('lasop1').innerHTML= 'Victor is in China'

// date method

document.getElementById('lasop2').innerHTML= raimi.getFullYear()
document.getElementById('lasop3').innerHTML= raimi.getDate()
document.getElementById('lasop4').innerHTML= raimi.getHours()
document.getElementById('lasop5').innerHTML= raimi.getMonth() + 1
document.getElementById('lasop6').innerHTML= raimi.getDay()
document.getElementById('lasop7').innerHTML= raimi.getTime()
document.getElementById('lasop8').innerHTML= raimi.getMinutes()



// alert('I\'m a Javascript')

const birthday2 = new Date('1995-12-17T03:24:00')   // This is ISO8601-compliant and will work reliably
const birthday3 = new Date(1995, 11, 17)            // the month is 0-indexed
const birthday4 = new Date(1995, 11, 17, 3, 24, 0)
const birthday5 = new Date(628021800000) 


document.getElementById('lasop9').innerHTML= birthday2
document.getElementById('lasop10').innerHTML= birthday3
document.getElementById('lasop11').innerHTML= birthday5


const date1 = new Date("2020-05-12T23:50:21.817Z");
date1.toString()               // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
date1.toDateString()           // Tue May 12 2020
date1.toTimeString()           // 18:50:21 GMT-0500 (Central Daylight Time)
date1.toISOString()            // 2020-05-12T23:50:21.
date1.toUTCString()            // Tue, 12 May 2020 23:50:21 GMT
date1.toGMTString()            // Tue, 12 May 2020 23:50:21 GMT
date1.toJSON()                 // 2020-05-12T23:50:21.817Z
date1.toLocaleString()         // 5/12/2020, 6:50:21 PM
date1.toLocaleDateString()     // 5/12/2020
date1.toLocaleTimeString()     // 6:50:21 PM


const date = new Date();
console.log(date)
const [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()];
console.log(date)
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
console.log(date)

document.getElementById('lasop12').innerHTML= date
document.getElementById('lasop13').innerHTML= [month, day, year]
document.getElementById('lasop14').innerHTML= [hour, minutes, seconds]
document.getElementById('lasop15').innerHTML= [month, day, year]

function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'negative';
    }
    return result;
  }
  
console.log(testNum(-5));

// new date()
const d = new Date();
document.getElementById("lasop16").innerHTML = d;

//date(milliseconds)
const d1 = new Date(1662360609007);
document.getElementById("lasop17").innerHTML = d1;

//date string (the date must be in quotation)
const d2 = new Date("2015-03-25");
document.getElementById("lasop18").innerHTML = d2;

// date format (YY,MM,DD,HH,MM,SS,MS)
const d3 = new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById("lasop19").innerHTML = d3;

// set full-year
const d4 = new Date();
d4.setFullYear(2020);
document.getElementById("lasop20").innerHTML = d4;

const d5 = new Date();
d5.setFullYear(2020, 10, 3);
document.getElementById("lasop21").innerHTML = d5;

//set full year (6 months ago)
const d6 = new Date();
d6.setFullYear(d6.getFullYear(), d6.getMonth() - 6);
document.getElementById("lasop22").innerHTML = d6;


// if else, else if
// if (condition1)
//   statement1
// else
//   if (condition2)
//     statement2
//   else
//     if (condition3)
//       statement3

// example 1;
// function testNum(a) {
//     let result;
//     if (a > 0) {
//       result = 'positive';
//     } else {
//       result = 'negative';
//     }
//     return result;
//   }
  
//   console.log(testNum(5));

// example 2; if else, else if, else;
const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Good morning";
} else if (time < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("lasop23").innerHTML = greeting;


// class 05-09-2022
// conditional statement;

if(raimi.getFullYear() == 2022){
  document.getElementById('lasop24').innerHTML = `The current year is 2022`
}
//syntax
// if (condition) {
  //your code goes(statement)
//}
// if
let num = 4
if (num < 10){
  console.log(`${num} is less than 10`)
}

// if else
let num1 = 51;
if (num1 > 50){
  console.log(`${num1} is greater than 50`)
} else{
  console.log(`${num1} is less than 50`)
}

// if, else if, else
let a = 0;
if (a > 0){
  console.log(`${a} is a positive number`)
} else if(a < 0){
  console.log(`${a} is a negative number`)
} else if(a == 0){
  console.log(`${a} is a zero`)
} else{
  console.log(`${a} is not a number`)
}

// let yourAge = prompt( 'enter your age')
// if (yourAge >= 18){
//   alert ('you are old enough to drive')
// } else{
//   alert (`you have ${18 - yourAge} years before you can drive`)
// }

// let userAge = prompt("enter your age")
// let myAge = 28
// if (userAge == 0) {
//   console.log('pls input your age')
// }
//   else if (userAge > myAge){
//    console.log(`dear user, you are ${userAge - myAge} years older than me`)
// } else if ( userAge < myAge){
//   console.log(`dear user, I am ${ myAge - userAge} years older than you`)
// } else if(userAge == myAge) {
//   console.log(`dear user, we are agemate`)
// } else {
//   console.log(`pls input a valid age`)
// }

//ternary operator
let weather = "rainy";
if (weather == "rainy"){
  console.log(`Don't forget your umbrella`)
} else{
  console.log(`No need for umbrella`)
}

weather == 'rainy' ? console.log(`Don't forget your umbrella`): console.log(`No need for umbrella`);

// let Num = prompt(`enter a number`)
// if (Num % 2 == 0){
//   alert (`${Num} is an even number`)
// } else {
//   alert(`${Num} is an odd number`)
// }
// Num == (Num % 2 == 0) ? console.log(`${Num} is an even number`) : console.log(`${Num} is an odd number`)

let A = 10;
let B = 20;
B > A ? console.log('B is greater than A'): console.log('A is greater than B')

// Nested conditional statement
let register = true;
let tuition = false;
if (register) {
  if(tuition){
    console.log(`Congratulations, you have been fully registered`)
  }else{
    console.log(`You are registered, but yet to pay your tuition fee`)
  } 
}else{
  console.log(`You are not a registered student`)
}

//Switch statement
let weather2 = "cloudy"
switch(weather2){
  case 'rainy':
    console.log(`it's rainy, don't forget your umbrella`)
    break
  case 'sunny':
    console.log(`go out without an umbrella`)
    break
  case 'cloudy': 
    console.log(`it's likely to rains`)
    break
  case 'snowy':
    console.log(`Don't forget your rain coat`)
    break
  default:
    console.log(`No need for anything`)
}

// let password = prompt(`Pls input your password. Characters must be between 8-15 characters.`)
// if (password.length <= 7){
//   //alert(`Password must be between 8-15 characters.`)
//   console.log(`Password must be between 8-15 characters.`)
// } else if (password.length <= 15){
//     if (password.match(/[@]/ && /[&]/)){
//     //alert(`password is strong`)
//     console.log(`password is strong`)
//   } else if (password.match(/[$]/ && /[#]/)){
//     //alert(`password is intermediate`)
//     console.log(`password is intermediate`)
//   } else if (password.match(/[@]/)){
//     //alert(`weak password `)
//     console.log(`weak password`)
//   } else if (password.match(/[$]/)){
//     //alert(`password is okay`)
//     console.log(`password is okay`)
//    } else if (password.match(/[A-Z] || [a-z] || [0-9]/)){
//      console.log(`weak password`)
//    }
// }else {
//   //alert(`Password must be between 8-15 characters.`)
//   console.log(`Password must be between 8-15 characters.`)
// }

// Array
let alphaNum = ['humble', 'alao', 230, null, true, false]
let numbers = [2,3,43,43,56,67,43,34,7,0,9]
let str = ['ade','olu', 'ayo', 'remi', 'tunde','victor', 'shola']

// declare empty array
let emptyArray = Array() //using array constructor
console.log(emptyArray)

let newEmptyArray = []; // using the empty square bracket
console.log(newEmptyArray)

// assessing array based on their index
console.log(str[0])
console.log(str[4])
console.log(str[2])
console.log(str[3])

// length of an array
console.log(str.length) //length of an array 
console.log(numbers.length -1)// last index of an array

// changing the value in an array
str[0] = 'samuel' // replaced what's in index [0];
str[3] = 'tayo' // replaced what's in index [3];
str[6] = 654  // replaced what's in index [6];
console.log(str)

//methods of array
// .concat, .includes, .toString, .split, .indexOf, .slice, .push, .pop, .shift, .unshift, .sort, .reverse, .join (there are more)
let classlist = ['raimi', 'humble', 'tunde', 'samuel', 'victor', 'isaac']
console.log(classlist.length)
console.log(classlist.length - 1) // finding the last index
console.log(classlist.indexOf('humble')) // finding index of position of array
console.log(classlist[2]) // finding the value of index 2
console.log(classlist.includes('victor'))
console.log(classlist.includes('okeoghene'))
console.log(classlist.includes('victor'))
console.log(classlist.toString())

let newArray = classlist.concat(numbers)
console.log(newArray)

console.log(classlist.slice(0,3))
console.log(classlist.slice())
console.log(classlist.join())
console.log(classlist.join(''))
console.log(classlist.join(' '))
console.log(classlist.join('-'))
console.log(classlist.join('- '))
console.log(classlist.join(','))
console.log(classlist.join(', '))
console.log(classlist.join(' #'))


//class work
let classlist2 = ['RAIMI', 'HUMBLE', 'TUNDE', 'SAMUEL', 'VICTOR', 'ISAAC']
let classlist3 = ['Raimi', 'Humble', 'Tunde', 'Samuel', 'Victor', 'Isaac']
// classlist === classlist2 === classlist3;
// let nameInput = prompt(`What is your name?`)
//  if (classlist.toLowerCase() == classlist2.toLowerCase()) {
//  if (classlist.includes(nameInput)){
//   console.log(`${nameInput}, Welcome to the party`)
// }else{
//   console.log(`Sorry ${nameInput}, you are not invited`)
// }
// } else {
//   console.log(`Sorry ${nameInput}, pls enter your name properly.`)
// }
// if ( (classlist.includes(nameInput)) || (classlist2.includes(nameInput)) || (classlist3.includes(nameInput)) ) {
//    console.log(`${nameInput}, Welcome to the party`)
// } else{
//    console.log(`Sorry ${nameInput}, you are not invited`)
// }


classlist.push('okeoghene') //.push add an array to the last
console.log(classlist)

classlist.pop() // .pop remove the last item in the array
console.log(classlist)

classlist.shift() // .shift remove the first item(0 index) 
console.log(classlist)

classlist.unshift('raimi') // .unshift add a new item to the first (0)  //index of an array
console.log(classlist)

classlist.reverse() // .Reverses the elements in an array in place.
console.log(classlist.reverse())

classlist.sort() //.sort rearrange array alphabetically
console.log(classlist.sort())

//ASSIGNMENT SOLUTION
const shoppingCart = ['Milk', 'Coffee','Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)
shoppingCart.push('Sugar')
console.log(shoppingCart)
shoppingCart.splice(4, 1)
console.log(shoppingCart)
//shoppingCart.splice(3,1, 'Green Tea')
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)

let countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Ireland',
  'Japan',
  'Kenya'
]
console.log(countries)
console.log(countries.includes('Ethiopia'))
console.log(countries.indexOf('Ethiopia'))
console.log(countries[4].toUpperCase())

const frontEnd = ['HTML','CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullstack = frontEnd.concat(backEnd)
console.log(fullstack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages)
ages.sort()
console.log(ages)
// min ages = 19; while max ages = 26
console.log(Math.max(...ages))
console.log(Math.min(...ages))
//console.log(Math.(...ages))

// LOOP
//FOR LOOP
for(let i = 1; i <= 50; i++){
  console.log(i)
}
for(let i = 0; i < classlist.length; i++){
  console.log(i)
}

for(let i = 1; i <= 100; i++){
  if (i%2 === 0 && i % 5 === 0){
    console.log(`${i}: Fizzbuzz`)
  } else if(i % 3 === 0){
    console.log(`${i}: buzz`)
  } else if( i % 2 === 0){
    console.log(`${i}: fizz`)
  } else{
    console.log(i)
  }
  
}
for(let i = 0; i <= 5;  i++){
  console.log(`${i} * ${i} = ${i * i}`)
}
let Countries = ['nigeria', 'togo', 'sierra leone', 'ghana', 'congo', 'chile']
for( let t = 0; t < Countries.length; t++){
  console.log(Countries[t].toUpperCase())
}
let emptyArr =[]
for( let i = 0; i < Countries.length; i++){
  emptyArr.push(Countries[i].toUpperCase())
}
console.log(emptyArr)
let sum = 0;
for(let e = 1; e <= 10; e++){
  sum += e
  console.log(sum)
}
console.log(sum)
//ass
// use for loop to iterate btw 0 and 100; print the sum of all even numbers
let sum100 = 0;
for (let i = 1; i <= 100; i++){
  sum100 += i;
  console.log(sum100)
}
console.log(sum100);

for(let i = 10; i >= 0; i--){
  console.log(i)
}
let numb = [1,2,3,4,5,6,7,8,9]
let newNumb = []
for(let i = 0; i < numb.length; i++){
  newNumb.push(numb[i] * 3)
}
console.log(newNumb)

// WHILE LOOP
let m  = 0;
while (m <= 5){
  console.log(`while loop: ${m}`)
  m++
}

// DO WHILE LOOP
let b = 0;
do{
  console.log(`do while loop: ${b}`)
  b++
}while(b <= 5)

// FOR OF LOOP
for ( let raimi of Countries){
  console.log(raimi.toUpperCase())
}

// FUNCTION
// function humble(){

// }
function sum1(){
  let i = 6;
  let j = 7;
  console.log(i + j)
} 
sum1()

function multiply(){
  let v = 5;
  let w = 5;
  console.log(v * w)
} multiply()

function divide(){
  let v = 25;
  let w = 5;
  console.log(v / w)
} divide()

let leng = 0;


//////////////////////////////////////////////////////
 
    // let fruitType1 = ['Oranges',' Apples', 'Bananas', ' Cherries', 'Mangoes', 'Papayas']
    let fruitType = 'Cherries';

switch (fruitType) { 
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");

//////////////////////////////////////////////////////////
///////////LOOP ITERATION (MDN)//////////////////////////

// function howMany(selectObject) {
//   let numberSelected = 0;
//   for (let i = 0; i < selectObject.options.length; i++) {
//     if (selectObject.options[i].selected) {
//       numberSelected++;
//     }
//   }
//   return numberSelected;
// }

// const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//   const musicTypes = document.selectForm.musicTypes;
//   console.log(`You have selected ${howMany(musicTypes)} option(s).`);
//});
/////////////////////////////////////////////////////////////
/////////////////ASSIGNMENTS SOLUTION//////////////////
//Ass1//
for (let grade = 0; grade <= 100; grade++){
  if(grade >= 80 ){
    console.log(`${grade}: Grade A`);
  } else if(grade >= 70 && grade < 80 ){
    console.log(`${grade}: Grade B`);
  } else if(grade >= 60 && grade < 70){
    console.log(`${grade}: Grade C`);
  } else if(grade >= 50 && grade < 60){
    console.log(`${grade}: Grade D`);
  } else{
    console.log(`${grade}: Grade F`); 
  } 
}
//Ass2//
let Autumn =[
  'September',
  'October',
  'November'
];
let Winter =[
  'December',
  'January',
  'February'
];
let Spring =[
  'March',
  'April',
  'May'
]; 
let Summer = [
  'June',
  'July',
  'August'
];
// let userInput = prompt(`Which season is it currently?`);
// if (Summer.includes(userInput)){
//   console.log(`Ohh! it's Summer Season. Enjoy it!`);
// } 
// if (Spring.includes(userInput)){
//   console.log(`Ohh! it's Spring Season. Enjoy it!`);
// } 
// if (Winter.includes(userInput)){
//   console.log(`Ohh! it's Winter Season. Enjoy it!`);
// }
// if (Autumn.includes(userInput)){
//   console.log(`Ohh! it's Autumn Season. Enjoy it!`);
// };


// if (userInput === 'september' || userInput == '')

//Ass3//
// let ash = ['', '', '', '', '#', '##','###','####','#####','######', '#######'];
// let Ash = []
// for (let m = 0; m < ash.length; m++){
//   Ash.push(ash[m]);
//   if (m >= 4){
//     console.log(`${m}-      ${Ash[m]}`)
//   }
// } 
// let r = 4
// while(r < ash.length){
//   Ash.push(ash[r]);
//   console.log(Ash[r])
//   r++;
// } 
//Ass4//
for (let p =0; p<= 10; p++){
  console.log(`${p} * ${p} = ${p * p}`) 
}
//Ass5//
let addUp = 0;
for (let i = 0; i<= 100; i++){
  addUp += i
} console.log(addUp);
//Ass6//
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i<= 100; i++){
  if(i % 2 == 0){
    evenSum +=  i
  }
  if(i % 2 == 1){
    oddSum += i
  }
}console.log(oddSum, evenSum);
//Ass7//
let oddEven = []
oddEven.push(evenSum, oddSum);
console.log(oddEven)
//Ass8//
// function randNum(){
//   let a = Math.trunc(Math.random() * 10);
//   let b = Math.trunc(Math.random() * 20);
//   let c = Math.trunc(Math.random() * 30);
//   let d = Math.trunc(Math.random() * 40);
//   let e = Math.trunc(Math.random() * 50);
//   console.log(a,b,c,d,e);
// } 
let arrRandNum = [];
let digit = [
  Math.trunc(Math.random() * 10),
  Math.trunc(Math.random() * 20),
  Math.trunc(Math.random() * 30),
  Math.trunc(Math.random() * 40),
  Math.trunc(Math.random() * 50)
]
arrRandNum.push(digit);
console.log(digit);
//Ass9//
let array = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Redux',
  'Node',
  'Express',
  'MongoDB'
];
let iterateThru = [];
for (let i = 0; i < array.length; i++){
  iterateThru.push(array[i]);
  console.log(iterateThru[i])
}


//Ass10//
let fruit =[
  'banana',
  'orange',
  'mango',
  'lemon'
]
let fruitReverse = []
for (let i = fruit.length - 1; i >= 0; i--){
  fruitReverse.push(fruit[i]);
}; 
console.log(fruitReverse);
//Ass11//
//countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// let longestCountry = 0;
// let thecountry = 0;
// for(let i = 0; i < countries.length; i++){
//   if (countries[i].length > longestCountry){
//     longestCountry = countries[i].length;
    
//   }  
// } console.log(longestCountry)
// Ass11.6//

// //let emptyArr =[]
// for( let i = 0; i < Countries.length; i++){
//   emptyArr.push(Countries[i].toUpperCase())
// }
// //
let reverseCountry = [];
//let reverseCapital = []
for(i = countries.length -1; i > 0; i--){
  reverseCountry.push(countries[i].toUpperCase());
  
} console.log(reverseCountry);



let today = new Date().getHours();
if(today < 12){
  document.getElementById('time').innerHTML= `Goodmorning`
} else if(today <= 12 && today < 16 ){
  document.getElementById('time').innerHTML= `Good afternoon`
} else if(today <= 16 && today < 19){
  document.getElementById('time').innerHTML= `Good evening`
} else{
  document.getElementById('time').innerHTML= `Good night`
}
let newCountries = [];
for(let i = 0; i < countries.length; i++){
  if(countries[i].includes('land')){
    newCountries.push(countries[i])
  }
} console.log(newCountries);

for(let i = 0; i <= 7; i++){
  console.log('#'.repeat(i));
};

let fourChar = [];
for(let i = 0; i < countries.length; i++){
  if (countries[i].length >= 4){

  }
}


////////////12/09/2022//////////////
//function with a parameter and return keyword
function add(a){
  let b = 10;
  console.log(a + b);
}
add(2); // 2 is argument; while a is parameter;

function addNum(a, b){
  c = a * b;
  console.log(c);
}
addNum(25, 4);
addNum(30, 5);
addNum(35, 6);
addNum(40, 7);

function multiplyNum(a, b, c){
  let result = a * b + c;
  return result;
}
console.log(multiplyNum(3, 5, 7));
console.log(multiplyNum(4, 6, 8));
console.log(multiplyNum(5, 7, 9));
console.log(multiplyNum(6, 8, 10));

function areaCircle(r){
  let pi = 22/7;
  let area = pi * r * r;
  return area.toFixed(2)
}
console.log(areaCircle(3));

function fizbuz(){
  for(let i = 1; i <= 100; i++){
    if (i%2 === 0 && i % 5 === 0){
      console.log(`${i}: Fizzbuzz`)
    } else if(i % 3 === 0){
      console.log(`${i}: buzz`)
    } else if( i % 2 === 0){
      console.log(`${i}: fizz`)
    } else{
      console.log(i)
    }
    
  }
} 
fizbuz()

let number = [3,4,4,2,6,7,8,41,8]
//let v = (number.length)
function sumUp(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum;
}
console.log(sumUp(number));
console.log(sumUp(numbers));

//ARROW FUNCTION//
const humble=()=>{
  let name = 'Humble'
  let lastName = "Alao"
  return `${name} ${lastName}`
}
console.log(humble());


const rand=(a)=>{
  let random = [];
  for(let i = 0; i <= 5; i++){
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (random.length < i){
      random.push(randomNumber)
    }
  }
  return random;
} 
console.log(rand())

//////////////////// 13-09-2022 ////////////////////////
const square = function(n){
  return n * n;
};
console.log(square(6));

let username = document.getElementById('username')
let form = document.getElementById("form")
let button = document.getElementById("btn")
let msg = document.getElementById('message')



btn.addEventListener('click', (e)=>{
  e.preventDefault()
  if(username.value){
    let today = new Date().getHours();
  if(today < 12){
    msg.innerHTML = `${username.value}, Good morning`;
  } else if(today <= 12 && today < 16 ){
    msg.innerHTML = `${username.value}, Good afternoon`;
  } else if(today <= 16 && today < 19){
    msg.innerHTML = `${username.value}, Good evening`;
  } else{
    msg.innerHTML = `${username.value}, Good night`;
  }
  }
  username.value = '';
  });




//////////////// JAVASCRIPT OBJECT ////////////////////

const person = {
  name: 'John',
  lastname: 'Doe',
  sex: 'male',
  jobTitle: 'Software Developer',
}
/// we add a new key and value to an existing object by doing this; 
person.country = "Nigeria"


// access values of object using the key name./////
console.log(person);
console.log(person.name);
console.log(person.jobTitle);

// access values of object using the square bracket and quote///
console.log(person['sex']);
console.log(person['jobTitle']);

const rectangle = {
  length: 20,
  width: 50
}

const student = [
  {
    name: "Raimi",
    age: 18,
    sex: "male",
    skin: "chocolate"
  },
  {
    name: "Humble",
    age: 19,
    sex: "male",
    skin: "fair"
  },
  {
    name: "Victor",
    age: 20,
    sex: "male",
    skin: "chocolate"
  },
  {
    name: "Samuel",
    age: 22,
    sex: "male",
    skin: "yellow"
  },
];
console.log(student[0].name);
console.log(student[1].name);
console.log(student[2].name);
console.log(student[3].name);

let names = [];
for(let i = 0; i < student.length; i++){
  names.push(student[i].name)
}
console.log(names);

/////////// HIGHER ORDER FUNCTION ////////////
function callback(n){
  return n * 2;
}

function cube(callback, n){
  return callback(n) * n;
}

console.log(cube(callback, 3));

const sumNumber =(arr)=>{
  let sum = 0;
  const callback = function(element){
    sum += element
  }
  arr.forEach(callback)
  return sum
}
console.log(sumNumber(number));
console.log(sumNumber(numbers));


///////////////// Setting time //////////////////////
///// setTimeOut //
///// setInterval



const greetings=(name ="Humble", time="Afternoon")=>{
  let humble = `Welcome ${name}, Good ${time}`;
  // document.getElementById('demo8').innerHTML = humble
    console.log(i, humble)
  
  //return humble
}

// greetings();
setTimeout(greetings, 3000);
// setInterval(greetings, 3000);

// setTimeout((name ="Humble", time="Afternoon")=>{
//   let humble = `Welcome ${name}, Good ${time}!`;
//   document.getElementById('demo8').innerHTML = humble
// }, 3000)

//classwork//
// let username = document.getElementById('username')
// let form = document.getElementById("form")
// let button = document.getElementById("btn")
// let msg = document.getElementById('message')



// btn.addEventListener('click', (e)=>{
//   e.preventDefault()
//   if(username.value){
//     let today = new Date().getHours();
//   if(today < 12){
//     msg.innerHTML = `${username.value}, Good morning`;
//   } else if(today <= 12 && today < 16 ){
//     msg.innerHTML = `${username.value}, Good afternoon`;
//   } else if(today <= 16 && today < 19){
//     msg.innerHTML = `${username.value}, Good evening`;
//   } else{
//     msg.innerHTML = `${username.value}, Good night`;
//   }
//   }
//   username.value = '';
//   });
//
const email = document.getElementById('email');
const form1 = document.getElementById('form1');
const submitButton = document.getElementById('submitEmail');
let empArr = [];

const password = document.getElementById('password');
const submitPassword = document.getElementById('submitPassword');
submitEmail.addEventListener('click', (e)=>{
  e.preventDefault();
  empArr.push(`email: ${email.value}`);
  console.log(empArr);
  // console.log(email.value);
  email.value = '';
});

submitPassword.addEventListener('click', (e)=>{
  e.preventDefault();
  empArr.push(`password: ${password.value}`);
  // console.log(password.value);
  console.log(empArr);
  password.value = '';
});
// console.log(empArr);

// for (let i = 0; i < empArr.length; i++){

// } //calsswork correction //



// for each
// .map
// .filter
// .sort
let sumArray2 = 0;
let sumArray3 = 0;

numbers.forEach((element, index, arr)=>{
  //console.log(`${index}: ${element} separated ///${array}`);
  sumArray2 += element;
  let multiply = element * 3;
  console.log(multiply)

})
console.log(sumArray2);
console.log(sumArray3);


let county = []
countries.forEach((element)=>{
  county.push(element.toUpperCase());
  console.log(element.toUpperCase());

}); console.log(county);

// .map
let mapArray = numbers.map((e, i)=>{
  return e * e;
});
console.log(mapArray);
let newCountry = countries.map((e, i)=>{
  return e.toUpperCase();
});
console.log(newCountry);

// .sort
console.log(numbers.sort()); // wrong for number
console.log(numbers.sort((a, b)=>{
  return a-b
}));
console.log(numbers.sort((a, b)=>{
  return b-a
}));

// .filter

let personNew = [
  {
    name: "Raimi",
    age: 18,
    sex: "male",
    skin: "chocolate"
  },
  {
    name: "Humble",
    age: 19,
    sex: "male",
    skin: "afin"
  },
  {
    name: "Victor",
    age: 20,
    sex: "male",
    skin: "brown"
  },
  {
    name: "Samuel",
    age: 17,
    sex: "male",
    skin: "yellow"
  },
];

let personResult = personNew.filter( (ele)=>{
  return ele.age >18
});
console.log(personResult);