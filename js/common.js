// Function to toggle the hamburger menu animation
function toggleMenuAnimation() {
  const icon = document.querySelector('.animated-icon2'); // Change to appropriate selector

  if (icon.classList.contains('open')) {
    icon.classList.remove('open');
  } else {
    icon.classList.add('open');
  }
}

// Click event listener for menu button
const menuButton = document.querySelector('.navbar-toggler');
menuButton.addEventListener('click', toggleMenuAnimation);