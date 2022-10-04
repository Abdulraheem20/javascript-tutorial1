let url = 'https://api.kanye.rest/'
fetch(url)
.then(response =>{
    // console.log(response.json)
    return response.json()
})
.then(data => { console.log(data)
    document.querySelector('.kanyeAPI').innerHTML = data.quote
})
.catch(err => {console.log(err)})

let fakestore = 'https://fakestoreapi.com/products/'
fetch(fakestore)
.then(res => {return res.json()})
.then(data => {console.log(data)
    let display = '';
    if (data){
        data.forEach(element => {
            display += `<div class="sub-container">
            <h3>${element.category}</h3>
            <img src="${element.image}" alt="shirt1" class="image1">
            <h2>${element.title.slice(0, 20)}</h2>
            <p${element.description.slice(0, 50)}</p>
            <h4>Price:$${element.price}</h4>
            <button class= 'addcart'>Add to cart</button>
        </div>`
        })
    }
    document.querySelector('.main-container').innerHTML = display
})
.catch(err => document.querySelector('.error').innerHTML = '404 error, pls check you internet connection')


// jokes
let jokes = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas '
fetch(jokes)
.then(res => {return res.json()})
.then(data => {console.log(data)
    if(data.joke){
        document.querySelector('.jokeAPI').innerHTML = `${data.joke}  <br> <p><i> -Joke API</i> : single joke</p>`;
    } else{
        document.querySelector('.jokeAPI').innerHTML = `${data.setup} <br> ${data.delivery} <br> <p><i> -Joke API</i> : Twopart joke</p>`;
    }
})
const radio = document.getElementById('radio');
const any = document.getElementById('any').value;
const custom = document.getElementById('custom').value;
let requestedJoke = document.querySelector('.requestedJoke');

const jokeRequestbtn = document.querySelector('#jokeRequest');

const category = document.querySelector('input[name="category"]:checked');
jokeRequestbtn.addEventListener('click', (e)=>{
    
    if(category.value == `Any` || category.value == `Custom`){
        console.log(category.value)
        jokes = `https://v2.jokeapi.dev/joke/Any`;
        fetch(jokes)
        .then(res => {return res.json()})
        .then(data => {console.log(data)
        if(data.joke || data.setup){
            requestedJoke = `${data.setup} <br> ${data.delivery} <br> <p><i> -Joke API</i> : Twopart joke</p>`
            requestedJoke.innerHTML = `${data.joke} <br> <p><i> -Joke API</i> : single joke</p>`;
        } else if(data.setup)
        requestedJoke = `${data.setup} <br> ${data.delivery} <br> <p><i> -Joke API</i> : Twopart joke</p>`
        })
    } else if(category.value == `Any`) {
        requestedJoke = `ANY Pls select a category!`
    }
    e.preventDefault();
})
// console.log(category.value)




// weather
let userInput = document.querySelector('.weatherValue input')
let apiKey = 'd554db9795ae3112dfa594c1ec3be857'

let searchbtn = document.getElementById('weather')
 
let weaterData = '';
searchbtn.addEventListener('click', function(e){
    e.preventDefault()
    let weather = `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=${apiKey}`
    fetch(weather)
    .then(res => {
        return res.json()
    })
    .then(data => {console.log(data)
        document.querySelector('.location').innerHTML = `${data.name}, ${data.sys.country}.`;
        document.querySelector('.weather-condition').innerHTML = `Main: ${data.weather['0'].main}. Description: ${data.weather['0'].description}`;

    })
    // document.querySelector('.weatherValue input').innerHTML = ''
})

// console.log(weather)


















// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// let appid = 'd554db9795ae3112dfa594c1ec3be857'
// let endpoint = 'https://api.openweathermap.org/data/2.5/weather'
// let paraLon = '6.6252'
// let paraLat = '3.3441'
// let path = 'weather'
// let all = (endpoint + path + paraLon + paraLat + appid)
// fetch(all)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))