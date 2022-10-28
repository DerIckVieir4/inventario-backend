const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
 app.use(morgan('dev'));
const rotaUsuarios = require('./routes/rotaUsuario');
const rotaEmpresas = require('./routes/rotaEmpresas');
const rotaPatrimonio = require('./routes/rotaPatrimonio');

app.use('/usuario', rotaUsuarios);
app.use('/empresa', rotaEmpresas);
app.use('/patrimonio', rotaPatrimonio);

 module.exports = app;