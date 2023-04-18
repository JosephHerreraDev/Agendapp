const Recordatorio = require("../models/recordatorios");
const Agenda = require("../models/agenda");

exports.getAgenda = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }
  Agenda.mostrarTodo().then(([rows, fieldData]) => {
    const eventos = rows.map((evento) => ({
      titulo: evento.titulo,
      descripcion: evento.descripcion,
      horafecha: evento.horafecha,
      asistentes: evento.asistentes,
      lugar: evento.lugar,
    }));
    res.render("agenda/main", {
      tituloPagina: "Agenda",
      ruta: "/agenda",
      eventos: eventos,
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

exports.postevento = (req, res, next) => {
  const idusuario = 1;
  const titulo = req.body.titulo;
  const contenido = req.body.contenido;
  const horafecha = req.body.horafecha;
  const asistentes = req.body.asistentes;
  const lugar = req.body.lugar;

  Agenda.insertarEvento(
    idusuario,
    titulo,
    contenido,
    horafecha,
    asistentes,
    lugar
  ).then(() => {
    console.log("Evento creado");
    res.redirect("/evento");
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
