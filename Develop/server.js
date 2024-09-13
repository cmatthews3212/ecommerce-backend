const express = require('express');
const routes = require('./routes');
// const exphbs = require('express-handlebars');
// import sequelize connection

const sequelize = require('./config/connection');
const pg = require('pg');


const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// app.engine('handlebars', hbs.engine)
// app.set('view engine', 'handlebars');

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then (() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });

})
