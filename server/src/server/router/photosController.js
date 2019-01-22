import multer from 'multer';
import {Photo, User} from "../models";
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

module.exports.uploadProfilePicture = async (req, res, next) => {
    try {
        const user = await User.findAll({where: {id: req.params.id}});
        if (user[0].profilePicture !== null) {
            const imageName = user[0].profilePicture.split('/')[3];
            const filePath = './public/img/' + imageName;
            fs.unlinkSync(filePath);
        }
        const storage = multer.diskStorage({
            destination: './public/img/',
            filename: function ( req, file, cb ) {
                const avatarName = req.params.id + '-id-avatar-' + Date.now() + '-' + file.originalname;
                const url = 'http://localhost:3000/' + avatarName;
                cb( null, avatarName);
                const update = {profilePicture: url, updateAt: Date.now()};
                User.update(update, {where: {id: req.params.id}});
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
        const filePath = './public/img/' + photo[0].photoName;
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
    try {
        const photo = await Photo.findAll({where: {userID: req.user.id}});
        res.send(photo);
    } catch (e) {
        next(e);
    }
};

module.exports.getPhotoById = async (req, res, next) => {
    try {
        const photo = await Photo.findById(req.params.id)
        res.send(photo);
    } catch (e) {
        next(e);
    }
};
