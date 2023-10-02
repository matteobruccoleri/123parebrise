const { scrollTop, clientHeight } = document.documentElement;

//////////////////////////
// Animation: Autoplus //
/*
const autoplus = document.querySelector('.autoplus');

window.addEventListener('scroll', () => {

  const topAutoplusToTopViewport = autoplus.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topAutoplusToTopViewport) - clientHeight * 0.9) {
    autoplus.classList.add('anim-y-top');
  };

});
*/
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
// Animation: Quelques témoignages - title-img //
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
const entrepriseTitleImg = document.querySelector(".entreprise-title .title-img");
const entreprise = document.querySelector(".entreprise-title");

window.addEventListener('scroll', () => {
  
  const topEntrepriseToTopViewport = entreprise.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topEntrepriseToTopViewport) - clientHeight * 0.6) {
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

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {delay: 4000},
  loop: true,
  draggable: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      768: {
          slidesPerView: 2,
          spaceBetween: 30
      }, 
      1024: {
          slidesPerView: 3,
          spaceBetween: 30
      }
  }
});        
            