/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

/**
 * Rule for generating code for pin albums
 */
const generate = (): number => {
    const pin: number = Math.floor(Math.random() * 9999);;
    return pin;
}

export default generate