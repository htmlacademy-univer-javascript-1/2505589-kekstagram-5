import { getRandomInt, getRandomElement } from './util.js';

const commentsMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Артём',
  'Мария',
  'Дмитрий',
  'Екатерина',
  'Сергей',
  'Анна',
  'Иван',
  'Ольга',
  'Александр',
  'Татьяна'
];

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
