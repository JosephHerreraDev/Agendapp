const Recordatorio = require("../models/recordatorios");
const Agenda = require("../models/agenda");

exports.getAgenda = (req, res, next) => {
  Agenda.mostrarTodo().then(([rows, fieldData]) => {
    res.render("agenda/main", {
      //llenar con los datos de la base de datos
      //campos: ["Titulo", "contenido", "Fecha y hora", "Asistentes", "Lugar"],
      //datos: rows,
      tituloPagina: "Agenda",
      ruta: "/agenda",
      
    });
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
      titulo: "Recordatorio",
      horafecha: "Fecha y hora",
      contenido: "Descripcion",
      recordatorios: recordatorios,
    });
  });
};

exports.getevento = (req, res, next) => {
  res.render("agenda/evento", {
    tituloPagina: "Evento",
    titulo: "Evento",
    contenido: "Descripcion",
    horafecha: "Fecha y hora",
    asistentes: "Asistentes",
    lugar: "Lugar",
    ruta: "/evento",
  });
};

exports.getTarea = (req, res, next) => {
  res.render("agenda/tarea", {
    tituloPagina: "Tarea",
    titulo: "Tarea",
    horafecha: "Fecha y hora",
    ruta: "/tarea",
  });
};

exports.getReloj = (req, res, next) => {
  res.render("agenda/reloj", {
    tituloPagina: "Pomodoro",
    ruta: "/reloj",
  });
};
