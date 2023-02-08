import FormMonster from '../../../pug/components/form/form';
import SexyInput from '../../../pug/components/input/input';
import * as yup from 'yup';
import i18next from 'i18next';
import { contactFormFooter} from './contactFormFooter';
import { contactPopup } from './contactPopup';


const footer = document.querySelector('footer');

const initFooter = () => {
  const footerUpRef = document.querySelector('.footer-up');

  function scrollToTop(e) {
    // Scroll to top logic
    e.preventDefault();
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }

footerUpRef.addEventListener('click', scrollToTop);

contactFormFooter(document.querySelector('#call-form'));

};

if (footer) {
  initFooter();
}
