/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import multer from "multer";
import md5 from "md5";
import slugify from "slugify";
import fse from 'fs-extra'
import Album from "../../Models/Album";

/**
 * Execute update folder and file
 */
const storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        await updateFolder(file, req)
    },
    filename: async function (req, file, cb) {
        cb(null, createFileName(file))
    }
});


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

/**
 * Update folder case the name of album are updated 
 * 
 * @param {any} file 
 * @param {any} req 
 */
const updateFolder = async (file: any, req: any) => {
    const album = await Album.findOne({ where: { id: req.params.id } })
    const nameFolder: string = slugify(album!.name)
    const lastFolder: string = "src/uploads/" + nameFolder;
    const newFolder: string = slugify(req.body.name)
    const newDestination: string = `src/uploads/${newFolder}`
    renamePath(lastFolder, newDestination)
}

/**
 * Rename the folder
 * 
 * @param path 
 * @param newPath 
 * @returns {string}
 */
const renamePath = (path: string, newPath: string) => {
    if (fse.existsSync(newPath)) {
        return
    }

    if (fse.lstatSync(path).isDirectory()) {
        fse.copySync(path, newPath);
        fse.rmdirSync(path, { recursive: true });
    } else if (fse.lstatSync(path).isFile()) {
        fse.renameSync(path, newPath);
    }
}

export default {
    import: multer,
    storage
}