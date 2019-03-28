const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Routes
const indexRoutes = require('./routes/index.js');
app.use('/', indexRoutes);

//Connecting to db
mongoose.connect('mongodb://localhost/eco', { useNewUrlParser: true })
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})

