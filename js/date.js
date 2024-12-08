import {getRandomInt, getRandomUniqueNumberGenerate} from './util.js';

const description = [
  'Очень красивое небо',
  'Жизнь - это суп и ты в ней вилка',
  'Я кот по жизни'
];

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const name = [
  'Артём',
  'Ксения',
  'Маша',
  'Алина',
  'Вера',
  'Сережа'
];
const idCommentsArray = [];
const idArray = [];
const numbersPhotoArray = [];

const descriptionPhotoCount = 25;

const createDescriptionPhoto = () =>{
  const comments = [];
  for (let i = 0; i < getRandomInt(0, 30); i++){
    comments.push({
      id: getRandomUniqueNumberGenerate(1, 10000, idCommentsArray),
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: message[getRandomInt(0, message.length - 1)],
      name: name[getRandomInt(0, name.length - 1)],
    });
  }
  return {
    id: getRandomUniqueNumberGenerate(1, descriptionPhotoCount, idArray),
    url: `photos/${getRandomUniqueNumberGenerate(1, descriptionPhotoCount, numbersPhotoArray)}.jpg`,
    description: description[getRandomInt(0, description.length - 1)],
    likes: getRandomInt(15, 200),
    comments: comments,
  };
};
const similarDescriptionPhoto = Array.from({length: 25}, createDescriptionPhoto);
export {similarDescriptionPhoto};
