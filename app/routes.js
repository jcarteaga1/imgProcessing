const cloudinary = require('cloudinary');
const photoModel = require('../models/photo.js');
const photoController = require('../controllers/indexControllers.js');
const fs = require('fs-extra');

cloudinary.config({
  cloud_name: 'dxdizawet',
  api_key: '679933552214267',
  api_secret: 'KFtVveWz9qiMLBJASTarfIuLPxA'
});

module.exports = (app) => {

  app.get('/addimage', (req, res) => {
    res.render('index');
  });

  app.get('/', async (req, res) => {
    const photos = await photoModel.find();
    res.render('images', {
      photo: photos
    });
  });

  app.post('/', async (req, res) => {
    const img = await cloudinary.v2.uploader.upload(req.file.path);
    await photoController.Base64(req.file.path, img.secure_url);
    await fs.unlink(req.file.path);
    res.redirect('/');
  });
}
