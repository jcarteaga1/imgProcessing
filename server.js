const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');

app.set('views', path.join(__dirname,'views' ));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb, filename)=>{
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

app.use(multer({storage:storage}).single('image'));

//instance BD and routes
require('./config/db');
require('./app/routes')(app);


// static files
app.use(express.static(path.join(__dirname,'/public/styles')));

app.listen(3000, () => {
  console.log('servidor en puerto', 3000);
});
