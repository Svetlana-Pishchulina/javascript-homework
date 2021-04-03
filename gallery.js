import defaultGal from './gallery-items.js';
[
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
// console.log(defaultGal);
// // не использовала класс .gallery__link -куда его?
// const galleryEl = document.querySelector('.js-gallery'); //+
// const lightboxContainerEl = document.querySelector('.js-lightbox'); //+
// const lightboxImageEl = document.querySelector('.lightbox__image'); //+
// const modalCloseButton = document.querySelector(
//   'button[data-action="close-lightbox"]',
// ); //+
// const lightboxOverlay = document.querySelector('div.lightbox__overlay');

// function createGalleryCardsMarkup(picturesArr) {
//   return picturesArr
//     .map(({ preview, original, description }) => {
//       return `<li class="gallery__item">
//   <img class="gallery__image" src="${preview}" alt="${description}" data-src="${original}" data-descr="${description}"/>
// </li>`;
//     })
//     .join('');
// }

// const galleryItemsEl = createGalleryCardsMarkup(defaultGal);
// galleryEl.insertAdjacentHTML('beforeend', galleryItemsEl);

// galleryEl.addEventListener('click', onGalleryCardsClick);
// function onGalleryCardsClick(event) {
//   if (!event.target.classList.contains('gallery__image')) {
//     return;
//   }

//   openModal();
//   getOriginalPicturesAtribut(event);
// }

// // проверку на активный класс делать нет смысла- мы снимаем при закрытии
// function openModal() {
//   window.addEventListener('keydown', onEscKeyPress);
//   window.addEventListener('keydown', onLeftKeyPress);
//   window.addEventListener('keydown', onRightKeyPress);
//   lightboxContainerEl.classList.add('is-open');
// }

// function getOriginalPicturesAtribut(event) {
//   lightboxImageEl.src = event.target.dataset.src;
//   lightboxImageEl.alt = event.target.descr;
// }

// modalCloseButton.addEventListener('click', onModalCloseButtonClick);
// function onModalCloseButtonClick() {
//   closeModal();
//   cleanOriginalPicturesAtribut();
// }

// function closeModal() {
//   window.removeEventListener('keydown', onEscKeyPress);
//   window.removeEventListener('keydown', onLeftKeyPress);
//   window.removeEventListener('keydown', onRightKeyPress);
//   lightboxContainerEl.classList.remove('is-open');
// }

// function cleanOriginalPicturesAtribut() {
//   lightboxImageEl.src = '';
//   lightboxImageEl.alt = '';
// }

// // почему работало корректно и без if?
// lightboxOverlay.addEventListener('click', onOverlayClikc);
// function onOverlayClikc(event) {
//   if (event.target === event.currentTarget) {
//     closeModal();
//     cleanOriginalPicturesAtribut();
//   }
// }

// function onEscKeyPress(event) {
//   if (event.code === 'Escape') {
//     closeModal();
//     cleanOriginalPicturesAtribut();
//   }
// }

// function onLeftKeyPress(event) {
//   if (event.code === 'ArrowLeft') {
//     const i =
//       defaultGal.findIndex(
//         picture => picture.original === lightboxImageEl.src,
//       ) - 1;
//     if (i === -1) {
//       return;
//     }
//     lightboxImageEl.src = defaultGal[i].original;
//     lightboxImageEl.alt = defaultGal[i].description;
//   }
// }
// function onRightKeyPress(event) {
//   if (event.code === 'ArrowRight') {
//     const i =
//       defaultGal.findIndex(
//         picture => picture.original === lightboxImageEl.src,
//       ) + 1;
//     if (i === defaultGal.length - 1) {
//       return;
//     }
//     lightboxImageEl.src = defaultGal[i].original;
//     lightboxImageEl.alt = defaultGal[i].description;
//   }
// }
// ____________________________________________________________
// var2(без data-атрибутов)

// // не забыть вернуть дефолт
// // не использовала класс .gallery__link -куда его?
// const galleryEl = document.querySelector('.js-gallery'); //+
// const lightboxContainerEl = document.querySelector('.js-lightbox'); //+
// const lightboxImageEl = document.querySelector('.lightbox__image'); //+
// const modalCloseButton = document.querySelector(
//   'button[data-action="close-lightbox"]',
// ); //+

// function createGalleryCardsMarkup(picturesArr) {
//   return picturesArr
//     .map(({ preview, description }) => {
//       return `<li class="gallery__item">
//   <img class="gallery__image" src="${preview}" alt="${description}" />
// </li>`;
//     })
//     .join('');
// }

// const galleryItemsEl = createGalleryCardsMarkup(defaultGal);
// galleryEl.insertAdjacentHTML('beforeend', galleryItemsEl);

// galleryEl.addEventListener('click', onGalleryCardsClick);
// function onGalleryCardsClick(event) {
//   if (!event.target.classList.contains('gallery__image')) {
//     return;
//   }
//   openModal();
//   getOriginalPicturesAtribut(event);
// }

// // можно через closest найти контейнер
// // проверку на активный класс делать нет смысла- мы снимаем при закрытии
// function openModal() {
//   lightboxContainerEl.classList.add('is-open');
// }

// // можно записать в дата-атрибут карточки, а не искать через find
// function getOriginalPicturesAtribut(event) {
//   lightboxImageEl.src = defaultGal.find(
//     picture => picture.preview === event.target.src,
//   ).original;
//   lightboxImageEl.alt = defaultGal.find(
//     picture => picture.preview === event.target.src,
//   ).description;
// }

// modalCloseButton.addEventListener('click', onModalCloseButtonClick);
// function onModalCloseButtonClick() {
//   closeModal();
//   cleanOriginalPicturesAtribut();
// }

// function closeModal() {
//   lightboxContainerEl.classList.remove('is-open');
// }

// function cleanOriginalPicturesAtribut() {
//   lightboxImageEl.src = '';
//   lightboxImageEl.alt = '';
// }

// ________________________________________________

// не забыть вернуть дефолт
// не использовала класс .gallery__link -куда его?
const galleryEl = document.querySelector('.js-gallery'); //+
const lightboxContainerEl = document.querySelector('.js-lightbox'); //+
const lightboxImageEl = document.querySelector('.lightbox__image'); //+
const modalCloseButton = document.querySelector(
  'button[data-action="close-lightbox"]',
); //+
const lightboxOverlay = document.querySelector('div.lightbox__overlay');

function createGalleryCardsMarkup(picturesArr) {
  return picturesArr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <img class="gallery__image" src="${preview}" alt="${description}" data-src="${original}" data-descr="${description}"/>
</li>`;
    })
    .join('');
}

const galleryItemsEl = createGalleryCardsMarkup(defaultGal);
galleryEl.insertAdjacentHTML('beforeend', galleryItemsEl);

galleryEl.addEventListener('click', onGalleryCardsClick);
function onGalleryCardsClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  openModal();
  getOriginalPicturesAtribut(event);
}

// проверку на активный класс делать нет смысла- мы снимаем при закрытии
function openModal() {
  window.addEventListener('keydown', onEscKeyPress);
  window.addEventListener('keydown', onLeftKeyPress);
  window.addEventListener('keydown', onRightKeyPress);
  lightboxContainerEl.classList.add('is-open');
}

function getOriginalPicturesAtribut(event) {
  lightboxImageEl.src = event.target.dataset.src;
  lightboxImageEl.alt = event.target.descr;
}

modalCloseButton.addEventListener('click', onModalCloseButtonClick);
function onModalCloseButtonClick() {
  closeModal();
  cleanOriginalPicturesAtribut();
}

function closeModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  window.removeEventListener('keydown', onLeftKeyPress);
  window.removeEventListener('keydown', onRightKeyPress);
  lightboxContainerEl.classList.remove('is-open');
}

function cleanOriginalPicturesAtribut() {
  lightboxImageEl.src = '';
  lightboxImageEl.alt = '';
}

// почему работало корректно и без if?
lightboxOverlay.addEventListener('click', onOverlayClikc);
function onOverlayClikc(event) {
  if (event.target === event.currentTarget) {
    closeModal();
    cleanOriginalPicturesAtribut();
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
    cleanOriginalPicturesAtribut();
  }
}

function onLeftKeyPress(event) {
  if (event.code === 'ArrowLeft') {
    const i =
      defaultGal.findIndex(
        picture => picture.original === lightboxImageEl.src,
      ) - 1;
    if (i === -1) {
      return;
    }
    lightboxImageEl.src = defaultGal[i].original;
    lightboxImageEl.alt = defaultGal[i].description;
  }
}
function onRightKeyPress(event) {
  if (event.code === 'ArrowRight') {
    const i =
      defaultGal.findIndex(
        picture => picture.original === lightboxImageEl.src,
      ) + 1;
    if (i === defaultGal.length - 1) {
      return;
    }
    lightboxImageEl.src = defaultGal[i].original;
    lightboxImageEl.alt = defaultGal[i].description;
  }
}
// // ____________________________________________________________
// // var2(без data-атрибутов)

// // // не забыть вернуть дефолт
// // // не использовала класс .gallery__link -куда его?
// // const galleryEl = document.querySelector('.js-gallery'); //+
// // const lightboxContainerEl = document.querySelector('.js-lightbox'); //+
// // const lightboxImageEl = document.querySelector('.lightbox__image'); //+
// // const modalCloseButton = document.querySelector(
// //   'button[data-action="close-lightbox"]',
// // ); //+

// // function createGalleryCardsMarkup(picturesArr) {
// //   return picturesArr
// //     .map(({ preview, description }) => {
// //       return `<li class="gallery__item">
// //   <img class="gallery__image" src="${preview}" alt="${description}" />
// // </li>`;
// //     })
// //     .join('');
// // }

// // const galleryItemsEl = createGalleryCardsMarkup(defaultGal);
// // galleryEl.insertAdjacentHTML('beforeend', galleryItemsEl);

// // galleryEl.addEventListener('click', onGalleryCardsClick);
// // function onGalleryCardsClick(event) {
// //   if (!event.target.classList.contains('gallery__image')) {
// //     return;
// //   }
// //   openModal();
// //   getOriginalPicturesAtribut(event);
// // }

// // // можно через closest найти контейнер
// // // проверку на активный класс делать нет смысла- мы снимаем при закрытии
// // function openModal() {
// //   lightboxContainerEl.classList.add('is-open');
// // }

// // // можно записать в дата-атрибут карточки, а не искать через find
// // function getOriginalPicturesAtribut(event) {
// //   lightboxImageEl.src = defaultGal.find(
// //     picture => picture.preview === event.target.src,
// //   ).original;
// //   lightboxImageEl.alt = defaultGal.find(
// //     picture => picture.preview === event.target.src,
// //   ).description;
// // }

// // modalCloseButton.addEventListener('click', onModalCloseButtonClick);
// // function onModalCloseButtonClick() {
// //   closeModal();
// //   cleanOriginalPicturesAtribut();
// // }

// // function closeModal() {
// //   lightboxContainerEl.classList.remove('is-open');
// // }

// // function cleanOriginalPicturesAtribut() {
// //   lightboxImageEl.src = '';
// //   lightboxImageEl.alt = '';
// // }
