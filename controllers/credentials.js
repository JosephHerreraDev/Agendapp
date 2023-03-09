exports.getIndex = (req, res, next) => {
  res.render("welcome", {
    tituloPagina: "Welcome",
    ruta: "/",
  });
};

exports.getSignup = (req, res, next) => {
  res.render("signup", {
    tituloPagina: "Signup",
    ruta: "/sigup",
  });
};

exports.getLogin = (req, res, next) => {
  res.render("login", {
    tituloPagina: "Login",
    ruta: "/login",
  });
}
