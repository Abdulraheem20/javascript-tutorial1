let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');


const countdown =() =>{
    let current = new Date();
let future = new Date('22 september 2022');
let diff = future - current;
//console.log(diff);

const displaydays = Math.floor(diff/24/3600/1000);
//console.log(`0${displaydays}`);

const displayhours = Math.floor(diff/3600/1000) % 24;
//console.log(`0${displayhours}`);

const displayminutes = Math.floor(diff/60/1000) % 60;
//console.log(displayminutes);

const displayseconds = Math.floor(diff/1000) % 60;
//console.log(displayseconds);

if (displaydays < 10){
    days.innerHTML = `0${displaydays}`;
} else{
    days.innerHTML = displaydays;
}
if (displayhours < 10){
    hours.innerHTML = `0${displayhours}`;
} else{
    hours.innerHTML = displayhours;
}
if (displayminutes < 10){
    minutes.innerHTML = `0${displayminutes}`;
} else{
    minutes.innerHTML = displayminutes;
}
if (seconds < 10){
    seconds.innerHTML = `0${displayseconds}`;
} else{
    seconds.innerHTML = displayseconds;
}
};

setInterval(countdown,1000);