function rate(stars) {
  // Remove 'clicked' class from all stars
  const allStars = document.querySelectorAll('.star');
  allStars.forEach(star => star.classList.remove('clicked'));

  // Add 'clicked' class to the clicked stars
  for (let i = 0; i < stars; i++) {
    allStars[i].classList.add('clicked');
  }

  // You can also send the rating to the server or perform any other actions here
  // For example, you can use AJAX to send the rating to the server.
  // Just replace the following line with your desired functionality.
  console.log('Rated:', stars);
}
