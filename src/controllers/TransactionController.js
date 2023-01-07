/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

const Transaction = require('../Models/Transaction')
const { message } = require('../helpers/message');
const { log } = require('../helpers/monolog');

/**
 * Get all transaction
 * 
 * @param {*} req 
 * @param {*} res 
 */
const get = async (req, res) => {
    try {
        const transaction = await Transaction.findAll();

        res.status(200);
        res.json({
            error: null,
            code: 200,
            transaction
        })

    } catch (error) {
        log.err(error.message)
        res.status(500);
        res.json({
            error: message['500'],
            code: 500,
            transaction: {}
        })
    }
}

/**
 * Create a new transaction
 * 
 * @param {*} req 
 * @param {*} res 
 */
const create = async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body);

        res.status(200);
        res.json({
            error: null,
            code: 200,
            transaction
        })

    } catch (error) {
        log.err(error.message)
        res.status(500);
        res.json({
            error: message['500'],
            code: 500,
            transaction: {}
        })
    }
}

/**
 * Update a single item in the database transaction
 * 
 * @param {*} req 
 * @param {*} res 
 */
const update = async (req, res) => { 
    try {
        await Transaction.update(req.body, {
            where: { id: req.params.id }
        });

        res.status(200);
        res.json({
            error: null,
            code: 200
        })

    } catch (error) {
        log.err(error.message)
        res.status(500);
        res.json({
            error: message['500'],
            code: 500,
            transaction: {}
        })
    }
}

const destroy = (req, res) => { }

module.exports = {
    get,
    create,
    update,
    destroy
}