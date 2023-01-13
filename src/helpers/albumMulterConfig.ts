/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import multer from "multer";
import md5 from "md5";
import slugify from "slugify";
import fs from 'fs';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, createFolder(req))
    },
    filename: function (req, file, cb) {
        cb(null, createFileName(file))
    }
});

const createFolder = (req: any): string => {
    const folder: string = slugify(req.body.name)
    const destination: string = `./src/uploads/${folder}`
    if (!fs.existsSync(destination)){
        fs.mkdirSync(destination);
    }
    return destination;
}

const createFileName = (file: any): string => {
    const extension: string = file.originalname.split('.')[1];
    const newName: string = md5(file.originalname.split('.')[0])
    return `${newName}.${extension}`
}

export default {
    import: multer,
    storage
}