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
        const transaction = await Transaction.finsdAll();

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

const create = async (req, res) => {}
const update = (req, res) => { }
const destroy = (req, res) => { }

module.exports = {
    get,
    create,
    update,
    destroy
}