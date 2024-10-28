import { getRandomInt, getRandomElement } from './util.js';
import { names, commentsMessages } from './data.js';

export function generateComments() {
  const commentsCount = getRandomInt(0, 30);
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
    const comment = {
      id: i + 1,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: getRandomElement(commentsMessages),
      name: getRandomElement(names)
    };
    comments.push(comment);
  }

  return comments;
}

export function generatePhotosArray() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Описание фотографии номер ${i}`,
      likes: getRandomInt(15, 200),
      comments: generateComments()
    };
    photos.push(photo);
  }

  return photos;
}
generatePhotosArray();

