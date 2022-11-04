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
const rotaSetores = require('./routes/rotaSetores');

app.use('/usuario', rotaUsuarios);
app.use('/empresas', rotaEmpresas);
app.use('/patrimonio', rotaPatrimonio);
app.use('/setores', rotaSetores);

 module.exports = app;