// Obtain the img element, and assign it to the movie variable 
let movie

// Obtain the 'change-border' button, and assign it to the changeBorder variable
let changeBorder

//DO NOT CHANGE THE FOLLOWING CODE
changeBorder.addEventListener("click", function() {
  if (movie.style.borderRadius == "0px") {
    movie.style.borderRadius = "25px"
  }
  else {
    movie.style.borderRadius = "0px"
  }
})