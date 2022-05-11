const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { connectDB } = require('./src/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema');

dotenv.config(); 

const app = express();
const port = 4000;

connectDB();


app.listen(process.env.PORT, () => {
    console.log(`Tweeta app listening at port ${process.env.PORT}`)
});

app.set('view engine', 'ejs');

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.get('/', (req, res) => {
    res.render('pages/login')
});

app.get('/register', (req, res) => {
    res.render('pages/register')
});

app.get('/home', (req, res) => {
    res.render('pages/index')
});

const user ={
    firstName: 'Dom',
    lastName: 'Pelino'
};

app.get('/profile', (req, res) => {
    res.render('pages/profile', {user:user})
});

app.get('/logout', (req, res) => {
    res.render('pages/logout')
});
