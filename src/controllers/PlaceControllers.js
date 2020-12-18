const API_URL = process.env.API_URL || "http://localhost:3001";
const { where, Sequelize } = require('sequelize');
var sequelize = require('../config/database.js');
const { findAll } = require('../models/Place');

const Place = require('../models/Place');
const { showDateDay } = require('./CameraControllers.js');

module.exports = {
    async store(req, res) {
        const description = req.body.description;
        const max_quantity = req.body.max_quantity;

        const place = await Place.create({
            description,
            max_quantity,
        });

        return res.json(place);
    },
    async update(req, res) {
        const description = req.body.description;
        const max_quantity = req.body.max_quantity;

        const place = await Place.update({
            description,
            max_quantity,
        }, {where: {id: 1}});

        return res.json(place);
    },
    async show(req, res){
        return res.json(await Place.findAll());
    }
};