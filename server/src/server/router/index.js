import express from 'express';
import "babel-polyfill";

const validationMiddleWare = require('../utils/validationMiddleWare');
const userController = require('./userController');
const photosController = require('./photosController');
const authRequired = require('../utils/authRequired');
const roleCheck = require('../utils/roleCheck');

const router = express.Router();

router.get('/api/user', authRequired, validationMiddleWare.filters, userController.getAllUsers);
router.get('/api/user/:id', authRequired, userController.getUserById);
router.post('/api/user', userController.createUser);
router.put('/api/user/:id', authRequired, roleCheck, userController.updateUser);
router.delete('/api/user/:id', authRequired, roleCheck, userController.deleteUser);
router.post('/api/login', userController.login);

router.put('/api/admin', authRequired, roleCheck, userController.updateUserByAdmin);

router.post('/api/photo/upload/:id', authRequired, roleCheck, photosController.uploadPhoto);
router.post('/api/photo/avatar/:id', authRequired, roleCheck, photosController.uploadProfilePicture);
router.delete('/api/photo/delete/:id&:photoName', authRequired, roleCheck, photosController.deletePhoto);
router.put('/api/photo/update/:id&:photoName', authRequired, roleCheck, photosController.updatePhoto);
router.get('/api/photo/get/:id', authRequired, roleCheck, photosController.getAllPhotos);
router.get('/api/photo/get/:id', authRequired, roleCheck, photosController.getPhotoById);

module.exports = router;

