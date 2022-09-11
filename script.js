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
const gravity = 9.81
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

console.log(fn + " " +on + " " + ln)
console.log ( fn + " " + on + " " + ln  + " "  + 'is a good man')


// template literals
console.log(`${fn} ${on} ${ln} is a good man `)


let message = 'it\'s a good morning in africa'
console.log(message)
let message2 = "it's a good morning in africa"
console.log(message2)


let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam pariatur optio repudiandae, eligendi \n\tnisi veniam saepe neque et quis. Doloremque iure odit laborum, illum minima et earum quibusdam esse ad vero, \n\tdicta quod adipisci perferendis nam error aut porro voluptas! Vel iste dolorem iure expedita voluptates natus, voluptate id."
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

// negative
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
document.getElementById('lasop10').innerHTML= raimi.getMonth() + 1
document.getElementById('lasop12').innerHTML= raimi.getDay()
document.getElementById('lasop13').innerHTML= raimi.getTime()
document.getElementById('lasop14').innerHTML= raimi.getMinutes()



// alert('I\'m a Javascript')

const birthday2 = new Date('1995-12-17T03:24:00')   // This is ISO8601-compliant and will work reliably
const birthday3 = new Date(1995, 11, 17)            // the month is 0-indexed
const birthday4 = new Date(1995, 11, 17, 3, 24, 0)
const birthday5 = new Date(628021800000) 


document.getElementById('lasop4').innerHTML= birthday2
document.getElementById('lasop5').innerHTML= birthday3
document.getElementById('lasop6').innerHTML= birthday5


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
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
console.log(date)
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
console.log(date)

document.getElementById('lasop7').innerHTML= date
document.getElementById('lasop8').innerHTML= [month, day, year]
document.getElementById('lasop9').innerHTML= [hour, minutes, seconds]
document.getElementById('lasop10').innerHTML= [month, day, year]

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
document.getElementById("demo3").innerHTML = d;

//date(milliseconds)
const d1 = new Date(1662360609007);
document.getElementById("demo").innerHTML = d1;

//date string (the date must be in quotation)
const d2 = new Date("2015-03-25");
document.getElementById("demo1").innerHTML = d2;

// date format (YY,MM,DD,HH,MM,SS,MS)
const d3 = new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById("demo2").innerHTML = d3;

// set full-year
const d4 = new Date();
d4.setFullYear(2020);
document.getElementById("demo4").innerHTML = d4;

const d5 = new Date();
d5.setFullYear(2020, 10, 3);
document.getElementById("demo5").innerHTML = d5;

//set full year (6 months ago)
const d6 = new Date();
d6.setFullYear(d6.getFullYear(), d6.getMonth() - 6);
document.getElementById("demo6").innerHTML = d6;


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
document.getElementById("demo7").innerHTML = greeting;


// class 05-09-2022
// conditional statement;

if(raimi.getFullYear() == 2022){
  document.getElementById('lasop7').innerHTML = `The current year is 2022`
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

// if else if else
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

weather == 'rainy' ? console.log(`Don't forget your umbrella`) : console.log(`No need for umbrella`)

// let Num = prompt(`enter a number`)
// if (Num % 2 == 0){
//   alert (`${Num} is an even number`)
// } else {
//   alert(`${Num} is an odd number`)
// }
// Num == (Num % 2 == 0) ? console.log(`${Num} is an even number`) : console.log(`${Num} is an odd number`)

let A = 10;
let B = 20;
B > A ? console.log('B is greater than A'): console.log('A is less than B')

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
console.log(str.length)
console.log(numbers.length -1)

str[0] = 'samuel'
str[3] = 'tayo'
str[6] = 654
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


//classlist.push('okeoghene') //.push add an array to the last
//console.log(classlist)
//
//classlist.pop() // .pop remove the last item in the array
//console.log(classlist)
//
//classlist.shift() // .shift remove the first item(0 index) 
//console.log(classlist)
//
//classlist.unshift('raimi') // .unshift add a new item to the first (0)  //index of an array
//console.log(classlist)

// classlist.reverse() // .Reverses the elements in an array in place.
//console.log(classlist.reverse())

// classlist.sort() //.sort rearrange array alphabetically
//console.log(classlist.sort())

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
for(let i = 1; i < 50; i++){
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
  sum = sum + e
  console.log(sum)
}
console.log(sum)
//ass
// use for loop to iterate btw 0 and 100; print the sum of all even numbers
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
 
    let fruitType1 = ['Oranges',' Apples', 'Bananas', ' Cherries', 'Mangoes', 'Papayas']
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

function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${howMany(musicTypes)} option(s).`);
});
/////////////////////////////////////////////////////////////
/////////////////ASSIGNMENTS SOLUTION//////////////////
//Ass1//
for (let grade = 0; grade <= 100; grade++){
  if(grade >= 80 ){
    console.log(`${grade}: Grade A`); continue;
  } if(grade >= 70){
    console.log(`${grade}: Grade B`); continue;
  } if(grade >= 60){
    console.log(`${grade}: Grade C`); continue;
  } if(grade >= 50){
    console.log(`${grade}: Grade D`); continue;
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

//Ass3//
let ash = ['', '', '', '', '#', '##','###','####','#####','######', '#######'];
let Ash = []
for (let m = 0; m < ash.length; m++){
  Ash.push(ash[m]);
  if (m >= 4){
    console.log(`${m}-      ${Ash[m]}`)
  }
} 
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
  addUp = addUp + i
} console.log(addUp);
//Ass6//
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i<= 100; i++){
  if(i % 2 == 0){
    evenSum = evenSum+ i
  }
  if(i % 2 == 1){
    oddSum = oddSum + i
  }
}console.log(oddSum);
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
for (let i = fruit.length - 1; i >= 0; i--){
  console.log(fruit[i]);
};
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
