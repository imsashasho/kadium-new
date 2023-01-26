import { popupFactory } from './popupFactory';

export const contactPopup = popupFactory(document.querySelector('.contact-popup'));
const closeBtnRef = document.querySelector('.thank-you-popup__btn');

closeBtnRef.addEventListener('click', () => {
  contactPopup.close();
});
