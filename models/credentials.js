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
};
