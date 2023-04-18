const path = require("path");

const session = require("express-session");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const controladorError = require("./controllers/error");
const bd = require("./util/basedatos");
const credentialsRoutes = require("./routes/credentials");
const AgendaRoutes = require("./routes/agenda");

// Configuración de express-session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(credentialsRoutes);
app.use(AgendaRoutes);
app.use(controladorError.get404);

app.listen(3000);
