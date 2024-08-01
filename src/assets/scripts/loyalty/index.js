/* eslint-disable arrow-parens */
const cardsContainer = document.querySelector('.loyalty-row');
const cards = cardsContainer.querySelectorAll('.loyalty-item');
const popupWithLi = document.querySelector('.loyalty-item__list');
const popupList = document.querySelector('.loyalty-info-row');

cardsContainer.addEventListener('click', e => {
  const activeCard = e.target.closest('.loyalty-item');

  if (!activeCard) return;

  cards.forEach(card => card.classList.remove('loyalty-item__active'));
  cards.forEach((card, i) => card.setAttribute('data-position', i + 1));

  // Main Cards
  // Ширина одного эемента
  const elementWidth = activeCard.offsetWidth;
  // Высота одного эемента
  const elementHeight = activeCard.offsetHeight;
  // Позиция элемента в ряду
  const positionElementInRow = activeCard.getAttribute('data-position');
  // Кол-во элементов в ряду
  const countElementsInOneRow = Math.round(cardsContainer.offsetWidth / elementWidth);
  // Позиция элемента в колонке
  const positionElementInColumn = Math.ceil(positionElementInRow / countElementsInOneRow);
  //____________________________________________________
  // console.log('Количество єлементов в одном ряду: ', countElementsInOneRow);
  // console.log('Количество столбцов: ', Math.round(cardsContainer.offsetHeight / elementHeight));
  // console.log('Позиция элемента в колонке: ', positionElementInColumn);
  // console.log('Позиция элемента: ', positionElementInRow);
  // console.log('Ширина элемента: ', elementWidth);
  // console.log('Высота элемента: ', elementHeight);
  // _____________________________________________________
  // Main Cards End

  // ------ LI in Info Row -----------
  // Количество li в попапе
  const countLiInPopup = popupWithLi.querySelector('.loyalty-info-row').children.length;
  // Ширина попапа
  const popupListWidth = cardsContainer.offsetWidth;
  // Ширина одного элемента
  const popupItemWidth = popupList.children[0].offsetWidth;
  const popupItemHeight = popupList.children[0].offsetHeight;
  // Кол-во элементов в ряду
  const countPopupElementsInOneRow = Math.round(cardsContainer.offsetWidth / popupItemWidth);
  // Количество колонок
  const countColumnsInPopupList = Math.round(popupList.offsetHeight / popupItemHeight);

  // console.log('____________________________');

  const test = 4 * countColumnsInPopupList;
  const test2 = Math.round((popupItemHeight / elementHeight) * countColumnsInPopupList) + 2;
  console.log('popupList.offsetHeight: ', popupList.offsetHeight);
  console.log('popupItemHeight ', popupItemHeight);
  console.log('rowEnd ', test2);

  // Warn End
  popupWithLi.style.display = 'grid';
  popupWithLi.style.gridColumnStart = 1;
  popupWithLi.style.gridColumnEnd = countElementsInOneRow + 1;
  popupWithLi.style.gridRowStart = positionElementInColumn + 1;
  popupWithLi.style.gridRowEnd = test2;

  activeCard.classList.add('loyalty-item__active');
});

// let style = window.getComputedStyle(activeCard);
// let cardwidth = style.getPropertyValue('width');
// let cardheight = style.getPropertyValue('height');
// console.log('cardwidth:', cardwidth);
// console.log('cardheight:', cardheight);
