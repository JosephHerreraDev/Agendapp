exports.getAgenda = (req, res, next) => {
    res.render("agenda/main", {
      tituloPagina: "Agenda",
      ruta: "/main",
    });
  };