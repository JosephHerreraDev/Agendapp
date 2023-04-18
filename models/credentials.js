const bd = require("../util/basedatos");

module.exports = class Credentials {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  guardar() {
    return bd.execute(
      "INSERT INTO usuario (username, password) VALUES (?, ?)",
      [this.username, this.password]
    );
  }

  static mostrarTodo() {
    return bd.execute("SELECT * FROM usuario");
  }
  static insertar(tipo, nombre, correo, contra) {
    return bd.execute(
      "INSERT INTO Usuario (tipoUsuario, nombre, correo, contra) VALUES (?, ?, ?, ?)",
      [tipo, nombre, correo, contra]
    );
  }
};
