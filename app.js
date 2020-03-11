//mongod 
//mongo
//npm install -g nodemon 用來偵聽
//npm i express bcryptjs passport passport-jwt jsonwebtoken mongoose body-parser cors concurrently
// 處理json資料、Buffer流資料、文字資料、UTF-8的編碼的資料
// bodyParser.json(options) bodyParser.raw(options) 、bodyParser.text(options) 、bodyParser.urlencoded(options)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport')

//initailize app
const app = express()


//MIDDLEWARES
//Form data middleware
app.use(bodyParser.urlencoded({ extended: false }));

//bodym iddleware
app.use(bodyParser.json())

//Cors middleware
app.use(cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//Set up static directory
//Whatever we have in the public folder, is our static directory
app.use(express.static(path.join(__dirname, 'public')));

//Use passport Middleware
app.use(passport.initialize());
//Bring in Passport Strategy
require('./config/passport')(passport);

//Bring in Database Config and Connect to Database
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
}).then(() => console.log(`成功連線到資料庫囉：${db}`))
    .catch(err => console.log(`無法連線至資料庫，因為：${err}`))

// app.get('/', (req, res) => {
//     return res.send("<h1>HELLO Babe</h1>")
// })

//Bring in the Users router
const users = require('./routes/api/users')
app.use('/api/users', users)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

const PORT = process.env.PORT || 5000
//
app.listen(PORT, () => {
    console.log(`伺服器${PORT}聽起來`)
})