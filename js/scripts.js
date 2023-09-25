// Nos avantages
// Animation Parcours

const { scrollTop, clientHeight } = document.documentElement;

/* Parcours 1*/
const cache1 = document.querySelector('.cache1');

window.addEventListener('scroll', () => {

  const topElementToTopViewport = cache1.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topElementToTopViewport) - clientHeight * 0.9) {
    cache1.classList.add('anim-x-right');
  };


});

/* Parcours 2*/
const cache2 = document.querySelector('.cache2');

window.addEventListener('scroll', () => {

  const topElementToTopViewport = cache2.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topElementToTopViewport) - clientHeight * 0.9) {
    cache2.classList.add('anim-x-left');
  };
});

// Il vous reste des questions
// Animaiona acordion
const accordionItemTitles = document.querySelectorAll(".accordion-item-title");

accordionItemTitles.forEach(accordionItemTitle => {
  accordionItemTitle.addEventListener("click", event => {
    
     
// Décommentez si vous souhaitez autoriser l'affichage d'un seul élément réduit à la fois !
    
//     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
//     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
//        currentlyActiveAccordionItemHeader.classList.toggle("active");
//        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
//      }

    accordionItemTitle.classList.toggle("active");
     const accordionItemText = accordionItemTitle.nextElementSibling;
     if(accordionItemTitle.classList.contains("active")) {
      accordionItemText.style.maxHeight = accordionItemText.scrollHeight + "px";
     }
     else {
      accordionItemText.style.maxHeight = 0;
     }
    
   });
});


// BESOIN D ETRE RASSUREE

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "right" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 10000 ms
  timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 10000);
}
autoPlay();


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


