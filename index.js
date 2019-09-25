var slideIndex = 1;
var mobileIndex = 1;

showSlides(slideIndex);
currentMobile(mobileIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function mobileSlides(n) {
    currentMobile(mobileIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    //get the div's with class mySlides
    var slides = document.getElementsByClassName("mySlides");
    //get the div's with class dot
    var dots = document.getElementsByClassName("dot");
    //if it goes past slides length go back to one
    if (n > slides.length) { slideIndex = 1 }
    //if it goes under one go to last slide
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //show current slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function currentMobile(n) {
    var i;
    //get the div's with class mySlides
    var mobileSlides = document.getElementsByClassName("mySlides-mobile");
    //get the div's with class dot
    var mobileDots = document.getElementsByClassName("dot-mobile");
    //if it goes past slides length go back to one
    if (n > mobileSlides.length) { mobileIndex = 1 }
    //if it goes under one go to last slide
    if (n < 1) { mobileIndex = mobileSlides.length }
    for (i = 0; i < mobileSlides.length; i++) {
        mobileSlides[i].style.display = "none";
    }
    for (i = 0; i < mobileDots.length; i++) {
        mobileDots[i].className = mobileDots[i].className.replace(" active", "");
    }
    //show current slide
    mobileSlides[mobileIndex - 1].style.display = "block";
    mobileDots[mobileIndex - 1].className += " active";
}

function myFunction(x) {
    x.classList.toggle("change");
}