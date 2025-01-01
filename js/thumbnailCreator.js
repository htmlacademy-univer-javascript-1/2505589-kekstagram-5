import {createPicture} from './data.js';
import {postIsOpen} from './full_img.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const createPictures = createPicture();

const renderPhoto = (picture) => {
  const { url, description, likes, comments } = picture;
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  const onPictureElementClick = (evt) => {
    evt.preventDefault();

    postIsOpen(picture);
  };

  pictureElement.addEventListener('click', onPictureElementClick);

  return pictureElement;
};

const fragment = document.createDocumentFragment();

const renderPhotos = (objects) => {
  objects.forEach((item) => {
    fragment.appendChild(renderPhoto(item));
  });
};

renderPhotos(createPictures);
pictures.appendChild(fragment);
