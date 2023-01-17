/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import multer from "multer";
import md5 from "md5";
import slugify from "slugify";
import fs from 'fs';

/**
 * Execute create folder and file
 */
const storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        cb(null, createFolder(req))
    },
    filename: async function (req, file, cb) {
        cb(null, createFileName(file))
    }
});

/**
 * Create a new folder
 * 
 * @param {any} req 
 * @returns {string}
 */
const createFolder = (req: any): string => {
    const folder: string = slugify(req.body.name)
    const destination: string = `src/uploads/${folder}`
    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination);
    }
    return destination;
}

/**
 * Create file name path
 * 
 * @param {any} file 
 * @returns {string}
 */
const createFileName = (file: any): string => {
    const extension: string = file.originalname.split('.')[1];
    const newName: string = md5('photo-album-name')
    return `${newName}.${extension}`
}

export default {
    import: multer,
    storage
}