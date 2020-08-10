let slideBox = document.querySelectorAll(".slideBox");
let slide = document.querySelector(".slide");
console.log(slideBox.length);
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let size = slideBox[0].clientWidth;
console.log(size);

currentSlide = 0;



next.addEventListener("click", function() {
	showSlides(currentSlide += 1);
});

prev.addEventListener("click", function() {
	showSlides(currentSlide += -1);
});


function showSlides(n) {

  slide.style.transform = 'translateX(' + (-size*currentSlide) + 'px)'; 	

  	if(slideBox[currentSlide].classList.contains("last")) {
  		
  	}

}