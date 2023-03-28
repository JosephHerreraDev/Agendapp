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

exports.getevento = (req, res, next) => {
  res.render("agenda/evento", {
    tituloPagina: "Evento",
    titulo: "Evento",
    descripcion: "Descripcion",
    fecha: "Fecha",
    hora: "Hora",
    lugar: "Lugar",
    asistentes: "Asistentes",
    ruta: "/evento",
  });
};

exports.getTarea = (req, res, next) => {
  res.render("agenda/tarea", {
    tituloPagina: "Tarea",
    ruta: "/tarea",
  });
};

exports.getReloj = (req, res, next) => {
  res.render("agenda/reloj", {
    tituloPagina: "Pomodoro",
    ruta: "/reloj",
  });
};
