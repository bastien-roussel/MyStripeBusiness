//DÉPENDANCES
const express = require('express')
const dotenv = require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');

//FICHIERS
const router = require('./router');
const stripe = require('./stripe')

//CONFIG EXPRESS
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(router.myRouter);


// La fonction s'exécute au lancement du projet. 
// Mais il faudra penser à faire tourner cette fonction automatiquement dans une tâche CRON quotidiennement
stripe.stripeListCustomers();


module.exports = app;