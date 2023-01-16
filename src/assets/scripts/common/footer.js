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
};

if (footer) {
  initFooter();
}
