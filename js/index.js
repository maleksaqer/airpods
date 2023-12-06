document.addEventListener("DOMContentLoaded", function () {
    var homeLink = document.getElementById("homeLink");
    var contactLink = document.getElementById("contactLink");
    var aboutLink = document.getElementById("aboutLink");

    homeLink.addEventListener("click", function (event) {
        event.preventDefault();
        setActiveLink(homeLink);
        // Additional logic or page navigation for Home
    });

    webshopLink.addEventListener("click", function (event) {
        setActiveLink(webshopLink);
    });

    contactLink.addEventListener("click", function (event) {
        setActiveLink(contactLink);
        // Additional logic or page navigation for Contact
    });

    aboutLink.addEventListener("click", function (event) {
        setActiveLink(aboutLink);
        // Additional logic or page navigation for About Us
    });

    // Function to set the active link style
    function setActiveLink(activeLink) {
        var links = document.getElementsByClassName("nav-link");

        // Reset styles for all links
        for (var i = 0; i < links.length; i++) {
            links[i].classList.remove("active");
        }

        // Set the active style for the clicked link
        activeLink.classList.add("active");
    }
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesFade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}