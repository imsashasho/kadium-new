{
  const accordionBtns = document.querySelectorAll('.questions-card__title');

  accordionBtns.forEach(accordion => {
    accordion.addEventListener('click', () => {
      accordion.classList.toggle('is-active');

      let content = accordion.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}
