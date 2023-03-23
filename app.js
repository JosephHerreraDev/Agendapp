const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const controladorError = require('./controllers/error');
const bd = require('./util/database');
const credentialsRoutes = require('./routes/credentials');
const AgendaRoutes = require('./routes/agenda');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(credentialsRoutes);
app.use(AgendaRoutes);
app.use(controladorError.get404); 

app.listen(3000);   