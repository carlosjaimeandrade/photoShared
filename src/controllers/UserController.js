/**
 * meuvooooooo
 * @param {*} req 
 * @param {*} res 
 */
const get = (req, res) => {
    try {

        res.status(200);
        res.json({
            error: null,    
            error: message['200'],
            user: {}
        })

    } catch (error) {
        log.err(error.message)
        res.status(500);
        res.json({
            code: 500,
            error: message['500'],
            user: null
        })
    }
}

/**
 * meuvooooooo
 * @param {*} req 
 * @param {*} res 
 */
const update = (req, res) => { }

/**
 * meuvooooooo
 * @param {*} req 
 * @param {*} res 
 */
const create = (req, res) => { }

/**
 * meuvooooooo
 * @param {*} req 
 * @param {*} res 
 */
const destroy = (req, res) => { }

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}