const slides = document.querySelectorAll(".slides img") //select all elements with class slides that are images
let slideIndex = 0;
let intervalId = null;

//initializeSlider()
document.addEventListener("DOMContentLoaded", initializeSlider); //wait for document object models (html) to load then display

function initializeSlider() {

    if(slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000); //5000 milliseconds = 5 seconds
    }
    //console.log(intervalId);
}

function showSlide(index)  {

    if(index >= slides.length) {
        slideIndex = 0; //case where index bigger than slide length from slideIndex++
    }
    else if(index < 0) {
        slideIndex = slides.length -1; //case where index negative fromr slideIndex--
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide") //stops displaying current slide
    });
    slides[slideIndex].classList.add("displaySlide")
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex)
}

function nextSlide() {
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex)
}