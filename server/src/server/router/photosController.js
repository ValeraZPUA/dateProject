import multer from 'multer';
import {Photo} from "../models";
import fs from 'fs';

module.exports.uploadPhoto = async (req, res, next) => {
    try {
        const storage = multer.diskStorage({
            destination: './public/img/',
            filename: function ( req, file, cb ) {
                const namePhoto = req.params.id + '-id-' + Date.now() + '-' + file.originalname;
                const url = 'http://localhost:3000/' + namePhoto;
                cb( null, namePhoto);
                Photo.create({userID: req.params.id, photoName: namePhoto, url: url});
            }
        });
        const upload = multer({
            storage: storage
        }).any();

        upload(req, res, function(err) {
            if (err) {
                return next(err);
            } else {
                res.send('uploaded');
            }
        });
    } catch (e) {
        next(e);
    }
};

module.exports.deletePhoto = async (req, res, next) => {
    try {
        const filePath = './public/img/' + req.params.photoName;
        await Photo.destroy({where: {photoName: req.params.photoName}});
        fs.unlinkSync(filePath);
        res.send('deleted');
    } catch (e) {
        next(e);
    }
};

module.exports.updatePhoto = async (req, res, next) => {
    try {
        const photo = await Photo.findAll({where: {userID: req.params.id, photoName: req.params.photoName}});
        console.log('PHOTO' + photo);
        const filePath = './public/img/' + photo[0].photoName;
        console.log('FILEPATH' + filePath);
        fs.unlinkSync(filePath);

        const storage = multer.diskStorage({
            destination: './public/img/',
            filename: function ( req, file, cb ) {
                const newPhotoName = req.params.id + '-id-' + Date.now() + '-' + file.originalname;
                cb( null, newPhotoName);
                const url = 'http://localhost:3000/' + newPhotoName;
                const updatedPhoto = {photoName: newPhotoName, updateAt: Date.now(), url: url};

                Photo.update(updatedPhoto, {where: {photoName: photo[0].photoName}});
            }
        });
        const upload = multer({
            storage: storage
        }).any();

        upload(req, res, function(err) {
            if (err) {
                return next(err);
            }
        });
        res.send('updated');
    } catch (e) {
        next(e);
    }
};

module.exports.getUserPhotos = async (req, res, next) => {
    try {
        const photo = req.params;
        const photos = await Photo.findAll({where: {userID: photo.id}});
        res.send(photos);
    } catch (e) {
        next(e);
    }
};


module.exports.getAllPhotos = async (req, res, next) => {
    console.log("HERE");

    try {
        const photo = await Photo.findAll({where: {userID: req.user.id}});
        res.send(photo);
    } catch (e) {
        next(e);
    }
};

module.exports.getPhotoById = async (req, res, next) => {
    try {
        console.log("SERVER getPhotoById")
        const photo = await Photo.findById(req.params.id)
        res.send(photo);
    } catch (e) {
        next(e);
    }
};
