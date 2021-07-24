// Importo
import mongoose from 'mongoose';
import express from 'express';
import bodyparser from 'body-parser';
const { json } = bodyparser;

// Defino la ruta base
import rutas from './routes/index.js'

// Mongo connection
// Defino parametros para conectarme a mongo
const user = 'pedro'
const password = 'procopio'
const dbName = 'tasks_db'
const url = 'mongodb://' + user + ':' + password + '@localhost:27017/' + dbName

// Me coneccto a mongo
mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err))

// Instancio la app
var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Indexo rutas
app.use('/tasks', rutas);


// Levanto la API
const port = 4000;
var server = app.listen(port, function () {
    console.log("Node server running on http://localhost:" + port)
})


