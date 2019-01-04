import multer from 'multer';
import {Photo, User} from "../models";
import fs from 'fs';


module.exports.uploadPhoto = async (req, res, next) => {
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
            //save filename into DB
            res.send('uploaded');
        }
    });
};

module.exports.deletePhoto = async (req, res, next) => {
    const filePath = './public/img/' + req.params.photoName;
    await Photo.destroy({where: {photoName: req.params.photoName}})
    console.log(filePath);
    fs.unlinkSync(filePath);
    console.log("file deleted");
    res.send('deleted');
};

module.exports.updatePhoto = async (req, res, next) => {
    const photo = await Photo.findAll({where: {userID: req.params.userID}});

    res.send(photo);
    console.log(photo);



    // await Photo.destroy({where: {userID: req.params.userID}})
    // const storage = multer.diskStorage({
    //     destination: './public/img/',
    //     filename: function ( req, file, cb ) {
    //         const namePhoto = Date.now() + '-' + file.originalname;
    //         cb( null, namePhoto);
    //         Photo.create({userID: req.params.id, photoName: namePhoto});
    //     }
    // });
    // const upload = multer({
    //     storage: storage
    // }).any();
    //
    // upload(req, res, function(err) {
    //     if (err) {
    //         return next(err);
    //     } else {
    //         //save filename into DB
    //         res.send('updated');
    //     }
    // });
};

