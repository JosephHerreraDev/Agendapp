const fs = require("fs");
const path = require("path");
const ruta = path.join(
  path.dirname(process.mainModule.filename),
  "datos",
  "recordatorios.json"
);

const getRecordatoriosDesdeArchivo = (cb) => {
  fs.readFile(ruta, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
module.exports = class Recordatorio {
  constructor(titulo, descripcion) {
    this.titulo = titulo;
    this.descripcion = descripcion;
  }
  guardar() {
    this.id = Math.random().toString();
    getRecordatoriosDesdeArchivo((recordatorios) => {
        recordatorios.push(this);
      fs.writeFile(ruta, JSON.stringify(recordatorios), (err) => {
        console.log(err);
      });
    });
  }
  static mostrarTodo(cb) {
    getRecordatoriosDesdeArchivo(cb);
  }
  static encontrarPorId(id, cb) {
    getRecordatoriosDesdeArchivo((recordatorios) => {
      const recordatorio = recordatorios.find((r) => r.id === id);
      cb(recordatorio);
    });
  }
};
