/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import { Request, Response } from "express";

/**
 * @param {Request} req 
 * @param {Response} res 
 */
const signin = (req: Request, res: Response) => {
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

    } catch (error: any) {
        res.status(500);
        res.json({
            error: error.message,
            code: 500,
            user: null
        })
    }
}

/**
 * @param {Request} req 
 * @param {Response} res 
 */
const tokenIsValid = (req: Request, res: Response) => { };

export default {
    signin,
    tokenIsValid
}