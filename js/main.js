import { photos } from './photos.js';
import { renderPhoto } from './thumbnailCreator.js';
import { initFilters } from './filters.js';
import './form.js';
import './api.js';

renderPhoto(photos); // Отрисовка миниатюр
initFilters(photos, renderPhoto); // Инициализация фильтров
