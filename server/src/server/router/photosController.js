import multer from 'multer';
import {Photo} from "../models";
import fs from 'fs';
import path from 'path';


module.exports.uploadPhoto = async (req, res, next) => {
    try {
        const storage = multer.diskStorage({
            destination: './public/img/',
            filename: function ( req, file, cb ) {
                const namePhoto = req.params.id + '-id-' + Date.now() + '-' + file.originalname;
                cb( null, namePhoto);
                Photo.create({userID: req.params.id, photoName: namePhoto});
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
                const updatedPhoto = {photoName: newPhotoName, updateAt: Date.now()};
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

        const imgURL = {url: 'http://localhost:3000/25-id-1547478817267-001-aeroplane.png'};
        //const imgURL = 'http://localhost:3000/25-id-1547478817267-001-aeroplane.png';
        res.send(imgURL);
    } catch (e) {
        next(e);
    }


    //fs.readFile('../../public/pexels-photo-46710.jpeg');

    //const folders = fs.readdirSync('../../public/');

    // const objArray = [];
    // objArray.push(fs.readdirSync('../../public/pexels-photo-46710.jpeg'));
    // console.log(objArray[0])

    //
    // folders.forEach((folder) => {
    //     const obj    = {};
    //     const files  = fs.readdirSync('../../public/' + folder);
    //     obj.folder = folder;
    //     obj.files  = files;
    //     objArray.push(obj);
    //     console.log(objArray[0])
    // });
    // console.log(objArray[0])
    //res.render('index', { data: JSON.stringify(objArray) });


    //res.sendFile('/server/src/public/pexels-photo-46710.jpeg');


    //const path = path.join(__dirname, '../../public/', 'pexels-photo-46710.jpeg');
    // res.sendFile(path.join(__dirname, '../../public/', 'pexels-photo-46710.jpeg'), {
    //     bufferSize: 10240
    // });


    //res.sendFile('/src/public/pexels-photo-46710.jpeg');


    // try {
    //
    //     const photo = await Photo.findAll();
    //     res.send(photo);
    // } catch (e) {
    //     next(e);
    // }
};

