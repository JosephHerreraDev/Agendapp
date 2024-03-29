const bd = require("../util/basedatos");
const { insertar } = require("./credentials");

module.exports = class Agenda {
  constructor(titulo, contenido, horafecha, asistentes, lugar) {
    this.titulo = titulo;
    this.contenido = contenido;
    this.horafecha = horafecha;
    this.asistentes = asistentes;
    this.lugar = lugar;
  }

  guardar() {
    return bd
      .execute
      // "INSERT INTO agenda (titulo, descripcion) VALUES (?, ?)",
      // [this.titulo, this.descripcion]
      ();
  }

  static mostrarEvento() {
    return bd.execute("SELECT * FROM Eventos");
  }

  static mostrarRecordatorio() {
    return bd.execute("SELECT * FROM Recordatorios");
  }

  static mostrarTarea() {
    return bd.execute("SELECT * FROM Tarea");
  }

  static mostrarNota() {
    return bd.execute("SELECT * FROM Notas");
  }

  static insertarEvento(
    idusuario,
    titulo,
    contenido,
    horafecha,
    asistentes,
    lugar
  ) {
    return bd.execute(
      "INSERT INTO Eventos (idusuario, titulo, contenido, horafecha, asistentes, lugar) VALUES (?, ?, ?, ?, ?, ?)",
      [idusuario, titulo, contenido, horafecha, asistentes, lugar]
    );
  }

  static insertarTarea(idusuario, titulo, horafecha) {
    return bd.execute(
      "INSERT INTO Tarea (idusuario, titulo, horafecha) VALUES (?, ?, ?)",
      [idusuario, titulo, horafecha]
    );
  }
  static insertarNota(idusuario, titulo, contenido) {
    return bd.execute(
      "INSERT INTO Notas (idusuario, titulo, contenido) VALUES (?, ?, ?)",
      [idusuario, titulo, contenido]
    );
  }
  static insertarRecordatorio(idusuario, titulo, horafecha, contenido) {
    return bd.execute(
      "INSERT INTO Recordatorios (idusuario, titulo, horafecha, contenido) VALUES (?, ?, ?, ?)",
      [idusuario, titulo, horafecha, contenido]
    );
  }
};
