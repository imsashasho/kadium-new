import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { intersectionObserver } from '../common/intersectionObserver';
// import { preloader } from '../common/loader';

gsap.registerPlugin(ScrollTrigger);

{
  gsap
    .timeline({
      scrollTrigger: {
        trigger: 'section.intro',
        scrub: 1,
        start: '0% top',
        end: '60% top',
        // markers: true,
      },
    })
    // .to('.intro-img', {
    //   // y: 150,
    //   scale: 1.1,
    //   autoAlpha: 1,
    // })
    .to('.intro-inner__text', { autoAlpha: 0, duration: 0.25 }, '<');

  const animationItemSelectors = ['.gallery-title', '.documents-title'];

  //   preloader.onRemove(() => {
  //     animationItemSelectors.forEach(selector => {
  //       intersectionObserver(selector, () => {
  //         splitToLinesAndFadeUp(selector);
  //       });
  //     });
  //   });

  animationItemSelectors.forEach(selector => {
    intersectionObserver(selector, () => {
      splitToLinesAndFadeUp(selector);
    });
  });

  function splitToLinesAndFadeUp(selector) {
    const elementRef = document.querySelector(selector);
    let mathM = elementRef.innerHTML.match(
      /<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g,
    );
    if (mathM === null) return;
    mathM = mathM.map(el => `<span style="display:inline-flex"><span>${el}</span></span>`);
    elementRef.innerHTML = mathM.join(' ');
    gsap.set(elementRef, { overflow: 'hidden', opacity: 1 });
    gsap.set(elementRef.children, { overflow: 'hidden' });
    gsap.set(elementRef.querySelectorAll('span>span'), {
      overflow: 'initial',
      display: 'inline-block',
    });
    const tl = gsap
      .timeline()
      .fromTo(
        elementRef.querySelectorAll('span>span'),
        { yPercent: 100 },
        {
          yPercent: 0,
          stagger: 0.05,
          duration: 1,
          opacity: 1,
          ease: 'power4.out',
        },
      )
      .add(() => {
        elementRef.innerHTML = elementRef.textContent;
      });
  }

  function clipPathEntry(selector, scroller, effectConfig = {}, gsap, cb = () => {}) {
    const startClip = 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)';
    const endClip = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
    document.querySelectorAll(selector).forEach(text => {
      const tl = gsap
        .timeline({
          // paused: true,
          scrollTrigger: {
            trigger: text,
            scroller: scroller || null,
            once: true,
          },
        })
        .fromTo(
          text,
          { clipPath: startClip, webkitClipPath: startClip },
          {
            clipPath: endClip,
            webkitClipPath: endClip,
            duration: 1.5,
            delay: 0.3,
            ease: 'power4.out',
            clearProps: 'transform',
            ...effectConfig,
          },
        )
        .add(cb);
    });
  }

  clipPathEntry('.about-card--large', document.body, {}, gsap);

  gsap.set('.general-card--small', {
    yPercent: 10,
    opacity: 0,
  });

  gsap.set('.general-card--large', {
    yPercent: 10,
    opacity: 0,
  });

  document.addEventListener('DOMContentLoaded', () => {
    ScrollTrigger.batch('.general-card-container', {
      start: 'top 90%',
      end: 'bottom 5%',
      onEnter: batch => {
        batch.forEach((card, index) => {
          const generalCard1 = card.querySelectorAll('.general-card--small');
          const generalCard2 = card.querySelectorAll('.general-card--large');
          const chart_tl = gsap.timeline();
          chart_tl.to(
            generalCard1,
            {
              opacity: 1,
              yPercent: 0,
              stagger: 0.2,
              delay: index * 0.3,
              ease: Power3.easeOut,
              duration: 0.8,
            },
            0.1,
          );
          chart_tl.to(
            generalCard2,
            {
              opacity: 1,
              yPercent: 0,
              stagger: 0.2,
              delay: index * 0.3,
              ease: Power3.easeOut,
              duration: 0.8,
            },
            0.1,
          );
        });
      },
      once: true,
    });
  });

  gsap.set('.card-list__item', {
    xPercent: 30,
    opacity: 0,
  });

  document.addEventListener('DOMContentLoaded', () => {
    ScrollTrigger.batch('.card-list', {
      start: 'top 80%',
      end: 'bottom 10%',
      onEnter: batch => {
        batch.forEach((card, index) => {
          const listCard = card.querySelectorAll('.card-list__item');
          const chart_tl = gsap.timeline();
          chart_tl.to(
            listCard,
            {
              opacity: 1,
              xPercent: 0,
              stagger: 0.2,
              delay: index * 0.3,
              ease: Power3.easeOut,
              duration: 0.8,
            },
            0.8,
          );
        });
      },
      once: true,
    });
  });

  gsap.set('.numbers-card--large', {
    opacity: 0,
    yPercent: 20,
    scale: 0.9,
  });
  gsap.set('.numbers-card--colored__container', {
    yPercent: -100,
    opacity: 0,
  });

  document.addEventListener('DOMContentLoaded', () => {
    ScrollTrigger.batch('.numbers-row', {
      start: 'top 80%',
      end: 'bottom 10%',
      onEnter: batch => {
        batch.forEach((card, index) => {
          // const img = card.querySelectorAll('.conditions-card-img');
          const container1 = card.querySelectorAll('.numbers-card--large');
          const container2 = card.querySelectorAll('.numbers-card--colored__container');
          const chart_tl = gsap.timeline();
          chart_tl.to(
            container1,
            {
              opacity: 1,
              yPercent: 0,
              scale: 1,
              delay: index * 0.2,
              ease: Power3.easeOut,
              duration: 1,
            },
            0.4,
          );
          chart_tl.to(
            container2,
            {
              opacity: 1,
              yPercent: 0,
              stagger: 0.2,
              delay: index * 0.2,
              ease: Power3.easeOut,
              duration: 0.8,
            },
            0.8,
          );
        });
      },
      once: true,
    });
  });

  gsap.set('.gallery-slider__item', {
    xPercent: 30,
    opacity: 0,
  });

  document.addEventListener('DOMContentLoaded', () => {
    ScrollTrigger.batch('.gallery-slider__wrp', {
      start: 'top 80%',
      end: 'bottom 10%',
      onEnter: batch => {
        batch.forEach((card, index) => {
          const listCard = card.querySelectorAll('.gallery-slider__item');
          const chart_tl = gsap.timeline();
          chart_tl.to(
            listCard,
            {
              opacity: 1,
              xPercent: 0,
              stagger: 0.2,
              delay: index * 0.3,
              ease: Power3.easeOut,
              duration: 0.6,
            },
            0.8,
          );
        });
      },
      once: true,
    });
  });

  gsap.set('.documents-card', {
    yPercent: -100,
    opacity: 0,
  });

  document.addEventListener('DOMContentLoaded', () => {
    ScrollTrigger.batch('.documents-list', {
      start: 'top 80%',
      end: 'bottom 10%',
      onEnter: batch => {
        batch.forEach((card, index) => {
          // const img = card.querySelectorAll('.conditions-card-img');
          const documentCard = card.querySelectorAll('.documents-card');
          const chart_tl = gsap.timeline();
          chart_tl.to(
            documentCard,
            {
              opacity: 1,
              yPercent: 0,
              stagger: 0.2,
              delay: index * 0.2,
              ease: Power3.easeOut,
              duration: 0.8,
            },
            0.8,
          );
        });
      },
      once: true,
    });
  });

  gsap.set('.questions-card', {
    xPercent: -20,
    opacity: 0,
  });

  document.addEventListener('DOMContentLoaded', () => {
    ScrollTrigger.batch('.questions-list', {
      start: 'top 80%',
      end: 'bottom 10%',
      onEnter: batch => {
        batch.forEach((card, index) => {
          const documentCard = card.querySelectorAll('.questions-card');
          const chart_tl = gsap.timeline();
          chart_tl.to(
            documentCard,
            {
              opacity: 1,
              xPercent: 0,
              stagger: 0.2,
              delay: index * 0.3,
              ease: Power3.easeOut,
              duration: 0.8,
            },
            0.8,
          );
        });
      },
      once: true,
    });
  });

  //   gsap.set('.map-navigation', {
  //     opacity: 0,
  //     xPercent: -30,
  //     scale: 0.8,
  //   });
  //   gsap.set('.sale-card', {
  //     xPercent: -30,
  //     opacity: 0,
  //   });

  //   gsap.set('.questions-form-field', {
  //     opacity: 0,
  //     xPercent: -50,
  //     scale: 0.9,
  //   });

  //   gsap.set('.answers-slider', {
  //     opacity: 0,
  //     xPercent: -20,
  //   });

  //   document.addEventListener('DOMContentLoaded', () => {
  //     ScrollTrigger.batch('.map-navigation, .sale-card, .questions-form-field, .answers-slider', {
  //       start: 'top bottom-=150px',
  //       end: 'bottom 10%',
  //       onEnter: batch => {
  //         batch.forEach((card, index) => {
  //           const chart_tl = gsap.timeline();
  //           chart_tl.to(
  //             card,
  //             {
  //               opacity: 1,
  //               xPercent: 0,
  //               scale: 1,
  //               delay: index * 0.1,
  //               ease: Power4.easeOut,
  //               duration: 1.3,
  //             },
  //             0.4,
  //           );
  //         });
  //       },
  //       once: true,
  //     });
  //   });

  //   // gsap.set('.visual-main', {
  //   //   opacity: 0,
  //   //   yPercent: 20,
  //   // });
  //   gsap.set('.development-progress', {
  //     opacity: 0,
  //     yPercent: 20,
  //   });

  //   gsap.set('.trusted-main', {
  //     opacity: 0,
  //     yPercent: 20,
  //   });

  //   gsap.set('.development-video-wrap', {
  //     opacity: 0,
  //     yPercent: 20,
  //   });

  //   document.addEventListener('DOMContentLoaded', () => {
  //     ScrollTrigger.batch('.development-progress, .trusted-main, .development-video-wrap', {
  //       start: 'top 80%',
  //       onEnter: batch => {
  //         batch.forEach((card, index) => {
  //           const chart_tl = gsap.timeline();
  //           chart_tl.to(
  //             card,
  //             {
  //               opacity: 1,
  //               yPercent: 0,
  //               delay: index * 0.1,
  //               ease: Power4.easeOut,
  //               duration: 1.2,
  //             },
  //             0.2,
  //           );
  //         });
  //       },
  //       once: true,
  //     });
  //   });

  //   gsap.set('.details-card', {
  //     opacity: 0,
  //     yPercent: 20,
  //     scale: 0.9,
  //   });
  //   gsap.set('.details-card-img', {
  //     scaleY: 0,
  //     transformOrigin: '0% 100%',
  //   });
  //   gsap.set('.details-card-title', {
  //     yPercent: -100,
  //     opacity: 0,
  //   });
  //   gsap.set('.details-card-description', {
  //     yPercent: -100,
  //     opacity: 0,
  //   });

  //   document.addEventListener('DOMContentLoaded', () => {
  //     ScrollTrigger.batch('.details-card', {
  //       start: 'top 80%',
  //       end: 'bottom 10%',
  //       onEnter: batch => {
  //         batch.forEach((card, index) => {
  //           const img = card.querySelectorAll('.details-card-img');
  //           const title = card.querySelectorAll('.details-card-title');
  //           const descr = card.querySelectorAll('.details-card-description');
  //           const chart_tl = gsap.timeline();
  //           chart_tl.to(
  //             card,
  //             {
  //               opacity: 1,
  //               yPercent: 0,
  //               scale: 1,
  //               delay: index * 0.2,
  //               ease: Power3.easeOut,
  //               duration: 1,
  //             },
  //             0.4,
  //           );
  //           chart_tl.to(
  //             img,
  //             {
  //               scaleY: 1,
  //               stagger: 0.2,
  //               delay: index * 0.2,
  //               ease: Power3.easeOut,
  //               duration: 1,
  //             },
  //             0.4,
  //           );
  //           chart_tl.to(
  //             title,
  //             {
  //               opacity: 1,
  //               yPercent: 0,
  //               stagger: 0.2,
  //               delay: index * 0.2,
  //               ease: Power3.easeOut,
  //               duration: 0.4,
  //             },
  //             1,
  //           );
  //           chart_tl.to(
  //             descr,
  //             {
  //               opacity: 1,
  //               yPercent: 0,
  //               stagger: 0.2,
  //               delay: index * 0.2,
  //               ease: Power4.easeOut,
  //               duration: 0.8,
  //             },
  //             1.2,
  //           );
  //         });
  //       },
  //       once: true,
  //     });
  //   });

  //   const revealContainers = document.querySelectorAll('.visual-main__right-bottom');

  //   revealContainers.forEach(container => {
  //     const image = container.querySelector('.visual-main__photo-owner');
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: container,
  //       },
  //     });

  //     tl.set(container, { autoAlpha: 1 });
  //     tl.from(image, {
  //       opacity: 1,
  //       scale: 0.9,
  //       // delay: -1.1,
  //       ease: Power2.out,
  //       duration: 1,
  //     });
  //   });

  //   gsap.set('.conditions-card__title', {
  //     xPercent: 50,
  //     opacity: 0,
  //   });

  //   gsap.set('.conditions-card__description', {
  //     xPercent: 50,
  //     opacity: 0,
  //   });

  //   let containers = document.querySelectorAll('.answers-main-right');

  //   containers.forEach(container => {
  //     let image = container.querySelector('img');
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: container,
  //         // toggleActions: 'restart none none reset',
  //       },
  //     });

  //     tl.set(container, { autoAlpha: 1 });
  //     tl.from(container, {
  //       xPercent: -50,
  //       ease: Power4.out,
  //     });
  //     tl.from(image, {
  //       xPercent: 50,
  //       scale: 1.2,
  //       delay: -1.1,
  //       ease: Power4.out,
  //     });
  //   });
}
