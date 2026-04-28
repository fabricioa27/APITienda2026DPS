const express = require('express');
const router = express.Router();

const usuariosRoutes = require('./usuarios.routes.js');

router.use('/usuarios', usuariosRoutes);

module.exports = router;