var Jimp = require('jimp');
var sizeOf = require('image-size');
const image2base64 = require('image-to-base64');
const controller = require('./photosControllers.js');

function jimpConvert(value, dimensions, url) {
  Jimp.read(value, (err, img) => {
    if (err) throw err;
    img
      .resize(dimensions.width, dimensions.height)
      .quality(10)
      .getBase64(Jimp.MIME_JPEG, function(err, codeBase64) {
        controller.addPhoto(codeBase64, url);
      });
  });
}

function Base64(image, url) {
  image2base64(image).then(img => {
    const buf = Buffer.from(img, 'base64');
    const size = sizeOf(image);
    jimpConvert(buf, size, url);
  });
}

module.exports = {
  Base64
}
