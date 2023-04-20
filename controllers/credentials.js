const Credential = require("../models/credentials");

exports.getIndex = (req, res, next) => {
  res.render("credentials/welcome", {
    tituloPagina: "Welcome",
    ruta: "/",
  });
};

exports.getSignup = (req, res, next) => {
  res.render("credentials/signup", {
    tituloPagina: "Signup",
    ruta: "/sigup",
  });
};

exports.getLogin = (req, res, next) => {
  res.render("credentials/login", {
    tituloPagina: "Login",
    ruta: "/login",
  });
};

exports.postLogin = (req, res) => {
  Credential.mostrarTodo().then(([rows, fieldData]) => {
    const sesiones = rows.map((sesion) => ({
      id: sesion.idUsuario,
      usuario: sesion.correo,
      contra: sesion.contra,
    }));

    const username = req.body.username;
    const password = req.body.password;

    let isLoggedIn = false;
    let user = null;
    sesiones.forEach((sesion) => {
      if (sesion.usuario === username && sesion.contra === password) {
        console.log("Logged in");
        isLoggedIn = true;
        const idusuario = parseInt(sesion.id);
        user = { id: idusuario, username: username };
        console.log(user);
        req.session.isLoggedIn = true;
        req.session.user = user;
      }
    });

    if (isLoggedIn) {
      return res.redirect("/main");
    } else {
      console.log("Incorrect username or password");
      res.redirect("/login");
    }
  });
};

//crea export de signup
exports.postSignup = (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const type = 2;

  Credential.insertar(type, username, email, password).then(() => {
    console.log("Usuario creado");
    res.redirect("/login");
  });
};
