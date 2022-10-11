$(document).ready(function(){

    $("#humble").text('My name is Humble');
// jQuery('#humble').text('Humble')
console.log($('h1'));


jQuery('#humble').css('font-size', '100px')
jQuery('#humble').css('text-decoration', 'line-through');

// $('.container .row .box').addClass('addBox')
$('.container .row .box').addClass('addBox addNewBox')

$('.attrr img').attr('src', './images/profile-pic (3).png').attr('alt', 'image').attr('class', 'ellipse')

$('h1:nth(2)').text('Golang')
$('h1:nth(3)').text('React')
$('h1:nth(4)').text('Python')


$('#btn').text('Click here').click(()=>{
    alert('You clicked here')
})
$('#btn1').html('Click me').on('click', ()=>{
    console.log('Click me btn-1');
})
$('#btn2').text('Anime').on('click',()=>{
    $('.purple').addClass('blue')
})

$('#Animate').on('click', ()=>{
    // $('.display').hide()
    // $('.display').show() (MUST HAVE DISPLAY NONE IN CSS)
    // $('.display').toggle()
    // $('.display').fadeIn('slow')
    // $('.display').fadeOut('slow')
    // $('.display').fadeToggle('slow')
    // $('.display').slideDown()
    // $('.display').slideUp()
    $('.display').slideToggle()

})



$('.images img').click(function(){
    $('.show .show1').attr('src', $(this).attr('src'))
})


$('.text p').each(function(){
    $('.text p').on('click', function(){
        if(this.style.color !== 'orange'){
            this.style.color = 'cyan'
        } else{
            this.style.color = 'black'
        }
    })
})




})