const path = require("path");

const express = require("express");
const agendaControl = require("../controllers/agenda");
const router = express.Router();

router.get("/main", agendaControl.getAgenda);
router.get("/nota", agendaControl.getNota);
router.get("/recordatorio", agendaControl.getRecordatorio);
router.get("/evento", agendaControl.getevento);

module.exports = router;
