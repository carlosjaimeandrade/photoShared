/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

const getUser = (req, res) => {
    try {

        res.status(200);
        res.json({
            error: null,
            code: 200,
            user: {}
        })

    } catch (error) {
        res.status(500);
        res.json({
            error: error.message,
            code: 500,
            user: null
        })
    }
}

const updateUser = (req, res) => { }
const createUser = (req, res) => { }
const deleteUser = (req, res) => { }

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}