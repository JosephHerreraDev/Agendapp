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

  static mostrarTodo() {
    return bd.execute("SELECT * FROM Eventos");
  }

  static insertarEvento(idusuario, titulo, contenido, horafecha, asistentes, lugar) {
    return bd.execute(
      "INSERT INTO Eventos (idusuario, titulo, contenido, horafecha, asistentes, lugar) VALUES (?, ?, ?, ?, ?, ?)",
      [idusuario, titulo, contenido, horafecha, asistentes, lugar]
    );
  }
};
