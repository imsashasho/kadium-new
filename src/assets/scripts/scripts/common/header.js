import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

{
  const headerRef = document.querySelector('.header');
  const menuRef = document.getElementById('menu');
  const toggleBtnRef = document.getElementById('toggle-menu');

  gsap.registerPlugin(ScrollTrigger);
  window.addEventListener('scroll', evt => {
    scrollFunction();
  });
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      headerRef.classList.add('bg-header');
      headerRef.classList.remove('on');
      toggleBtnRef.classList.remove('on');
    } else {
      headerRef.classList.remove('bg-header');
    }
  }

  const toggleMenu = () => {
    toggleBtnRef.classList.toggle('on');
    headerRef.classList.toggle('on');
  };

  toggleBtnRef.addEventListener('click', toggleMenu);
}
