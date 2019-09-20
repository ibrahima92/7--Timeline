const contents = document.querySelectorAll('.timeline-content');

window.addEventListener('scroll', debounce(effectOnScroll));

function effectOnScroll() {
  // Loop through contents and add the animation entrance
  contents.forEach(content => {
    if (isVisible(content)) {
      content.classList.add('from-bottom');
    }
  });
}

function isVisible(content) {
  // Get the current element position compared to the window height
  const contentPosition =
    content.getBoundingClientRect().top - window.innerHeight;
  const distanceFromTop = -200;
  return contentPosition < distanceFromTop ? true : false;
}

// This function handle the scroll performance issue
function debounce(func, wait = 20, immediate = true) {
  let timeOut;
  return function() {
    let context = this,
      args = arguments;
    var later = function() {
      timeOut = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeOut;
    clearTimeout(timeOut);
    timeOut = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
