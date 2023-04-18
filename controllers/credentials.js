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
  const username = req.body.username;
  const password = req.body.password;

  if (username === "usuario" && password === "contra") {
    req.session.isLoggedIn = true;
    req.session.user = { username: username };
    return res.redirect("/main");
  }

  res.redirect("/login");
};