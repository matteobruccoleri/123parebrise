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

  if (scrollTop > (scrollTop + topAvantagesToTopViewport) - clientHeight * 0.5) {
    avantagestitleSmile.classList.add('rotate');
  };

});

///////////////////////////////////////////
// Animation: Nos Avantages - title-img //
const temoignagesTitleImg = document.querySelector(".temoignages .title-img");
const temoignages = document.querySelector(".temoignages");

window.addEventListener('scroll', () => {
  
  const topTemoignagesToTopViewport = temoignages.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topTemoignagesToTopViewport) - clientHeight * 0.5) {
    temoignagesTitleImg.classList.add('rotate');
  };

});

////////////////////////////////////////////////////////////
// Animation: Il vous reste des questions - title-img //
const questionsTitleImg = document.querySelector(".questions .title-img");
const questions = document.querySelector(".questions");

window.addEventListener('scroll', () => {
  
  const topQuestionsToTopViewport = questions.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topQuestionsToTopViewport) - clientHeight * 0.5) {
    questionsTitleImg.classList.add('rotate');
  };

});

////////////////////////////////////////////////////////////
// Animation: Une entreprise française - title-img //
const entrepriseTitleImg = document.querySelector(".entreprise-content .title-img");
const entreprise = document.querySelector(".entreprise-content");

window.addEventListener('scroll', () => {
  
  const topEntrepriseToTopViewport = questions.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topEntrepriseToTopViewport) - clientHeight * 0.5) {
    entrepriseTitleImg.classList.add('rotate');
  };

});



////////////////////////////////////////////
// Animaion: Il vous reste des questions - accordeon //

const accordionItemTitles = document.querySelectorAll(".accordion-item-title");

accordionItemTitles.forEach(accordionItemTitle => {
  accordionItemTitle.addEventListener("click", event => {
     
// Décommentez si on souhaite l'affichage d'un seul élément réduit à la fois !
    
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

////////////////////////////////////////////////////////////
// Carousel: + 40 000 Avis positif, Quelques témoignages //



