const Agenda = require("../models/agenda");

exports.getAgenda = async (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }

  try {
    const [eventos, fieldData1] = await Agenda.mostrarEvento();
    const eventosFormateados = eventos.map((evento) => ({
      titulo: evento.titulo,
      descripcion: evento.descripcion,
      horafecha: evento.horafecha,
      asistentes: evento.asistentes,
      lugar: evento.lugar,
    }));

    const [recordatorios, fieldData2] = await Agenda.mostrarRecordatorio();
    const recordatoriosFormateados = recordatorios.map((recordatorio) => ({
      titulo: recordatorio.titulo,
      horafecha: recordatorio.horafecha,
      contenido: recordatorio.contenido,
    }));

    const [tareas, fieldData3] = await Agenda.mostrarTarea();
    const tareasFormateadas = tareas.map((tarea) => ({
      titulo: tarea.titulo,
      horafecha: tarea.horafecha,
    }));

    const [notas, fieldData4] = await Agenda.mostrarNota();
    const notasFormateadas = notas.map((nota) => ({
      titulo: nota.titulo,
      contenido: nota.contenido,
    }));

    res.render("agenda/main", {
      tituloPagina: "Agenda",
      ruta: "/agenda",
      eventos: eventosFormateados,
      recordatorios: recordatoriosFormateados,
      tareas: tareasFormateadas,
      notas: notasFormateadas,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getNota = (req, res, next) => {
  res.render("agenda/nota", {
    tituloPagina: "Nota",
    ruta: "/nota",
  });
};

exports.postNota = (req, res, next) => {
  const idusuario = 1;
  const titulo = req.body.titulo;
  const contenido = req.body.contenido;

  Agenda.insertarNota(idusuario, titulo, contenido).then(() => {
    console.log("Nota creada");
    res.redirect("/nota");
  });
};

exports.getRecordatorio = (req, res, next) => {
  res.render("agenda/recordatorio", {
    tituloPagina: "Recordatorio",
    ruta: "/recordatorio",
  });
};

exports.postRecordatorio = (req, res, next) => {
  const idusuario = 1;
  const titulo = req.body.titulo;
  const horafecha = req.body.horafecha;
  const contenido = req.body.contenido;

  Agenda.insertarRecordatorio(idusuario, titulo, horafecha, contenido).then(
    () => {
      console.log("Recordatorio creado");
      res.redirect("/recordatorio");
    }
  );
};

exports.getevento = (req, res, next) => {
  res.render("agenda/evento", {
    tituloPagina: "Evento",
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

exports.postTarea = (req, res, next) => {
  const idusuario = 1;
  const titulo = req.body.titulo;
  const horafecha = req.body.horafecha;

  Agenda.insertarTarea(idusuario, titulo, horafecha).then(() => {
    console.log("Tarea creada");
    res.redirect("/tarea");
  });
};

exports.getReloj = (req, res, next) => {
  res.render("agenda/reloj", {
    tituloPagina: "Pomodoro",
    ruta: "/reloj",
  });
};
