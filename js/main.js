function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(arr) {
  return arr[getRandomInt(0, arr.length - 1)];
}

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

function generateComments() {
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

function generatePhotosArray() {
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
