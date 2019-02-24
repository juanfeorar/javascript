'use strict'
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const objConnection = require('./core/db');
const cors = require('cors');
dotenv.config({
    path: './src/.env'
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server is run in port: ' + port));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    objConnection.query('SELECT id_employee, name FROM employee', function (err, data) {
        res.status(200).send(data);
    })
});

app.get('/bookingtype', function (req, res) {
    objConnection.query('SELECT id_booking_type, booking_type FROM booking_type', function (err, data) {
        res.status(200).send(data);
    });
});

app.post('/bookingtype', function (req, res) {
    objConnection.query('INSERT INTO booking SET ?', req.body, function (err) {
        if (!err) {
            res.send('Datos almacenados con éxito').status(200);
        } else {
            res.status(500).send(err);
        }
    });
});