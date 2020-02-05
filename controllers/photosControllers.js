const photo = require('../models/photo.js');

function addPhoto(value, url) {
  let Photo = new photo();
  Photo.url = url;
  Photo.codeBase64Img = value;
  Photo.save();
}

async function findPhotos() {
  const Photo = await photo.find();
}

module.exports = {
  addPhoto,
}
