const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.listen(port, () => {
    console.log(`Tweeta app listening at port ${port}`)
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/login')
})

app.get('/register', (req, res) => {
    res.render('pages/register')
})

app.get('/index', (req, res) => {
    res.render('pages/index')
})

app.get('/profile', (req, res) => {
    res.render('pages/profile')
})

app.get('/logout', (req, res) => {
    res.render('pages/logout')
})
