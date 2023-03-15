const path = require('path');

const express = require('express');
const agendaControl = require('../controllers/agenda');
const router = express.Router();

router.get('/main', agendaControl.getAgenda);

module.exports = router;