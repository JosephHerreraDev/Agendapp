const Recordatorio = require("../models/recordatorios");

exports.getAgenda = (req, res, next) => {
    res.render("agenda/main", {
      tituloPagina: "Agenda",
      ruta: "/main",
    });
  };

exports.getNota = (req, res, next) => {
  res.render("agenda/nota", {
    tituloPagina: "Nota",
    ruta: "/nota",
  });
};

exports.getRecordatorio = (req, res, next) => {
  Recordatorio.mostrarTodo((recordatorios) => {
    res.render("agenda/recordatorio", {
      tituloPagina: "Recordatorio",
      ruta: "/recordatorio",
      recordatorios: recordatorios,
    });
  });
};