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
        console.log("Connection réussie de la base de données");
    } else {
        console.log("Echec de la connection de la base de données");
    }
});

app.listen(PORT, () => {
    console.log("Connection au port serveur " + PORT);
});

// LOGIN
app.post('/connect', (res, req) => {
    let adress = req.body.adress;
    let pass = req.body.pass;
    let qr = `SELECT * FROM account WHERE adress = ? AND pass = ?`;

    db.query(qr, [adress, pass], (result, error) => {
        if (!error) {
            if (result.length > 0) {
                res.status(200).send({ message : "Connexion réussie" });
            } else {
                res.status(400).send({ message: "Echec de la connexion" });
            }
        } else {
            res.status(500).send({ message: "Erreur interne de connexion" });
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

    db.query(qr, [user, adress, phone, pass], (result, error) => {
        if (!error) {
            if (result.affectedRows > 0) {
                res.status(200).send({ message : "Enregistrement réussi" });
            } else {
                res.status(400).send({ message: "Echec de l'enregistrement" });
            }
        } else {
            res.status(500).send({ message: "Erreur interne de connexion" });
        }
    })
})