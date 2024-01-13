const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Matfen',
    database: 'rapid',
    password: 'Geralt2077!'
});

db.connect((error) => {
    if (!error) {
        console.log('Connection réussie de la base de données');
    } else {
        console.log('Echec de la connection de la base de données');
    }
})

app.listen(PORT, () => {
    console.log('Connection au port serveur ' + PORT);
});

// LOGIN
app.post('/connect', (res, req) => {
    let adress = req.body.adress;
    let pass = req.body.pass;
    let qr = `SELECT * FROM account WHERE adress = ? AND pass = ?`;

    db.query(qr, [adress, pass], (results, error) => {
        if (!error) {
            if (results.length > 0) {
                res.status(200).send({ message : "Connection réussie" });
            } else {
                res.status(500).send({ message: "Echec de la connection" });
            }
        } else {
            res.status(400).send({ message: "Erreur interne de connection" });
        }
    })
})

// REGISTER
app.post('/register', (res, req) => {
    let user = req.body.user;
    let adress = req.body.adress;
    let phone = req.body.phone;
    let pass = req.body.pass;
    let qr = `INSERT INTO account (user, adress, phone, pass) VALUES (?, ?, ?, ?)`;

    db.query(qr, [user, adress, phone, pass], (results, error) => {
        if (!error) {
            if (results.affectedRows > 0) {
                res.status(200).send({ message : "Enregistrement réussie" });
            } else {
                res.status(500).send({ message: "Echec de l'enregistrement" });
            }
        } else {
            res.status(400).send({ message: "Erreur interne de connection" });
        }
    })
});