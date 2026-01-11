import { generatePhotosData } from './data.js';
import { showAlert } from './utils.js';
import { getData, sendData } from './api.js';
import { createGallery } from './gallery.js';
import { renderForm } from './form.js';

getData()
  .then((data) => createGallery(data))
  .catch((err) => showAlert(err));

renderForm();
