const bd = require("../util/basedatos");

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

  static encontrarPorId(id) {
    return bd.execute("SELECT * FROM Eventos WHERE Eventos.id = ?", [id]);
  }
};
