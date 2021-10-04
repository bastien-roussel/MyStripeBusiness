const express = require('express');

exports.myRouter = express.Router();


this.myRouter.route('/accueil')
    .get((req, res) => {
        res.status(200).send('Hello Tony ! :) ');
    });