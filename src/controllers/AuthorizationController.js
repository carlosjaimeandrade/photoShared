/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

const signin = (req, res) => {
    try {

        res.status(200);
        res.json({
            error: null,
            code: 200,
            user: {
                id: "",
                avatar: "",
                name: "",
                email: "",
                type: "",
                token: ""
            }
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

const tokenIsValid = (req, res) => { };

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}