const express = require('express');
const path = require('path');
const session = require('express-session');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(morgan('dev'));

//resolver las rutas statics
app.use(express.static("public"));

//Rutas motor de vistas ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));

//Configuración base de datos
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tienda'
}
module.exports = { app, PORT, dbConfig };
