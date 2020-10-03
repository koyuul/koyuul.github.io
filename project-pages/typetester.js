var slide_index = 1;
showSlides(slide_index);

function plusSlides(n){
    showSlides(slide_index += n);
}

function currentSlide(n){
    showSlides(slide_index = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slide_index = 1}
    if (n < 1) {slide_index = slides.length}
    for (i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slide_index-1].style.display = "block";
    dots[slide_index-1].className += " active"
}