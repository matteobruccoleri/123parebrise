
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


const { scrollTop, clientHeight } = document.documentElement;

//////////////////////////
// Animation: Autoplus //

const autoplus = document.querySelector('.autoplus');

window.addEventListener('scroll', () => {

  const topAutoplusToTopViewport = autoplus.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topAutoplusToTopViewport) - clientHeight * 0.9) {
    autoplus.classList.add('anim-y-top');
  };

});

///////////////////////////////////
// Animation: Nos Avantages //////

// Parcours-1
const cache1 = document.querySelector('.cache1');

window.addEventListener('scroll', () => {

  const topCache1ToTopViewport = cache1.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topCache1ToTopViewport) - clientHeight * 1) {
    cache1.classList.add('anim-x-right');
  };

});
// Parcours-2
const cache2 = document.querySelector('.cache2');

window.addEventListener('scroll', () => {

  const topCache2ToTopViewport = cache2.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topCache2ToTopViewport) - clientHeight * 1) {
    cache2.classList.add('anim-x-left');
  };

});

///////////////////////////////////////////
// Animation: Nos Avantages - title-img //
const avantagestitleSmile = document.querySelector(".container .title-img");
const avantages = document.querySelector(".container");

window.addEventListener('scroll', () => {
  
  const topAvantagesToTopViewport = avantages.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topAvantagesToTopViewport) - clientHeight * 0.6) {
    avantagestitleSmile.classList.add('rotate');
  };

});

///////////////////////////////////////////
// Animation: Nos Avantages - title-img //
const temoignagesTitleImg = document.querySelector(".temoignages .title-img");
const temoignages = document.querySelector(".temoignages");

window.addEventListener('scroll', () => {
  
  const topTemoignagesToTopViewport = temoignages.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topTemoignagesToTopViewport) - clientHeight * 0.6) {
    temoignagesTitleImg.classList.add('rotate');
  };

});

////////////////////////////////////////////////////////////
// Animation: Il vous reste des questions - title-img //
const questionsTitleImg = document.querySelector(".questions .title-img");
const questions = document.querySelector(".questions");

window.addEventListener('scroll', () => {
  
  const topQuestionsToTopViewport = questions.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topQuestionsToTopViewport) - clientHeight * 0.6) {
    questionsTitleImg.classList.add('rotate');
  };

});

////////////////////////////////////////////////////////////
// Animation: Une entreprise française - title-img //
const entrepriseTitleImg = document.querySelector(".entreprise-content .title-img");
const entreprise = document.querySelector(".entreprise-content");

window.addEventListener('scroll', () => {
  
  const topEntrepriseToTopViewport = questions.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topEntrepriseToTopViewport) - clientHeight * 0.1) {
    entrepriseTitleImg.classList.add('rotate');
  };

});



////////////////////////////////////////////
// Animaion: Il vous reste des questions - accordeon //

const accordionItemTitles = document.querySelectorAll(".accordion-item-title");

accordionItemTitles.forEach(accordionItemTitle => {
  accordionItemTitle.addEventListener("click", event => {

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

////////////////////////////////////////////////////////////
// Carousel: + 40 000 Avis positif, Quelques témoignages //



