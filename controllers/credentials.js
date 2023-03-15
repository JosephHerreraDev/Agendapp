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
}
