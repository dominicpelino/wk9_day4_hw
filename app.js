const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./src/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema');
const path = require('path');
const { authenticate } = require('./src/middleware/auth');
const cookieParser = require('cookie-parser');

dotenv.config(); 

const app = express();

// Connecting DB
connectDB();

app.use(cookieParser());

// Routes
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.use(express.urlencoded({ extended: true }));

// Middleware (auth)
app.use(authenticate);

app.get('/', (req, res) => {
    res.send('Hello Tweeta')
});

// app.get('/register', (req, res) => {
//     res.render('pages/register')
// });

// app.get('/home', (req, res) => {
//     res.render('pages/index')
// });

// app.get('/profile', (req, res) => {
//     res.render('pages/profile', {user:user})
// });

// app.get('/logout', (req, res) => {
//     res.render('pages/logout')
// });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/templates/views'));

// Initialize Routes
require("./src/routes")(app);

app.listen(process.env.PORT, () => {
    console.log(`Tweeta app listening at port ${process.env.PORT}`)
});