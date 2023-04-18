const path = require("path");

const express = require("express");
const agendaControl = require("../controllers/agenda");
const router = express.Router();

router.get("/main", agendaControl.getAgenda);
router.get("/nota", agendaControl.getNota);
router.post("/nota", agendaControl.postNota);
router.get("/recordatorio", agendaControl.getRecordatorio);
router.post("/recordatorio", agendaControl.postRecordatorio);
router.get("/evento", agendaControl.getevento);
router.post("/evento", agendaControl.postevento);
router.get("/tarea", agendaControl.getTarea);
router.post("/tarea", agendaControl.postTarea);
router.get("/reloj", agendaControl.getReloj);

module.exports = router;
