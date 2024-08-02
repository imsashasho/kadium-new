/* eslint-disable arrow-parens */
const cardsContainer = document.querySelector('.loyalty-row');
const cards = cardsContainer.querySelectorAll('.loyalty-item');
const popupWithLi = document.querySelector('.loyalty-item__list');
const popupList = document.querySelector('.loyalty-info-row');

cardsContainer.addEventListener('click', e => {
  const activeCard = e.target.closest('.loyalty-item');

  if (!activeCard) return;

  if (activeCard.classList.contains('loyalty-item__active')) {
    activeCard.classList.remove('loyalty-item__active');
    popupWithLi.style.display = 'none';
    return;
  }
  const $container = document.querySelector('.loyalty-row');
  const $cards = $container.querySelectorAll('.loyalty-item');

  
  const indexOfActiveCard = Array.from(cards).indexOf(activeCard);
  const $popup = $container.querySelector('.loyalty-item__list');
  
  const howManyCardsInRow = Math.round(getComputedStyle($container).gridTemplateColumns.split(' ').length);

  const inWhichRowIsActiveCard = Math.ceil((indexOfActiveCard + 1) / howManyCardsInRow);

  const rowEnd = inWhichRowIsActiveCard * howManyCardsInRow;
  const isLastRow = rowEnd > $cards.length;

  if (isLastRow) {
    $container.insertAdjacentElement('beforeend', $popup);
  } else {
    const $nextCard = $cards[rowEnd-1];
    $nextCard.insertAdjacentElement('afterend', $popup);
  }

  $popup.style.gridColumnStart = 1;
  $popup.style.gridColumnEnd = howManyCardsInRow + 1;
  $popup.style.gridRowStart = inWhichRowIsActiveCard + 1;
  $popup.style.gridRowEnd = inWhichRowIsActiveCard + 1;
  $popup.style.display = 'block';

  $cards.forEach(card => card.classList.remove('loyalty-item__active'));

  activeCard.classList.add('loyalty-item__active');

  console.log(getComputedStyle($container).gridTemplateColumns.split(' '));
  console.log('isLastRow', isLastRow);
  console.log('rowEnd', rowEnd);
  console.log('howManyCardsInRow', howManyCardsInRow);
  console.log('inWhichRowIsActiveCard', inWhichRowIsActiveCard);
  
  console.log('indexOfActiveCard:', indexOfActiveCard);

  
  

});


window.addEventListener('resize', () => {
  document.querySelectorAll('.loyalty-item__active').forEach(card => {
    card.click();
  });
});