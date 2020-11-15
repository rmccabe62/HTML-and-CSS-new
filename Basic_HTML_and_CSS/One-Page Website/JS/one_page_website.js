
//Retrieves an element by id, sets up the light box, and sets display to block style
function openModal()    {
  document.getElementById("myModal").style.display ="block";
}

//Retrieves an element by id and closes the light box
function closeModal()   {
  document.getElementById("myModal").style.display = "none";
}

//Defines variable and assigns value to it and sets up the slideshow
var slideIndex = 1;
showSlides(slideIndex);

//Displays the slideshow one image at a time by incrementing each slide to be displayed
function plusSlides(n)  {
  showSlides(slideIndex += n);
}

//Sets the curent slide in slideshow
function currentSlide(n)    {
  showSlides(slideIndex = n);
}

//Defines a variable for iteration of slides, retrieves element by classname and runs the slideshow
function showSlides(n)  {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length)  {slideIndex = 1}
  if (n < 1)  {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++)  {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}