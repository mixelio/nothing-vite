'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    setTimeout(() => {
      document.body.classList.add('page__body--with-menu');
    }, 200);
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
