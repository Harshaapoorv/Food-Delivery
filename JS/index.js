$(".owl-carousel").owlCarousel({
    loop : true,
    margin : 50,
    responsiveClass : true,
    responsive : {
        0 :{
            items : 1,
        },
        600 : {
            items : 2,
        },
        1000 : {
            items : 3,
        }
    }
})

var carousel = $('.owl-carousel');
carousel.owlCarousel()
$('.left').click(function(){
    carousel.trigger('prev.owl.carousel');
})
$('.right').click(function(){
    carousel.trigger('next.owl.carousel');
})


var cart = document.getElementById("cart-modal")

var body = document.querySelector('body');

function openCart() {
    cart.style.display = 'block';
    body.style.overflow = 'hidden';
}

function closeCart() {
    cart.style.display = 'none';
    body.style.overflow = 'auto';
    cart.style.overflow = 'auto';
}

var request = document.getElementById("request-modal");

function openRequest() {
    
    request.style.display = 'block';
    body.style.overflow = 'hidden';
}

function closeRequest() {
    request.style.display = 'none';
    body.style.overflow = 'auto';
    request.style.overflow = 'auto';
}

var myVideo = document.getElementById("video1"); 
var playBtn = document.getElementById("playBtn");

myVideo.addEventListener('ended', function( evt ) {
    playBtn.style.display = "block";
});

        
function playPause() { 
    if (myVideo.paused) {
        myVideo.play();
        playBtn.style.display = "none";
    }
    else {
        myVideo.pause(); 
        playBtn.style.display = "block";
    } 
}

var menuList = document.getElementById("list-items");
menuList.style.maxHeight = "0px";
function functionname() {
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "200px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}

