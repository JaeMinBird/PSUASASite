//remove bamboo on smaller windows
const elementsToRemove = document.querySelectorAll('.bamboo');

function removeElementsIfWidthBelowThreshold() {
  if (window.innerWidth <= 991) {
    elementsToRemove.forEach((element) => {
      element.remove();
    });
  }
}

// Call the function initially and add an event listener to handle window resizing
removeElementsIfWidthBelowThreshold();
window.addEventListener('resize', removeElementsIfWidthBelowThreshold);


//parallax for eboard cards
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelector('.hidden').classList.add('show');
    } else {
      entry.target.querySelector('.hidden').classList.remove('show');
    }
  });
});

const hiddenTrigger = document.querySelector('.hidetrig');
observer2.observe(hiddenTrigger); // always put this at the bottom because it causes errors