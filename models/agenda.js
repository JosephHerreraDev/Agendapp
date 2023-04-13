const bd = require("../util/basedatos");

module.exports = class Agenda {
  constructor(titulo, descripcion) {
    this.titulo = titulo;
    this.descripcion = descripcion;
  }

  guardar() {
    return bd.execute(
      "INSERT INTO agenda (titulo, descripcion) VALUES (?, ?)",
      [this.titulo, this.descripcion]
    );
  }

  static mostrarTodo() {
    return bd.execute("SELECT * FROM Eventos");
  }

  static encontrarPorId(id) {
    return bd.execute("SELECT * FROM Eventos WHERE Eventos.id = ?", [id]);
  }
};
