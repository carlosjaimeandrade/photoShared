/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import md5 from "md5"

/**
 * Rule for generating code for link shared albums
 */
const generate = (): string => {
    const data: string = new Date().toISOString();;
    return md5(data);
}

export default generate